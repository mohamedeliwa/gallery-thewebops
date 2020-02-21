import React, {useState} from 'react'
import styled from "styled-components";
import {FaHome} from "react-icons/fa"
import Carousel from '../components/Carousel';
import categoriesCard from "../images/categories-card.png"
import categoriesCardBg from "../images/categories-card-bg.png"

const Container = styled.div`

    //background-color: lightgrey;
    text-align: center;
    font-family:Lato, sans-serif;
    .controls {
        //background-color: lightgreen;
        margin-top: 7rem;
        display: flex;
        justify-content: space-around;

        .dropdown-btn,
        .search-input{
            font-family:Lato, sans-serif;
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 6.1px;
            text-transform: uppercase;
            color: #024d4c;
            opacity: 1;
            height: 39px;
            border: solid 2px #000;
            text-align: center;
            padding: 0 15%;
        }
        .dropdown-btn{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            width: 49%;
            box-sizing: content-box;
            background-color: #fff;
            cursor: pointer;
            .icon {
                border-right: solid 2px #000;
                border-bottom: solid 2px #000;
                height: 15px;
                width: 15px;
                transform: rotate(45deg);
                margin-left: 30px;
                margin-bottom: 7px;
            }
        }
    }

    .home-ideas {
       // background-color: lightgreen;
        height: 240px;
        position: relative;
        margin-top: 15px;
        cursor: pointer;
        .overlay-div {
            background-color: rgba(0,0,0,0.25);
            position: absolute;
            left: 15px;
            width: 340px;
            height: 100%;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h3 {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
                line-height: 1.5;
                color: #fff;
            }
        }
        .card{
            background-color: lightblue;
            background: url(${categoriesCardBg}) no-repeat;
            background-size: cover;
            position: absolute;
            left: 15px;
            width: 340px;
            height: 100%;
        }
        .hover-div {
            height: 80%;
            width: 290px;
            opacity: 0;
            transition: ease-out 0.5s;
            position: absolute;
            top: 10%;
            left: 3.7%;
            z-index: 9998;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .home-icon {
                color: #fff;
                font-size: 25px;
                padding: 3px;
                background-color: black;
            }
            h2 {
                margin: 0 0 30px;
                font-size: 21px;
                font-weight: 900;
                color: #000;
            }
            &:hover {
                opacity: 1;
            }
        }
    }
`;
const CarouselDev = styled.div`

    display:  ${(props) => props.size.display};
    height: ${props => props.size.height}%;
    width:  ${props => props.size.width}%;
    padding: 0 15px;
    transition: width 2s, height 4s;
`;
const Categories = () => {
    let [size, setSize] = useState({
        width: 0,
        height: 0,
        display: "none"
    })
    const handleClick = () => {
        if (size.height === 100){
            setSize({
                height: 0,
                width: 0,
                display: "none"
            });          
            
        } else {
            setSize({
                height: 100,
                width: 97,
                display: "static"
            });
            
        }
    }
    console.log(size);
    return (
        <Container>
            <div className="controls">
                <div className="dropdown-btn" onClick={handleClick}><span>Find categories here</span> <span className="icon" /></div>
                <input type="text" placeholder="Search" className="search-input" />
            </div>
            <CarouselDev size={size}>
                <Carousel />
            </CarouselDev >
            <div className="home-ideas">
                <div className="card">
                    
                </div>
                <div className="overlay-div">
                    <img src={categoriesCard} alt="bg-card" />
                    <h3>Wedding Ideas</h3>
                </div>
                <div className="hover-div">
                    <FaHome class="home-icon"/>
                    <h2>Wedding Ideas</h2>
                </div>
            </div>
        </Container>
    )
}

export default Categories
