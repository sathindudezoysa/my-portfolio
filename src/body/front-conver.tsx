function FrontCover() {
  return (
    <div className=" container h-75 d-flex align-items-center justify-content-center">
      <div className="text-center w-75">
        <h1 style={{ padding: "30px" }}> Hey, You Found Me 😊</h1>
        <p style={{ color: "#1083FF" }}>
          | Full Stack Developer | Researcher | Writer | Creator |
        </p>
        <p>
          I am a student who has a strong passion for research new technologies.
          I enjoy creating innovative solutions using those thechnologies. All
          my projects are bult from scratch, from having the idea and developing
          and all the way to solving the problem.
        </p>
        <button
          type="button"
          className="btn btn-outline-dark mx-auto d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
          onClick={() => window.open("https://gpt.manaskara.org")}
        >
          Check My Latest Project Manaskara GPT
          <span
            className="material-icons text-justify"
            style={{ fontSize: "20px" }}
          >
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
export default FrontCover;
