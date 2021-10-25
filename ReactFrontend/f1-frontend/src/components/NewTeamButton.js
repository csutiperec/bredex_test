import { useSession } from '../SessionProvider';
import Button from './Button';
import { useState } from 'react';
import NewTeamPopup from './NewTeamPopup';
import { useRefreshContext } from '../TeamsProvider';

const NewTeamButton = () => {
    const session = useSession();
    const refreshTeams = useRefreshContext();
    const [pressed, setPressed] = useState(false);

    const onClickEvent = () => {
        refreshTeams();
        document.body.style.overflow = 'scroll';
        setPressed(!pressed);
    };

    return (
        <div>
            {session.accessToken!=='' ? <Button onClick={onClickEvent} text='Create new team'/> : ''}
            <NewTeamPopup trigger={pressed} triggerUpdate={onClickEvent}/>
        </div>
    )
}

export default NewTeamButton;
