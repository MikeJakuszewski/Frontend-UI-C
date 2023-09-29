"use client";
import { allCozyTables } from "../constants";
import TableUnit from "./TableUnit";

const Products = () => {
  return (
    <div>
      {allCozyTables.map((cozyTables, i) => {
        const { title, tables } = cozyTables;

        return (
          <div key={title}>
            {title}
            <div>
              {tables.map((table) => {
                return <TableUnit key={table.id} {...table} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
