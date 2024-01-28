let ShowCase = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>{" "}
              </h1>
              <p className="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technology to prepare them for their first dev role{" "}
              </p>
              <button className="btn btn-primary btn-lg">
                Start Enrollment
              </button>
            </div>

            <img
              className="img-fluid w-50  d-none d-sm-block"
              src="src\assets\img\showcase.svg"
              alt="Show case image"
            />
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
};

export default ShowCase;
