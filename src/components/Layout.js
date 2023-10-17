import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <h2>hii</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
