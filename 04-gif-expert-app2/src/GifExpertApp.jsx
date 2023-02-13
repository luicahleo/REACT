import React, { useState } from "react";
import uuid from "react-uuid";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

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
