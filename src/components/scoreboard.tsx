export const Scoreboard = () => {
    return (
        <div className="ScoreboardSection ml-5 top-[325px] absolute">
            <div className="Background w-[150px] h-[300px] bg-zinc-300" />
            <div className="Score w-[150px] top-[5px] absolute text-center text-xl  bg-zinc-300">Score</div>
            <div className="LineSeparator w-[150px] top-[34px] absolute border border-black"></div>
            <div className="PlayerList w-24 pl-1 text-xl">
                <div className="Player1 top-[43px] absolute bg-zinc-300">Player 1</div>
                <div className="Player2 top-[71px] absolute bg-zinc-300">Player 2</div>
            </div>
        </div>
    );
};