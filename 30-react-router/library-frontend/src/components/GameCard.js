import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GameCard = ({ id, title, img, production, platform, deleteGame }) => {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text> Production: {production} </Card.Text>
                <Card.Text> Platform: {platform} </Card.Text>
                <Button onClick={() => deleteGame(id)} variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default GameCard;