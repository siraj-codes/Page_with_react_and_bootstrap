import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
let CardSection = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
