import { BlindTestButton } from "./blindtestButtonAll";

export const Game = () => {
function handleClick() {
    const playButton = document.getElementById('playButton') as HTMLButtonElement;
    let count = 5;
    const intervalStartingGame = setInterval(() => {
        count--;
        if (count === 0) {
            clearInterval(intervalStartingGame);
            playButton.textContent = 'Le jeu commence !';
            // Add code here to start the game (display the first song, start the timer, etc.) on the server side.
        } else {
            playButton.textContent = "Le jeu commence dans : " + count.toString();
            // Add code here to send the countdown to the other players.
        }
    }, 1000);
}

    return (
        <div className="CountdownSection w-[40%] h-[288px] mx-[35%] mb-10 relative bg-zinc-300 flex justify-center items-center">
            <div className="ImagePlaceholder w-full h-full bg-zinc-300" />
            <BlindTestButton
                id="playButton"
                onClick={handleClick}
                insideText="Jouer"
                disabled={false}
            />
        </div>
    );
};