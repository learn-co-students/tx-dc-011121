import { CardColumns as Group } from 'react-bootstrap';
import GameCard from '../components/GameCard';

const GamesContainer = ({ games, deleteGame }) => {
    return (
        <Group className={'games-card-group'}>
            {
                games.map(game => <GameCard key={game.id} {...game} deleteGame={deleteGame} /> )
            }
        </Group>
    )
}

export default GamesContainer;