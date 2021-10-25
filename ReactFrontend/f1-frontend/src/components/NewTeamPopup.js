import Popup from './Popup'
import TeamForm from './TeamForm';

const NewTeamPopup = (props) => 
{
    return (
        <div>
            <Popup title={'Add new team'} trigger={props.trigger} triggerUpdate={props.triggerUpdate}>
                <TeamForm submitType='add'/>
            </Popup>
        </div>
    )
}

export default NewTeamPopup;
