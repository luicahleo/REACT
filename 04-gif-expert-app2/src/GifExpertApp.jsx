import React, { useState } from "react";
import uuid from "react-uuid";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div>GifExpertApp</div>
      <br />

      {/* componente imput */}
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={ uuid() } category={category} />
      ))}
    </>
  );
};
