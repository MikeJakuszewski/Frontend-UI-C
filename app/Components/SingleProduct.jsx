import Image from "next/image";
import Wrapper from "../assets/Wrappers/SingleProductPage";

const SingleProduct = ({ table, cozyTablesId }) => {
  const { id, img, text, subtext, typeOfWood, color } = table;

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
      {cozyTablesId === "tableSets" ? (
        <div className="desc">
          <div>{text}</div>
          <div>
            {subtext} <span style={{ color: "#AA6432" }}>{table.discount}</span>{" "}
          </div>
          <span style={{ color: "#77A2F8" }}>Customise &rarr;</span>{" "}
        </div>
      ) : (
        <div className="desc">
          <div>{text}</div>
          <div>
            {subtext} <span style={{ color: "#77A2F8" }}>Customise &rarr;</span>{" "}
          </div>
        </div>
      )}
    </Wrapper>
  );
};
export default SingleProduct;
