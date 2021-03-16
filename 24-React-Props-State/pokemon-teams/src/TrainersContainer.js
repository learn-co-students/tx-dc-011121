import TrainerCard from './TrainerCard'

const TrainersContainer = (props) => {

  return (
    <main>
      {
        props.data.map(trainerObj => {
          return <TrainerCard key={trainerObj.id} trainer={trainerObj} />
        })
      }
    </main>
  )
}

export default TrainersContainer
