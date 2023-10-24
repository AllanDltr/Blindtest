import { useNavigate } from "react-router-dom"
export const Room = () => {
  const navigate = useNavigate()
  return (
      <div className="Room">
        <img className="BlindTestLogoStock w-[40%] mx-[35%] my-10 relative" src="./src/assets/blindtest.png" onClick={() => navigate(`/`)}/>
        <div className="CountdownSection w-[40%] h-[288px] mx-[35%] mb-10 relative bg-zinc-300">
            <div className="ImagePlaceholder w-full h-full bg-zinc-300" />
            <div className="Countdown w-full top-[130px] flex justify-center items-center absolute  bg-zinc-300 text-xl">Timer</div>
        </div>
        <div className="AnswerSection mx-[45%] relative">
          <div className="Artist w-20 h-10 absolute text-xl border-2 border-black rounded-lg text-center align-middle	">Artiste</div>
          <div className="ArtistAnswer w-60 h-10 left-[100px]  absolute border-2 border-black rounded-lg  text-black text-opacity-50 text-xl ">Réponse ...</div>
          <div className="Title w-20 h-10 top-[63px] text-xl border-2 border-black rounded-lg absolute text-center">Titre</div>
          <div className="AnswerTitle w-60 h-10 left-[100px] top-[63px] absolute border-2  border-black rounded-lg text-black text-opacity-50 text-xl">Réponse ...</div>
        </div>
        <div className="ScoreboardSection ml-5 top-[325px] absolute">
          <div className="Background w-[150px] h-[300px] bg-zinc-300" />
          <div className="Score w-[150px] top-[5px] absolute text-center text-xl  bg-zinc-300">Score</div>
          <div className="LineSeparator w-[150px] top-[34px] absolute border border-black"></div>
          <div className="PlayerList w-24 pl-1 text-xl">
            <div className="Player1 top-[43px] absolute bg-zinc-300">Player 1</div>
            <div className="Player2 top-[71px] absolute bg-zinc-300">Player 2</div>
          </div>
        </div>
      </div>
  )
}