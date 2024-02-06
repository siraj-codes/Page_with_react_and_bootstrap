let InstructorA = () => {
  return (
    <>
      {/* <!-- instructor1 --> */}
      <div class="col-md-6 col-lg-3">
        <div class="card bg-light">
          <div class="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/men/67.jpg"
              class="rounded-circle mb-3"
            />
            <h3 class="card-title mb-3">John Doe</h3>
            <p class="card-text">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              suscipit et pariatur iste? Culpa quam doloremque fugit, quo illum
              fugiat ratione iusto natus consequatur nisi.
            </p>
            <a href="#">
              {" "}
              <i class="bi bi-twitter text-dark mx-1"></i>
            </a>
            <a href="#">
              {" "}
              <i class="bi bi-facebook text-dark mx-1"></i>
            </a>
            <a href="#">
              {" "}
              <i class="bi bi-linkedin text-dark mx-1"></i>
            </a>
            <a href="#">
              {" "}
              <i class="bi bi-instagram text-dark mx-1"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorA;
