import AboutImg from "../../Images/about.jpg";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="about container">
        <div className="row">
          <div className="col-sm-5">
            <img src={AboutImg} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-6">
            <h6>Easy Coding Tutorial</h6>
            <h5>We Always With you...</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque culpa et ducimus ratione voluptatibus adipisci
              repellendus. Molestias iusto obcaecati alias deleniti. Itaque
              nulla non sequi quam ab quas praesentium ut. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              deserunt, asperiores possimus aliquid quaerat obcaecati officiis
              dolore nesciunt sequi ut ipsam delectus quisquam suscipit quidem
              corporis itaque, harum animi. Veniam. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              fugit atque deserunt vero voluptatum! Dolore et, culpa corrupti
              voluptatum alias ad. Esse natus amet libero consequuntur cumque
              itaque eveniet ea
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
