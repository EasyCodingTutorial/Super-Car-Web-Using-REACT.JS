import HeaderImg from "../../Images/header.jpg";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="img">
          <div>
            <img src={HeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <h6>
            {" "}
            Why You Not Try Buy A Something <span>Cool</span> ?
          </h6>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
};
export default Header;
