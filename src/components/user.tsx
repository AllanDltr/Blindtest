export const User = () => {
    function handleClick() {
        const playButton = document.getElementById('PlayButton');
        if (playButton) {
            let count = 5;
            const intervalStartingGame = setInterval(() => {
                count--;
                if (count === 0) {
                    clearInterval(intervalStartingGame);
                    console.log('Game started!');
                    playButton.textContent = 'Le jeu commence !';
                    // Add code to start the game here
                } else {
                    playButton.textContent = count.toString();
                }
            }, 1000);
        }
    }

    return (
        <>
            <div className="UserSection flex justify-center h-10 text-center ">
                <div className="Artist w-20 text-xl border-2 border-black rounded-lg mx-2">Pseudo </div>
                    <div className="Nickname w-60 text-xl border-2 border-black rounded-lg mx-2">
                        <input type="text" placeholder="Insérez votre pseudo" />
                    </div>
                </div>
            <div className="PlayButton mt-10 flex justify-center">
                <button onClick={handleClick} id="PlayButton" className="bg-zinc-300 hover:bg-zinc-400 text-black font-bold py-2 px-4 rounded-full">
                    Jouer
                </button>
            </div>
        </>
    );
};

// The idea here is to have a section where the player can write his pseudo and then click on the "Jouer" button to start the game.