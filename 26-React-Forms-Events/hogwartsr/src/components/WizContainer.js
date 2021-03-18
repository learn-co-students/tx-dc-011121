import StudentCard from './StudentCard'

const WizContainer = ({ wizards, addToTeam }) => {
    return (
        <div className="container m-3">
            <div className="row justify-content-md-center">
                   {wizards.map(
                       wizard => <StudentCard clickAction={addToTeam}  wizard={wizard}/>
                   )}
            </div>
        </div>
    )
}

export default WizContainer
