import { useNavigate } from "react-router-dom"
export const Homepage = () => {
const mostPopular = ["Rock", "Pop", "Electro", "Rap", "K-Pop", "Animes", "Eurodance", "Classiques"]
const navigate = useNavigate()

    return (
        <div className="Homepage">
            <img className="BlindTestLogoStock w-[40%] mx-[35%] my-10 relative" src="./src/assets/blindtest.png" onClick={() => navigate(`/room`)}/>
            <div className="Category1 w-screen mx-2 mb-5 relative">
                <div className="MostPopular text-xl">Most Popular</div>
                <div className="Rectangle1 w-[98%] h-[10%] border border-black flex">
                    {mostPopular.map((category, index) => (
                        <div className="SongCategory mx-5 my-2 w-[10%]"
                            key={index}
                            onClick={() =>
                                console.log("You clicked on " + category)
                            }>
                            <img className={`${category}Logo`} src="./src/assets/logo_ph.jpg" />
                            <div className={`${category} text-center`}>{category}</div>
                        </div>
                    ))}
                </div>
            </div>
    </div>
    )
}