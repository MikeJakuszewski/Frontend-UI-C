"use client";
import { useEffect, useState } from "react";
import { allCozyTables } from "../constants";
import SingleProduct from "./SingleProduct";
import Wrapper from "../assets/Wrappers/ProductsPage";

const Products = () => {
  const [activeSection, setActiveSection] = useState([]);
  let listOfIds = [];

  return (
    <>
      {allCozyTables.map((cozyTables, i) => {
        const { title, tables, id } = cozyTables;

        return (
          <Wrapper id={id} key={id}>
            <div>
              <div className="text">{title}</div>
            </div>
            <div className="tables">
              {tables.map((table) => {
                return (
                  <SingleProduct
                    key={table.id}
                    cozyTablesId={cozyTables.id}
                    table={table}
                  />
                );
              })}
            </div>
          </Wrapper>
        );
      })}
    </>
  );
};
export default Products;
