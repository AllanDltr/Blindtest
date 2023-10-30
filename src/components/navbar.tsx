import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import {useState} from "react"

export const Navbar = () => {
    const navigate = useNavigate()
    const pseudoFromLocalStorage = localStorage.getItem('pseudo');
    const [pseudo] = useState<string>(pseudoFromLocalStorage || 'Accueil');
    return (
        <>
            <nav className="flex">
                <Link to="/" className="pl-8">{pseudo}</Link>
                <Link to="/room" className="pl-8">Salles</Link>
            </nav>
            <img className="BlindTestLogoStock w-[40%] mx-[35%] my-10 relative" src="./src/assets/blindtest.png" onClick={() => navigate(`/`)}/>
        </>
    );
};