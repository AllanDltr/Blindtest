import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type category = {
    title: string
    imgUrl: string
}

export const Homepage = () => {
    const [data, setData] = useState<category[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./src/datas/datas.json')
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
        console.log(data)
    }, [])

    return (
        <div className="Homepage">
            <img className="BlindTestLogoStock w-[40%] mx-[35%] my-10 relative" src="./src/assets/blindtest.png" onClick={() => navigate(`/room`)}/>
            <div className="Category1 w-screen mx-2 mb-5 relative">
                <div className="MostPopular text-xl">Most Popular</div>
                <div className="Rectangle1 w-[98%] h-[10%] border border-black flex">
                    {data.map((category) => (
                        <div className="SongCategory mx-5 my-2 w-[10%]"
                            key={category.title}
                            onClick={() =>
                                console.log("You clicked on " + category.title)
                            }>
                            <img className={`${category.title}Logo`} src={category.imgUrl} />
                            <div className={`${category.title} text-center`}>{category.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}