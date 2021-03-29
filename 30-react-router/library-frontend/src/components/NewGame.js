import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Platforms = () => [
    'Nintendo Switch',
    'PC',
    'XBOX',
    'Playstation'
]

class NewGame extends React.Component {
    
    state = {
        title: "",
        img: "",
        production: "",
        platform: Platforms()[0],
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newGameObj = { ...this.state }

        fetch('http://localhost:3000/games',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ game: newGameObj })
        })
        .then(res => res.json())
        .then(newGame => this.props.addGame(newGame))
    }

    render(){
        return (
            <Form id="newgame" style={{ width: "800px", margin: '0 auto' }} onSubmit={this.handleSubmit} autoComplete="off">
                <span> 
                    <h3> Add new game! </h3> 
                </span>
    
                <Form.Group onChange={this.handleInputChange}>

                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter name of the game" />
    
                    <Form.Label>Image</Form.Label>
                    <Form.Control name="img" type="text" placeholder="Enter Image URL" />
                    
                    <Form.Label>Production</Form.Label>
                    <Form.Control name="production" type="text" placeholder="Enter name of the production" />

                    <Form.Label>Select Platform</Form.Label>
                    <Form.Control name="platform" as="select">
                        {
                            Platforms().map(platform => <option key={platform.toLowerCase()}> {platform} </option>)
                        }                    
                    </Form.Control>

                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Add to my collection!
                </Button>
    
            </Form>
        )
    }
}

export default NewGame;