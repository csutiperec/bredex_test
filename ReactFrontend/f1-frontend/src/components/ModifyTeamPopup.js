import Popup from './Popup'
import TeamForm from './TeamForm';

const ModifyTeamPopup = (props) => 
{
    return (
        <div>
            <Popup title={'Modify Team'} trigger={props.trigger} triggerUpdate={props.triggerUpdate}>
                <TeamForm submitType='modify' team={props.team}/>
            </Popup>
        </div>
    )
}

export default ModifyTeamPopup;
