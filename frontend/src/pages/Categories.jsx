import React from "react";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/common/Navbar";

// Sample data for categories
const categories = [
    {
        title: "Software Engineering",
        image: "https://via.placeholder.com/150",
        description: "Internships in software development, web development, mobile app development, and more.",
        link: "/internships/software-engineering",
    },
    {
        title: "Marketing",
        image: "https://via.placeholder.com/150",
        description: "Internships in digital marketing, content creation, social media management, and more.",
        link: "/internships/marketing",
    },
    {
        title: "Data Science",
        image: "https://via.placeholder.com/150",
        description: "Internships in data analysis, machine learning, data visualization, and more.",
        link: "/internships/data-science",
    },
    {
        title: "Design",
        image: "https://via.placeholder.com/150",
        description: "Internships in graphic design, UI/UX design, product design, and more.",
        link: "/internships/design",
    },
    {
        title: "Finance",
        image: "https://via.placeholder.com/150",
        description: "Internships in financial analysis, investment banking, corporate finance, and more.",
        link: "/internships/finance",
    },
    // Add more categories as needed
];

function Categories() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto categories-page p-6 bg-gray-50 dark:bg-dark-secondary-500 min-h-screen">
                <h1 className="text-2xl font-bold mb-6 dark:text-secondary-100">Internship Categories</h1>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            title={category.title}
                            image={category.image}
                            description={category.description}
                            link={category.link}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Categories;
