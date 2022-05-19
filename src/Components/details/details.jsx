import Img1 from "../../Images/1.jpg";
import Img2 from "../../Images/4.jpg";
import Img3 from "../../Images/3.jpg";
import "./details.css";

const Details = () => {
  return (
    <>
      <div className="details container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Supercar</h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus reiciendis quidem perferendis id quis veniam.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mid">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Supercar</h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus reiciendis quidem perferendis id quis veniam.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>Supercar</h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus reiciendis quidem perferendis id quis veniam.
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
