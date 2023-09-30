import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 12px;
  width: 400px;
  height: 100%;
  .img {
    position: relative;
    width: 400px;
    height: 300px;
    .container {
      position: absolute;
      bottom: 12px;
      z-index: 9998;
      right: 12px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 6px 6px 6px 10px;
      gap: 8px;
      height: 32px;
      background-color: rgb(255, 255, 255);
      border: 0.5px solid rgb(190, 200, 219);
      border-radius: 100px;
      cursor: pointer;
      width: auto;
      div {
        bottom: 0px;
        right: 0px;
        border: none;
        font-size: 10px;
        margin: 0;
      }
      div + div {
        border-radius: 100%;
        width: 20px;
        height: 20px;
        margin: 0;
      }
    }

    span {
      border-radius: 20px;
      background-color: transparent;
      cursor: pointer;
      border: 2px solid rgb(236, 235, 231) !important;
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      width: initial;
      height: initial;
      background: none;
      opacity: 1;
      border: 0px;
      margin: 0px;
      padding: 0px;
      position: absolute;
      inset: 0px;
      img {
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin: auto;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
  .desc {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 400px;
    div {
      display: block;
      width: 400px;
      font-size: 16px;
      line-height: 19px;
      font-family: "Campton-SemiBold", "sans-serif";
      color: rgb(11, 35, 65);
      cursor: pointer;
    }
    div + div {
      height: 18px;
      display: flex;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      gap: 8px;
      cursor: auto;
      font-family: "Larsseit-Thin";
      span {
        font-family: "Larsseit Medium";
        cursor: pointer;
      }
    }
    span {
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 1024px) {
    .img {
      .container {
        bottom: 3px;
        right: 3px;
        height: 20px;
        padding: 2px 4px;
        justify-content: center;
        gap: 4;
        div {
          height: 10px;
          font-size: 10px;
          line-height: 10px;
        }
        div + div {
          width: 12px;
          height: 12px;
        }
      }
    }

    .desc {
      gap: 2px;
      width: 100%;
      max-height: 47px;
      div {
        width: 190px;
        font-size: 12px;
        line-height: 16px;
      }
      div + div {
        height: 26px;
        gap: 4px;
        margin: 0;
        span {
          font-size: 9px;
        }
      }
      span {
        font-size: 10px;
      }
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
    width: 180px;
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
    .img {
      width: 100%;
      height: 122px;
      span {
      }
    }
    .desc {
      gap: 2px;
      width: 100%;
      max-height: 47px;
      .div {
        width: 100%;
        font-size: 12px;
      }
      div + div {
        gap: 2px;
      }
    }
  }
`;

export default Wrapper;
