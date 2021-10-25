import Button from './Button'
import {validateName, validateFoundation, validateWins} from '../utils/validator'
import axios from 'axios'
import { useSession } from '../SessionProvider'
import ResponseMessage from './ResponseMessage'
import '../styling/TeamForm.css'
import { useState } from 'react'

const TeamForm = (props) => {

    const [error, setError] = useState(null)
    const [msgColor, setMsgColor] = useState('red')
    const [name, setName] = useState(props.team.name)
    const [founded, setFounded] = useState(props.team.founded)
    const [wins, setWins] = useState(props.team.wins)
    const [paid, setPaid] = useState(props.team.paid)
    const session = useSession()

    const baseURL = 'http://localhost:8080/api/teams';

    const submitOnClick = () =>
    {
        let errorMsg = validateName(name);
        if(errorMsg!==null) 
        {
            setMsgColor('red');
            setError(errorMsg);
            return;
        };

        errorMsg = validateFoundation(founded);
        if(errorMsg!==null) 
        {
            setMsgColor('red');
            setError(errorMsg);
            return;
        };

        errorMsg = validateWins(wins);
        if(errorMsg!==null) 
        {
            setMsgColor('red');
            setError(errorMsg);
            return;
        };
        if(props.submitType==='add'){
            axios.post(baseURL, {
                name: name,
                founded: founded,
                win_nr: wins,
                paid: paid
            },{
                headers: {
                    'Authorization': 'Bearer '+session.accessToken
                }
            })
            .then((response) =>{
                if(response.status === 200){
                    setMsgColor('green');
                    setError('New team added successfully!')
                }
                else{
                    setMsgColor('red');
                    setError('Some kind of server error occured!')
                }
            })
        }
        if(props.submitType==='modify'){
            axios.put(baseURL+'/'+props.team.id, {
                name: name,
                founded: founded,
                win_nr: wins,
                paid: paid
            },{
                headers: {
                    'Authorization': 'Bearer '+session.accessToken
                }
            })
            .then((response) =>{
                if(response.status === 200){
                    setMsgColor('green');
                    setError('Team, '+props.team.name+' modified successfully!')
                }
                else{
                    setMsgColor('red');
                    setError('Some kind of server error occured!')
                }
            })
        }
    };
    return (
        <>
            <div className='newteam-form-container'>
                    <div className='spaceAfter'>
                        <div className='spaceAfter'>Name:</div>
                        <input className='input100' defaultValue={props.team.name} onChange={event => {setName(event.target.value)
                                                                        setError(null)
                        }}></input>
                    </div>
                    <div className='spaceAfter'>
                        <div className='spaceAfter'>Founded in:</div>
                        <input className='input100' defaultValue={props.team.founded} type='number' min='1900' onChange={event => {setFounded(event.target.value);
                                                                                                 setError(null);
                        }}></input>
                    </div>
                    <div className='spaceAfter'>
                        <div className='spaceAfter'>Number of wins:</div>
                        <input className='input100' defaultValue={props.team.wins} type='number' min='0' onChange={event => {setWins(event.target.value);
                                                                                              setError(null);
                        }}></input>
                    </div>
                    <div className='checkboxOption'>
                        <div>Tournament fee paid:</div>
                        <input className='checkboxPaid' defaultChecked={props.team.paid} type='checkbox' onChange={event => setPaid(event.target.checked)}></input>
                    </div>
                </div>
                <div className='button-container'>
                    <Button text='Submit' onClick={submitOnClick}/>
                </div>
                <div className='errormsg'>
                    <ResponseMessage message={error} color={msgColor}/>
            </div>
        </>
    )
}

TeamForm.defaultProps = {
    submitType:'none',
    team:{
        id:'',
        name:'',
        founded:'',
        wins:'',
        paid: false,
        user:''
    }
}

export default TeamForm;
