import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 92px;
  z-index: 9999;
  transition: top 0.1s ease;
  div {
    background-color: rgb(11, 35, 65);
    position: sticky;
    top: 0px;
    z-index: 997;
    display: flex;
    -webkit-box-pack: start;
    justify-content: start;
    -webkit-box-align: center;
    align-items: center;
    height: 60px;
    padding: 26px 0px;
    div {
      width: 1440px;
      margin-left: auto;
      margin-right: auto;
      padding: 0px 80px;
      padding-top: 5px;
      a {
        display: inline-block;
        color: rgb(247, 248, 246);
        font-family: "Larsseit", sans-serif;
        font-size: 18px;
        line-height: 18px;
        cursor: pointer;
        margin-right: 48px;
      }
    }
  }

  @media (max-width: 1280px) {
    div {
      div {
        padding: 20px 32px 20px 16px;
        justify-content: space-between;
        .dropdown {
          display: block;
        }
        a {
          display: none;
        }
        a:first-child {
          display: block;
        }
      }
    }
    .dropdown.responsive {
      position: absolute;
      top: 60px;
      width: 100vw;
      z-index: 10;
      display: flex;
      flex-direction: column;
      background-color: rgb(11, 35, 65);
      border-radius: 4px;
      padding: 0;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 768px) {
  }
`;

export default Wrapper;
