"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/NavbarPage";
import { allCozyTables } from "../constants";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 92) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper style={{ top: scrolling ? "0px" : "92px" }}>
      <div>
        <div>
          {allCozyTables.map((title) => (
            <a>{title.title}</a>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
