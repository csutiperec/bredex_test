import '../styling/TeamsFeedItem.css';
import { useSession } from '../SessionProvider';
import ModifyTeamButton from './ModifyTeamButton';
import DeleteTeamButton from './DeleteTeamButton';
import {useState} from 'react'

const TeamsFeedItem = (props) => {
    const session = useSession();
    const [showOptions, setShowOptions] = useState(false);

    const onMouseEnterHandler = () => {
        if(session.username===props.user){
            setShowOptions(true);
        }
    };

    const onMouseLeaveHandler = () => {
        setShowOptions(false)
    };

    return (
        <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className={'teamsfeeditem-container'}>
            <div className='team-container'>
                <h3 className='teamdetails-name'>{props.name}</h3>
                <div className='teamdetails-container'>
                    <div className='teamdetails-text'>
                        <div>Founded in:</div>
                        <div>Number of wins:</div>
                        <div>Tournament fee paid:</div>
                        <div>Team created by user:</div>
                    </div>
                    <div className='teamdetails-values'>
                        <div>{props.founded}</div>
                        <div>{props.wins}</div>
                        <div>{props.paid ? 'yes' : 'no'}</div>
                        <div>{props.user}</div>
                    </div>
                </div>

            </div>
            {
                    showOptions?
                        <div className='teamdetails-buttons'>
                            <ModifyTeamButton team={{id:props.id_, name:props.name, founded:props.founded, wins:props.wins, paid:props.paid, user:props.user}}/>
                            <DeleteTeamButton team={{id:props.id_, name:props.name}}/> 
                        </div>
                    :
                        <div className='teamdetails-buttons'></div>
                }
        </div>
    )
}

export default TeamsFeedItem;
