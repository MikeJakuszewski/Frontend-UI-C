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

        useEffect(() => {
          const handleScroll = () => {
            listOfIds.forEach((section) => {
              const rect = section.getBoundingClientRect();
              console.log(rect);
              if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setActiveSection(section.id);
              }
            });
          };

          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);

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
