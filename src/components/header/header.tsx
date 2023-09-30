import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="title">Todo app</Link>
      <div className="block-right">
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Введите номер или название задачи"
          />
        </div>
        <div className="avatar">
          <span className="avatar__name">Р</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
