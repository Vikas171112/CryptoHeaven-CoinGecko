import React from "react";
import CategoryCard from "../../components/CategoryCard";
import useFetchCategoryData from "../../Hooks/usefetchCategory";
import Loader from "../../components/Loader";

function CategoryDetail() {
  const { categoryData, isError, isLoading } = useFetchCategoryData();

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading: </div>;

  if (!Array.isArray(categoryData) || categoryData.length === 0) {
    // Optional: show loading or empty message
    return <div>No categories found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categoryData.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryDetail;
