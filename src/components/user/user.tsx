import { useState, useEffect } from "react";
import { Navbar } from "../navbar";
import { useNavigate } from "react-router-dom";

export const User = () => {
    const navigate = useNavigate();
    const playButton = document.getElementById('PlayButton') as HTMLButtonElement;
    const [isDisabled, setIsDisabled] = useState(true);
    const [pseudo, setPseudo] = useState('');

    useEffect(() => {
        const storedPseudo = localStorage.getItem('pseudo');
        if (storedPseudo) {
            navigate('/');
        }
    }, [navigate]);

    const handleStorePseudo = () => {
        localStorage.setItem('pseudo', pseudo);
    }

    function handlePseudoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPseudo(event.target.value);
        if (event.target.value.length >= 2) {
            setIsDisabled(false);
        }
    }

    function handleClick() {
        if (playButton) {
            let count = 5;
            const intervalStartingGame = setInterval(() => {
                count--;
                if (count === 0) {
                    handleStorePseudo();
                    clearInterval(intervalStartingGame);
                    console.log('Game started!');
                    playButton.textContent = 'Le jeu commence !';
                    navigate(`/categories`)

                } else {
                    playButton.textContent = count.toString();
                }
            }, 1000);
        }
    }

    return (
        <>
        <Navbar/>
            <div className="UserSection flex justify-center h-10 text-center ">
                <div className="Artist w-20 text-xl border-2 border-black rounded-lg mx-2">Pseudo </div>
                    <div className="Nickname w-60 text-xl border-2 border-black rounded-lg mx-2">
                        <input type="text" placeholder="Insérez votre pseudo" value={pseudo} onChange={handlePseudoChange} />
                    </div>
                </div>
            <div className="PlayButton mt-10 flex justify-center">
                <button id="PlayButton" disabled={isDisabled} onClick={handleClick} className="bg-zinc-300 hover:bg-zinc-400 text-black font-bold py-2 px-4 rounded-full">
                    Jouer
                </button>
            </div>
        </>
    );
};