import React from "react";

export const NotFound: React.FC = () => {
  return (
    <main className="everscale__main">
      <header className="main__header">
        <h3 className="header__title">Page Not Found</h3>
      </header>
      <div className="no-content">Вернуться на главную страницу.</div>
    </main>
  );
};
