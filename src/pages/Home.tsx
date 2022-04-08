import React from "react";



import { tokens, categories } from "../tokens";
import { Category } from "../components/Category";
import { Token } from "../components/Token";
import { MobileMenu } from "../components/MobileMenu";

export const Home: React.FC = () => {
  const [category, setCategory] = React.useState('Все')

  const switchCategoryHandler = (text: string) => setCategory(text);

  const renderCategory = () => {
    if (category === "Все") {
      return tokens.map((token) => (
        <Token key={token.id} token={token} />
      ));
    }

    const filteredCategory = tokens.filter((item) =>
      item.categories.includes(category.toLowerCase())
    );

    return filteredCategory.map((token) => (
      <Token key={token.id} token={token} />
    ));
  };

  return (
    <>
    <MobileMenu/>
      <main className="everscale__main">
        <header className="main__header">
          <h3 className="header__title">Токены Everscale</h3>
          <Category
            categories={categories}
            categoryHandler={switchCategoryHandler}
            categoryName={category}
          />
        </header>
        <div className="main__content">{renderCategory()}</div>
      </main>
    </>
  );
};
