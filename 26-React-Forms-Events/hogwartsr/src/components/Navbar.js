

const Navbar = ({ changeToHome }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <h4 onClick={changeToHome} className="navbar-brand">Hogwartsr</h4>
            </div>
        </nav>
    )
}

export default Navbar