import { Navbar } from "../navbar.tsx"
import { User } from "../user.tsx"

export const Homepage = () => {
    return (
        <div className="Homepage">
            <Navbar />
            <User />
        </div>
    );
};