import { Link } from "react-router-dom";
import "./_navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <Link className="navigation__link" to={`/`}>
        Все игры
      </Link>
      <Link className="navigation__link" to={`contacts/1`}>
        Новая игра
      </Link>
    </div>
  );
}

export default Navigation;
