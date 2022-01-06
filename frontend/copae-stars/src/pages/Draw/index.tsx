import DrawCard from '../../components/DrawCard.tsx'

function Draw() {
  return (
    <>
      <h1>Choose your draw option</h1>
      <div className="draw-card-container">
        <DrawCard link="/draw/league">League</DrawCard>
        <DrawCard link="/draw/counter">Counter-Strike</DrawCard>
        <DrawCard link="/draw/number">Numbers</DrawCard>
        <DrawCard link="/draw/names">Names</DrawCard>
      </div>
    </>
  )
}

export default Draw
