interface CategoryProps {
    category: {
        title: string;
        imgUrl: string;
    };
    onClick: () => void;
}


export const Category = ({ category, onClick }: CategoryProps) => {
    return(
        <div className="SongCategory mx-5 my-2 w-[10%]"
            onClick={onClick}>
            <img className={`${category.title}Logo`} src={category.imgUrl} />
            <div className={`${category.title} text-center`}>{category.title}</div>
        </div>
    );
};


{/* {data.map((category) => (
    <div className="SongCategory mx-5 my-2 w-[10%]"
    key={category.title}
    onClick={() =>
        navigate(`/room/${category.title}`)
    }>
    <img className={`${category.title}Logo`} src={category.imgUrl} />
    <div className={`${category.title} text-center`}>{category.title}</div>
</div> */}