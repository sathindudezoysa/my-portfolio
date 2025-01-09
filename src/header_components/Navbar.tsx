function NavBar() {
  const nav_style = {
    color: "black",
  };

  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <a href="#" className="nav-link px-2">
          Home
        </a>
      </li>
      <li>
        <a href="#projects" className="nav-link px-2">
          Projects
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-2">
          About
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
