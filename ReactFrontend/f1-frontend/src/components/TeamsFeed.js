import {useEffect} from 'react';
import TeamsFeedItem from './TeamsFeedItem';
import { useTeams, useRefreshContext } from '../TeamsProvider';
import '../styling/TeamsFeed.css';

const TeamsFeed = () => {
    const teams = useTeams()
    const refreshTeams = useRefreshContext();
    useEffect(() => {
        refreshTeams();
    });
    return (
        <div className='teamsfeed'>
            {teams.map((team) => (
                <TeamsFeedItem key={team.id} id_={team.id} name={team.name_} founded={team.founded} wins={team.win_nr} paid={team.paid} user={team.created_by_user}/>
            ))}
        </div>
    )
}

export default TeamsFeed;
