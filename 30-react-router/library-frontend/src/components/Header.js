import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <>
            <span> 
                <h1> Game Library </h1> 
            </span>

            <Nav variant="pills" defaultActiveKey="home" className="justify-content-center">
                <Nav.Item as="li">
                    <Nav.Link eventKey="home" href="/">Home</Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                    <Nav.Link eventKey="new" href="#newgame">Add New Game</Nav.Link>
                </Nav.Item>
                
                <Nav.Item as="li">
                    <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                
                <Nav.Item as="li">
                    <Nav.Link eventKey="signup">Signup</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Header;