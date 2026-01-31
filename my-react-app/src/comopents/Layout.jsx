import { Outlet } from "react-router-dom";
import NavBar from "../navBar/navbar";
import useSearch from "../hooks/useSearch"
import useCategory from "../hooks/useCategory";
import "./Layout.css"

function Layout() {
  const { search, find } = useSearch("");
  const {category, fetch} = useCategory("")

  return (
    <>
      <NavBar find={find} category={category} setCategory={fetch} />
      <div className="page-content">
        <Outlet context={{ search, category }} />
      </div>
    </>
  );
}

export default Layout;

