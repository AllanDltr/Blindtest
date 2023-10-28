import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <nav className="flex">
                <Link to="/" className="pl-8">Accueil</Link>
                <Link to="/user" className="pl-8">Pseudo Utilisateur</Link> {/* A remplacer par le pseudo que l'utilisateur aura saisi */}
                <Link to="/room" className="pl-8">Salles</Link>
            </nav>
            <img className="BlindTestLogoStock w-[40%] mx-[35%] my-10 relative" src="./src/assets/blindtest.png" onClick={() => navigate(`/`)}/>
        </>
    );
};