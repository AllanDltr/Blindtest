export const Game = () => {
    return (
        <div className="CountdownSection w-[40%] h-[288px] mx-[35%] mb-10 relative bg-zinc-300">
            <div className="ImagePlaceholder w-full h-full bg-zinc-300" />
            <div className="Countdown w-full top-[130px] flex justify-center items-center absolute  bg-zinc-300 text-xl">Timer</div>
        </div>
    );
};

// The idea here is to show a timer while the player is playing the song.
// When the timer reaches 0, it's hidden and instead there is the image of the album cover.
// Under the album there is the artist and the title of the song.