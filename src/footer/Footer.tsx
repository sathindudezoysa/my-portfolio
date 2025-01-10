function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center mb-3">
          <h3>Sathindu Dhanushka</h3>
        </div>
        <div className="col-md-4">
          <p>
            Email me: sathindu.d.zoysa@gmail.com <br></br> Follow me on:
          </p>
          <ul className="nav list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.linkedin.com/in/sathindu-dhanushka-de-zoysa-686b43267"
              >
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="sathindu-dhanushka-de-zoysa-686b43267"
                  height="24"
                  width="24"
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                  alt="sathindu"
                  height="24"
                  width="24"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="container d-flex justify-content-center">
        <span className="text-body-secondary">
          &copy; sathindu dhanushka - All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
