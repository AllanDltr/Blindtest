import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../components/category";

interface category  {
    title: string
    imgUrl: string
}

export const  Categories = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<category[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./src/datas/datas.json')
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
    }, [])

    return (
        <div className="Category1 w-screen mx-2 mb-5 relative">
            <div className="MostPopular text-xl">Most Popular</div>
            <div className="Rectangle1 w-[98%] h-[10%] border border-black flex">
                {data.map((category) => (
                    <Category
                        key={category.title}
                        category={category}
                        onClick={() =>
                            navigate(`/room/${category.title}`)
                        }
                    />
                ))}
            </div>
        </div>
    );
};