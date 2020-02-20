import React from 'react'
import styled from "styled-components";
import Carousel from '../components/Carousel';


const Container = styled.div`

    //background-color: lightgrey;
    text-align: center;
    
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
`;
const Categories = () => {
    return (
        <Container>
            <div className="controls">
                <div className="dropdown-btn"><span>Find categories here</span> <span className="icon" /></div>
                <input type="text" placeholder="Search" className="search-input" />
            </div>
            <div>
                <Carousel />
            </div>
            <div>
                Home Link Card
            </div>
        </Container>
    )
}

export default Categories
