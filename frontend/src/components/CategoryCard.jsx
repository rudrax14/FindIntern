import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ title, image, description, link }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(link);
    };

    return (
        <div
            onClick={handleCardClick}
            className="category-card border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer p-4 bg-white dark:bg-dark-secondary-400 dark:border-none"
        >
            <img src={image} alt={`${title} category`} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="font-semibold text-lg mb-2 dark:text-secondary-100">{title}</h3>
            <p className="text-secondary-200 dark:text-secondary-300">{description}</p>
        </div>
    );
}

export default CategoryCard;
