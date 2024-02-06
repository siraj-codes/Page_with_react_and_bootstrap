import InstructorA from "./InstructorA";
import InstructorB from "./InstructorB";
import InstructorC from "./InstructorC";
import InstructorD from "./InstructorD";
let Instructors = () => {
  return (
    <>
      <section id="instructors" class="p-5 bg-primary">
        <div class="container">
          <h2 class="text-center text-white">Our Instructors</h2>
          <p class="lead text-center text-white mb-5">
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
          <div class="row g-4">
            <InstructorA />
            <InstructorB />
            <InstructorC />
            <InstructorD />
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructors;
