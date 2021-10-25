import { useSession } from '../SessionProvider';
import Button from './Button';
import { useState } from 'react';
import ModifyTeamPopup from './ModifyTeamPopup';
import { useRefreshContext } from '../TeamsProvider';

const ModifyTeamButton = (props) => {
    const session = useSession();
    const refreshTeams = useRefreshContext();
    const [pressed, setPressed] = useState(false);

    const onClickEvent = (event) => {
        refreshTeams();
        document.body.style.overflow = 'scroll';
        setPressed(!pressed);
    };

    return (
        <div>
            {session.accessToken!=='' ? <Button onClick={onClickEvent} text='Modify'/> : ''}
            <ModifyTeamPopup trigger={pressed} triggerUpdate={onClickEvent} team={props.team}/>
        </div>
    )
}

export default ModifyTeamButton;
