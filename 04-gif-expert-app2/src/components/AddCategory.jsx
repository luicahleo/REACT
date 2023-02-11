import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState("");

  const onInputChange = (e) => {

    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(value.trim().length <= 1) return;

    onNewCategory(value.trim());

    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="agregar categoria"
        value={value}
        onChange={onInputChange}
      ></input>
    </form>
  );
};
