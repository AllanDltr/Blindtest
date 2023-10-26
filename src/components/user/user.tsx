import { Navbar } from "../navbar"

export const User = () => {
    return (
        <>
            <Navbar />
            <div className="UserSection flex justify-center h-10 text-center ">
                <div className="Artist w-20 text-xl border-2 border-black rounded-lg mx-2">Pseudo </div>
                <div className="ArtistAnswer w-60 text-xl border-2 border-black rounded-lg mx-2"> Insérez votre pseudo</div>
            </div>
            <div className="PlayButton mt-10 flex justify-center">
                <button className="bg-zinc-300 hover:bg-zinc-400 text-black font-bold py-2 px-4 rounded-full">
                    Jouer
                </button>
            </div>
        </>
    );
};

// The idea here is to have a section where the player can write his pseudo and then click on the "Jouer" button to start the game.