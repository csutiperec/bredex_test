import Button from './Button';
import Popup from './Popup'
import axios from 'axios'
import { useSession } from '../SessionProvider'
import {useState} from 'react'
import ResponseMessage from './ResponseMessage'

const DeleteTeamPopup = (props) => 
{
    const [error, setError] = useState(null)
    const [msgColor, setMsgColor] = useState('red')
    const session= useSession();
    const baseURL = 'http://localhost:8080/api/teams';
    const yesOnClick = () =>{
        axios.delete(baseURL+'/'+props.team.id,{
            headers: {
                'Authorization': 'Bearer '+session.accessToken
            }
        })
        .then((response) =>{
            if(response.status === 200){
                props.triggerUpdate()
            }
            else{
                setMsgColor('red');
                setError('Some kind of server error occured!')
            }
        })
    };

    return (
        <div>
            <Popup title={'Delete team '+props.team.name+'?'} trigger={props.trigger} triggerUpdate={props.triggerUpdate}>
                <div>
                    <Button text='Yes' onClick={yesOnClick} btnStyle='btn_default greenhover'/>
                    <Button text='No' onClick={props.triggerUpdate} btnStyle='btn_default redhover'/>
                </div>
                <ResponseMessage message={error} color={msgColor}/>
            </Popup>
        </div>
    )
}

export default DeleteTeamPopup;
