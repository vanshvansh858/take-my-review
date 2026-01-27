import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar({ find, setCategory }) {
  return (
    <header className="nav-wrapper">
      <div className="nav-bar">
        <Link to="/" className="nav-link">
          <div className="nav-app-name">Take My Review</div>
        </Link>

        <input
          className="nav-search"
          type="text"
          placeholder="Search movies..."
          onChange={(e) => find(e.target.value)}
        />
      </div>

      <div className="nav-categories">
        <button
          onClick={() => setCategory("popular")}
        >
          Popular
        </button>

        <button
          onClick={() => setCategory("trending")}
        >
          Trending
        </button>

        <button
          onClick={() => setCategory("top_rated")}
        >
          Top Rated
        </button>

        <button
          onClick={() => setCategory("upcoming")}
        >
          Upcoming
        </button>
      </div>
    </header>
  );
}

export default NavBar;
