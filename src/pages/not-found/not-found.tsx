import { useNavigate } from "react-router-dom";

import "./not-found.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="main main_flex">
      <div className="nfound">
        <h2 className="nfound__code">404</h2>
        <p className="nfound__text">Упс!</p>
        <p className="nfound__text">Страница не найдена</p>
        <button className="btn btn_mt" onClick={() => navigate("/")}>
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;
