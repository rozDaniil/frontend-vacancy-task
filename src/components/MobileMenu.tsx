import { NavLink } from "react-router-dom";

import { menu, logo } from '../menu'

export const MobileMenu = () => {
  return (
    <nav className="everscale__mobmenu">
      <div className="side__company">
        {logo}
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
    </nav>
  )
}
