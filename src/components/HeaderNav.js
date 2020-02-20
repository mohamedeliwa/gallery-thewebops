import React, {useState} from "react";
import styled from "styled-components";
import { FaUserPlus } from "react-icons/fa";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Container = styled.div`
  //margin: 2rem;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: background-color ease 1s;
  // Styles for fixed navbar on large screens
  ${ props => props.fixed ? (`
    & {
      background-color: white;
      min-width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5rem;
      padding-left: 2rem;
      z-index: 999;
      img {
        margin: 0 2rem;
        max-height: 40px
      }
      ul {
        //background-color: lightgreen;
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    
        li {
          height: 20px;
          margin: 0 1.5rem;
          padding: 12px 7px;
          a {
            text-decoration: none;
            font-family: "Lato", sans-serif;
            font-size: 13.4px;
            color: #000;
            font-weight: 900;
          }
        }
      }
    }
    @media screen and (max-width: 1200px){
      & {
        padding-left: 0.5rem;
      }
      img {
        margin: 0;
        margin-left: 0.5rem;
        margin-right: 1rem;
      }
      ul li{ 
        margin: 0;
        margin-right: 1rem;
      }
      ul li a {
        font-size: 10px;
      }
    }
  `): (null)}
  //End of styles of fixed navbar
`;

const Nav = styled.nav`
  //background-color: lightgrey;
  //margin: 2rem;
  display: inline-block;
  width: 40%;//443px;
  height: 44px;
  padding: 0 15px;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  position: relative;
  ul {
    //background-color: lightgreen;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;

    li {
      height: 20px;
      padding: 12px 7px;

      a {
        text-decoration: none;
        font-family: "Lato", sans-serif;
        font-size: 13.4px;
        color: #000;
        font-weight: 900;
      }
    }
  }
  @media screen and (max-width: 1200px){
    & {
      margin: 0 30px;
    }
    ul li a {
      font-size: 10px;
    }
  }
`;
const Logo = styled.img`
  width: 100%;
  max-width: 106px;
  height: auto;
  }
`;
const UserControls = styled.div`
  //background-color: lightgrey;
  display: inline-block;
  position: absolute;
  top: -1.8rem;

  a {
    cursor: pointer;
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 2px;
    color: #024d4c;
    border-right: 1px solid black;
    font-family: "Lato", sans-serif;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;

    .icon {
      font-size: 18px;
    }
  }
  // styles for user controls on fixed navbar
  ${props => props.fixed ? (`
    & {
      display: inline-block;
      position: static;
    }
  `): (null)}
`;
const DropDown = styled.div`
    background-color: #fff;
    font-family: "Lato", sans-serif;
    min-width: 15px;
    position: absolute;
    top: 45px;
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    z-index: 9999;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

    a {
      margin-top: 0.5rem;
      color: #000;
      border-bottom: solid 1px #000;
      width: 100%;
      text-align: center;
      padding: 0.5rem 0.2rem;
      box-sizing: border-box;
    }
`;
const HeaderNav = () => {
  // Defining a state to mange appearnce of fixed-top nav
  const [fixedNav, setFixedNav] = useState(false);
  // Defining a state for displaying dropdown
  const [dropDisplay, setDropDisplay] = useState("none");
  // Function to handle page scrolling 
  const handleScroll = (e) => {
     return window.pageYOffset >= 100 ? (
      setFixedNav(true)
     ) : (
       setFixedNav(false)
     )
    
  }
  // event listener to watch page scrolling
  window.addEventListener("scroll", handleScroll)
  return fixedNav ? (
    // Fixed navbar to be displayed on scrollign down
    <Container fixed={fixedNav}>
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
          <li onMouseEnter={() => setDropDisplay("flex")} onMouseLeave={() => setDropDisplay("none")}>
            <a href="/#">360 PLANNER</a>
            <DropDown display={dropDisplay}>
              <a href="/#">Check list</a>
              <a href="/#">Budgeter</a>
              <a href="/#">Registry list</a>
              <a href="/#">Guest list</a>
              <a href="/#">Wedding Website</a>
            </DropDown>
          </li>
          <li>
            <a href="/#">HER</a>
          </li>
          <li>
            <a href="/#">HIM</a>
          </li>
          <li>
            <a href="/#">THE WEDDING</a>
          </li>
          <li>
            <a href="/#">VENDORS</a>
          </li>
          <li>
            <Link to="/categories">GALLERY</Link>
            {/* <a href="/#">GALLERY</a> */}
          </li>
          <li>
            <a href="/#">IDEAS & MORE</a>
          </li>
        </ul>
        <UserControls fixed={fixedNav}>
          <a href="/#">
            <FaUserPlus className="icon" />
          </a>
          <a href="/#">العربية</a>
        </UserControls>
    </Container>
  ) : (
    // static navbar to be displayed on top of the page
    <Container>
      <Nav>
        <UserControls>
          <a href="/#">
            <FaUserPlus className="icon" />
          </a>
          <a href="/#">العربية</a>
        </UserControls>
        <ul>
          <li onMouseEnter={() => setDropDisplay("flex")} onMouseLeave={() => setDropDisplay("none")}>
            <a href="/#">360 PLANNER</a>
            <DropDown display={dropDisplay}>
              <a href="/#">Check list</a>
              <a href="/#">Budgeter</a>
              <a href="/#">Registry list</a>
              <a href="/#">Guest list</a>
              <a href="/#">Wedding Website</a>
            </DropDown>
          </li>
          <li>
            <a href="/#">HER</a>
          </li>
          <li>
            <a href="/#">HIM</a>
          </li>
          <li>
            <a href="/#">THE WEDDING</a>
          </li>
        </ul>
      </Nav>
      <Logo src={logo} className="App-logo" alt="logo" />
      <Nav>
        <ul>
          <li>
            <a href="/#">VENDORS</a>
          </li>
          <li>
            <Link to="/categories">GALLERY</Link>
            {/* <a href="/#">GALLERY</a> */}
          </li>
          <li>
            <a href="/#">IDEAS & MORE</a>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default HeaderNav;
