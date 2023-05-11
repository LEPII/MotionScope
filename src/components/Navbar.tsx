import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to={`/`}>X</Link>
          </li>
          <li>
            <Link to={`/`}>Y</Link>
          </li>
          <li>
            <Link to={`/`}>Z</Link>
          </li>
          <li>
            <Link to={`/`}>A</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
