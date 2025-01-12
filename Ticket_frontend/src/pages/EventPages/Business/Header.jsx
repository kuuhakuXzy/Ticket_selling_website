import { useState } from "react";
import './Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (state) => {
    setShowDropdown(state);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <button className="logo-button">EventPage</button>
      </div>

      <input
        type="text"
        placeholder="Search for events"
        className="search-bar"
      />

      <div className="buttons">
        <div 
          className="account"
          onMouseEnter={() => toggleDropdown(true)}
          onMouseLeave={() => toggleDropdown(false)}
        >
          <button>Account</button>

          {showDropdown && (
            <div className="dropdown">
              <a href="#">Trang cá nhân</a>
              <a href="#">Vé đã mua</a>
              <a href="#">Đăng xuất</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
