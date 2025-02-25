import CategoryCard from "./CategoryCard.jsx";
import Sidebar from "./Sidebar.jsx";
import toolsData from "../data/tools.json";
import { useState } from "react";

const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleOpenSidebar = (index) => {
        setSelectedCategory({
            category: toolsData[index].category,
            description: toolsData[index]?.description,
            tools: toolsData[index].tools
        });

        setIsOpen(true);
    }; 

    const handleCloseSidebar = () => {
        setIsOpen(false);
    };

    return(
        <div className="container mx-auto h-full flex flex-col items-center py-5 relative">
            <div className="w-full px-3 flex flex-wrap justify-around">
                {toolsData.map((toolData, index)=>(
                    <CategoryCard 
                        key={index}
                        category={toolData.category}
                        description={toolData?.description || ""}
                        handelCategory={()=> handleOpenSidebar(index)}
                    />
                ))}
            </div>
            <Sidebar
                category={selectedCategory?.category || ''}
                description={selectedCategory?.description || ''}
                tools={selectedCategory?.tools || []}
                isOpen={isOpen}
                handleOnClose={handleCloseSidebar}
            />
        </div>
    );
};

export default Catalog;