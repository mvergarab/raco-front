import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { menuItems } from '../../utils/menuItems';
import logoImage from '../../images/white_logo.png'; // Import your logo image
import { facebook, instagram, linkedin } from '../../utils/icons'; // Assuming these are SVG icons

export const Navigation = () => {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link to="/" className="title">
        <div>
          <img src={logoImage} alt="Logo" id="logo-nav" />
        </div>
      </Link>

      <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.id} className="nav-icon-container">
            <NavLink
              to={item.link}
              activeClassName="active"
              onClick={() => {
                setActive(item.id);
                toggleMenu();
              }}
            >
              <span className="title-tab">{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="socials-logo">
        <div className="social-icon">{facebook}</div>
        <div className="social-icon">{instagram}</div>
        <div className="social-icon">{linkedin}</div>
      </div>
    </nav>
  );
};

export default Navigation;

