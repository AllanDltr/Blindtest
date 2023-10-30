import { Navbar } from "../navbar.tsx"
import { Categories } from "../categories.tsx"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedPseudo = localStorage.getItem('pseudo');
        if (!storedPseudo) {
            navigate('/user');
        }
    }, [navigate]);

    return (
        <div className="Homepage">
            <Navbar />
            <Categories />
        </div>
    );
};