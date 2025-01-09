import NavBar from "./Navbar";

function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          {/* Add the logo here in future */}
          {/* <svg className="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg> */}
          <span className="fs-4">Sathindu</span>
        </a>

        <NavBar />
      </header>
    </div>
  );
}

export default Header;
