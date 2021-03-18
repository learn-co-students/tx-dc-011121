const StudentCard = ({ wizard }) => {
    const { name, image, house, points } = wizard
    return (
        <div className="col-sm-3 mb-1" >
            <div className="card text-center" >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">House: {house}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">House Points: {points}</small>
                </div>
            </div>
        </div>
    )
}

export default StudentCard 