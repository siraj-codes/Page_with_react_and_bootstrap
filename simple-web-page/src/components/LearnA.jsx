let LearnA = () => {
  return (
    <>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row allign-items-center justify-content-between">
            <div className="col-md">
              <img
                src="src\assets\img\fundamentals.svg"
                alt="learn"
                className="img-fluid"
              />
            </div>
            <div className="col-md p-5">
              <h2>What You'll Learn</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                autem dolores porro dicta ad nam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                necessitatibus assumenda sapiente beatae! Cum magnam facilis
                repudiandae deleniti odit amet tempore, aut distinctio
                voluptatum in vitae tenetur mollitia laudantium perferendis?
              </p>
              <a href="#" className="btn btn-light mb-3">
                {" "}
                <i className="bi bi-chevron-right"></i>Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnA;
