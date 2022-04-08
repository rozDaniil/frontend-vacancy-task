import React from "react";

type CategoryPropsTypes = {
  categories: {id: string, title: string}[] 
  categoryHandler: (text: string) => void
  categoryName: string
}

export const Category: React.FC<CategoryPropsTypes> = ({ categories, categoryHandler, categoryName }) => {
  return (
    <ul className="header__category">
      {categories.map((category) => (
        <li
          onClick={() => categoryHandler(category.title)}
          key={category.id}
          className={
            category.title === categoryName
              ? "header__category--link active"
              : "header__category--link"
          }
        >
          {category.title}
        </li>
      ))}
    </ul>
  );
};
