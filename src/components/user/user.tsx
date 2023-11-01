import { useState, useEffect } from "react";
import { Navbar } from "../header";
import { useNavigate } from "react-router-dom";
import { BlindTestButton } from "../buttons";

export const User = () => {
    const navigate = useNavigate();
    const playButton = document.getElementById('playButton') as HTMLButtonElement;
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
            let count = 3;
            const intervalStartingGame = setInterval(() => {
                count--;
                if (count === 0) {
                    handleStorePseudo();
                    clearInterval(intervalStartingGame);
                    console.log("Ton pseudo est : " + pseudo);
                    playButton.textContent = 'Pseudo enregistré !';
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
                <BlindTestButton
                    id="playButton"
                    onClick={handleClick}
                    disabled={isDisabled}
                    insideText="Jouer"
                />
            </div>
        </>
    );
};