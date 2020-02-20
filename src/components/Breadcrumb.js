import React from 'react'
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";


const Container = styled.div`

    //background-color: lightgrey;
    margin: 45px auto 20px;

    display: flex;
    align-items: center;
    font-family: "Lato", sans-serif;
    p {
        line-height: 30px;
        height: 30px;
        margin: 0;
        text-transform: uppercase;
        display: inline-block;
        font-size: 18px;
        font-weight: 900;
        color:  #008174;
        cursor: pointer;
    }
    p:nth-last-child(1) {
        color: #010101;
        cursor: initial;
    }
    & .icon {
        line-height: 30px;
        height: 30px;
        font-size: 30px;
        font-weight: bold;
        margin: 0 7.5px;
    }
    @media screen and (max-width: 860px){
        & {
            margin-left: 15px;
        }

    }
`;

function Breadcrumb() {
    return (
        <Container>
            <p>GALLERY</p>
            <FaAngleRight className="icon" />
            <p>WEDDING IDEAS</p>
        </Container>
    )
}

export default Breadcrumb;
