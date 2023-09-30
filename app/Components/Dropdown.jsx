const Dropdown = ({ allCozyTables }) => {
  return (
    <div className="dropdown responsive">
      {allCozyTables.map((title, i) => (
        <div key={i} className="text-white">
          {" "}
          <a href={`#${title.id}`} key={title.title}>
            {title.title}
          </a>
        </div>
      ))}
    </div>
  );
};
export default Dropdown;
