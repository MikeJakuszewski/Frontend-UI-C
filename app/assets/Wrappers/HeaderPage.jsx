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
    }
  }
  h1 {
    margin: 0;
    height: 75px;
    font-size: 60px;
    font-family: "quincycf", sans-serif;
    color: rgb(43, 44, 110);
  }
  span {
    font-family: "Larsseit", sans-serif;
    color: rgb(25, 20, 43);
    font-size: 20px;
  }

  @media (max-width: 1280px) {
    color: red;
    width: 100%;
    padding: 16px 80px;
    h1 {
      line-height: 46px;
      font-size: 44px;
    }
    div {
      height: 75px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 20px;
  }
`;

export default Wrapper;
