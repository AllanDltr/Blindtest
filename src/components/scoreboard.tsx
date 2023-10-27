export const Scoreboard = () => {
    return (
        <>
            <div className="ScoreboardSection ml-5 top-[325px] absolute ">
                <div className="Background w-[200px] h-[300px] bg-zinc-300">
                    <div className="Score w-[200px] top-[5px]  text-center text-xl  bg-zinc-300">Score</div>
                    <div className="LineSeparator w-[200px] top-[34px]  border border-black"></div>
                    <div className="PlayerList w-[200px]  text-xl ">
                        <div className="flex justify-between bg-zinc-300	">
                            <div className="Player1 bg-zinc-300">Player 1</div>
                            <div className="Player1 top-[43px]  bg-zinc-300">Score XXX</div>
                        </div>
                        <div className="Player2 top-[71px]  bg-zinc-300">Player 2</div>
                    </div>
                </div>
            </div>
        </>
    );
};

// The idea here is to get datas (player's name and score) from the browser's local storage and display them in the scoreboard.