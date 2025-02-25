const CategoryCard = ({category, description, handelCategory}) => {
    return(
        <div
            className="bg-[#FFFFFF1A] rounded-lg p-6 m-1.5 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg cursor-pointer w-full sm:w-[300px] "
            onClick={handelCategory}
        >
            <h2>
                {category.replace(/_/g, " ")}
            </h2>
            <p className="card-description text-gray-300 text-sm mb-3">{description}</p>
            <p className="text-xs cursor-pointer">Click para ver herramientas</p>
        </div>
    );
};

export default CategoryCard;