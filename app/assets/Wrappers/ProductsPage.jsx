import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  div {
    margin: 0px auto;
    max-width: 1440px;
    .text {
      font-family: "quincycf", sans-serif;
      font-size: 48px;
      color: rgb(43, 44, 110);
      padding: 32px 80px 0px;
    }
  }

  .tables {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin: 0px auto;
    max-width: 1440px;
    padding: 16px 80px;
  }

  @media (max-width: 1280px) {
    div {
      .text {
        font-size: 32px;
        text-align: center;
      }
    }
  }
  @media (max-width: 1024px) {
    .tables {
      justify-items: center;
      gap: 40px;
      padding: 16px 24px;
    }
  }

  @media (max-width: 768px) {
    .tables {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px 0px;
    }
  }
  @media (max-width: 425px) {
    .tables {
      column-gap: 16px;
    }
  }
`;

export default Wrapper;
