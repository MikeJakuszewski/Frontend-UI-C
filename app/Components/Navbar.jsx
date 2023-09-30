"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/NavbarPage";
import { allCozyTables } from "../constants";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          {allCozyTables.map((title) => {
            return (
              <>
                <a href={`#${title.id}`} key={title.title}>
                  {title.title}
                </a>
              </>
            );
          })}

          {isDropdownOpen ? (
            <>
              <RiArrowUpSLine
                className=" text-white"
                size={25}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              <Dropdown allCozyTables={allCozyTables} />
            </>
          ) : (
            <RiArrowDownSLine
              className="dropdown text-white"
              size={25}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
