import Image from "next/image";
import Wrapper from "../assets/Wrappers/SingleProductPage";

const SingleProduct = ({ id, img, text, subtext, typeOfWood, color }) => {
  return (
    <Wrapper>
      <div className="img">
        <span>
          <img src={img} alt="product" />
          <div>
            <div className="container">
              <div>{typeOfWood}</div>
              <div style={{ backgroundColor: `${color}` }}></div>
            </div>
          </div>
        </span>
      </div>
      <div className="desc">
        <div>{text}</div>
        <div>
          {subtext} <span style={{ color: "#77A2F8" }}>Customise &rarr;</span>{" "}
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
