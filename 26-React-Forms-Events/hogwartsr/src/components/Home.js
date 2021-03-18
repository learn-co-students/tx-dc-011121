const Home = ({ changeToSearch }) => {
    
    return (
          <div className="jumbotron bg-secondary text-center text-danger">
            <div className="container">
                <div className="ht-tm-header">
                    <h1 className="display-1 display-xxl text-uppercase">Hogwartsr</h1>
                    <span className="lead">A cool app to see cool harry potter things</span>
        
                    <div className="mt-4">
                        <button onClick={changeToSearch} className="btn btn-danger btn-lg m-2 text-secondary">
                            <span>See the Wizards</span>
                        </button>
        
                        <button className="btn btn-danger text-secondary btn-lg m-2">
                            <span>Make a Team</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home