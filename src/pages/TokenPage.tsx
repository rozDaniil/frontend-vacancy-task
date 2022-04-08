import React from "react";
import { useParams } from "react-router-dom";

export const TokenPage: React.FC = () => {
  const params = useParams();

  return (
    <main className="everscale__main">
      <header className="main__header">
        <h3 className="header__title">{params.id}</h3>
      </header>
      <div className="no-content">
        Тестовое задание не предусматривает реализацию контента здесь.
      </div>
    </main>
  );
};
