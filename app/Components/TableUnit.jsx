import Image from "next/image";

const TableUnit = ({ id, img, text, subtext, typeOfWood, color }) => {
  console.log(id, text, subtext, typeOfWood);
  return (
    <div>
      <Image src={img} width={400} height={300} alt="coffee table" />
      <div
        style={{ width: "20px", height: "20px", backgroundColor: color }}
      ></div>
    </div>
  );
};
export default TableUnit;
