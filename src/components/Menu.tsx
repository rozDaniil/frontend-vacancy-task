import { NavLink } from "react-router-dom";

import { menu, logo } from '../menu'

export const Menu = () => {
  return (
    <nav className="everscale__side">
      <div className="side__company">
        {logo}
        <p className="side__company--text">project subheading</p>
      </div>
      <ul className="side__nav">
        {menu.map(menuItem => 
        <NavLink key={menuItem.id} className="side__nav--link" to={menuItem.id}>
          <li>
            {menuItem.icon}
            <span>{menuItem.title}</span>
          </li>
        </NavLink>
        )}
      </ul>
      <p className="side__language">Русский</p>
    </nav>
  );
};
