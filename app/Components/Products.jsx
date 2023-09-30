"use client";
import { allCozyTables } from "../constants";
import SingleProduct from "./SingleProduct";
import Wrapper from "../assets/Wrappers/ProductsPage";

const Products = () => {
  return (
    <>
      {allCozyTables.map((cozyTables, i) => {
        const { title, tables, id } = cozyTables;
        console.log(id);
        return (
          <Wrapper id={id} key={id}>
            <div>
              <div className="text">{title}</div>
            </div>
            <div className="tables">
              {tables.map((table) => {
                return <SingleProduct key={table.id} {...table} />;
              })}
            </div>
          </Wrapper>
        );
      })}
    </>
  );
};
export default Products;
