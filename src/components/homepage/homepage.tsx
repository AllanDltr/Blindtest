import { Navbar } from "../navbar.tsx"
import { Categories } from "../categories.tsx"

export const Homepage = () => {
    return (
        <div className="Homepage">
            <Navbar />
            <Categories />
        </div>
    );
};