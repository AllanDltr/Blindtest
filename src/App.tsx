import './App.css'

export const App =  () => {

  return (
    <div className="Room w-screen h-screen bg-zinc-500">
      <img className="BlindTestLogoStock w-[40%] left-[35%] right-[50%] top-[50px] relative" src="./src/assets/blindtest.png" />
      <div className="CountdownSection w-[600px] h-[288px] left-[40%] top-[400px] absolute">
          <div className="ImagePlaceholder w-full h-full  bg-zinc-300" />
          <div className="Countdown w-full top-[130px] flex justify-center items-center absolute  text-xl">Timer</div>
      </div>
      <div className="AnswerSection w-80 h-20 left-[50%] top-[750px] absolute">
        <div className="Artist w-20 h-6 absolute text-xl">Artiste</div>
        <div className="ArtistAnswer w-60 h-6 left-[100px] absolute text-black text-opacity-50 text-xl ">Réponse ...</div>
        <div className="Title w-20 h-6 top-[63px] text-xl absolute">Titre</div>
        <div className="AnswerTitle w-60 h-6 left-[100px] top-[63px] absolute text-black text-opacity-50 text-xl">Réponse ...</div>
      </div>
      <div className="ScoreboardSection left-[20px] top-[325px] absolute">
        <div className="Background w-[160px] h-[320px] bg-zinc-300" />
        <div className="Score w-40 top-[5px] absolute text-center text-xl ">Score</div>
        <div className="LineSeparator w-[160px] top-[34px] absolute border border-black"></div>
        <div className="Player1 w-24 left-[5px] top-[43px] absolute text-xl ">Player 1</div>
        <div className="Player2 w-24 left-[5px] top-[71px] absolute text-xl ">Player 2</div>
      </div>
    </div>
  )
}