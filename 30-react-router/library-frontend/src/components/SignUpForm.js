import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { withRouter } from 'react-router'


class SignUpForm extends React.Component {
    
    state = {
        email: '',
        password: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { ...this.state }})
        }).then(res => res.json())
        .then(_ => {
            alert(_.msg)
            this.props.history.push('/login')
         })
    }

    render(){
        return (
            <Form style={{ width: "800px", margin: '0 auto' }} onSubmit={this.handleSubmit}>
                <span> 
                    <h3>Signup </h3> 
                </span>
    
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" values={this.state.email} placeholder="Enter email" onChange={this.handleInputChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default withRouter(SignUpForm);