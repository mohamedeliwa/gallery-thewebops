import React, {useState} from "react";
import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import MobileNav from './MobileNav';

// const HeaderStyled = styled.header`
//     //margin: 2rem;
//     max-width: 1100px;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-end;

// `;
let smallScreens = window.innerWidth <= 770 ? true : false;
window.addEventListener("resize",() => {
  if(window.innerWidth < 770){
     smallScreens = true 
  }else{
    smallScreens = false
  }
  //console.log(smallScreens)
});

const Header = () => {
 const [smallScreen, setSmallScreen] = useState(smallScreens);
  console.log(smallScreen);
  

  return (
    <header>
      <HeaderNav />
      {/* <MobileNav /> */}
    </header>
  );
};

export default Header;
