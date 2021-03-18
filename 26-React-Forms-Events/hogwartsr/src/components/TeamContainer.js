import StudentCard from './StudentCard'

const TeamContainer = ({ wizards, removeFromTeam }) => {
    return (
       <div className="border border-success">
            <h2 className="text-center">Your Hogwarts Crew</h2>
            <div className="card-group m-2 p-1 bg-primary">
                {wizards.map(
                    wizard => <StudentCard clickAction={removeFromTeam} wizard={wizard}/>
                )}
            </div>
        </div> 
    )
}

export default TeamContainer