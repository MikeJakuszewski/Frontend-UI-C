import styled from "styled-components";

const Wrapper = styled.div`
  padding: 12px 80px 20px;
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    div {
      display: flex;
      flex-direction: column;
      h1 {
        margin: 0;
        font-size: 60px;
        font-family: "QuincyCFBold" sans-serif;
        color: rgb(43, 44, 110);
        span {
          font-family: "Larsseit Medium" sans-serif;
          color: rgb(25, 20, 43);
          font-size: 20px;
        }
      }
    }
  }
`;

export default Wrapper;
