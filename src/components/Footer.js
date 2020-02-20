import React from 'react';
import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Container = styled.div`

    background-color :  #000000;
    font-family: "Lato", sans-serif;
    color: white;
    padding: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .left-section{
        //background-color: red;
        h1{
            font-size: 20px;
            margin-top: 10px;
            margin-bottom: 10px;
            font-weight: 500;
            line-height: 1.1;
            color: inherit;
        }
    }

    .middle-section {
        //background-color: red;
        font-size: 10px;
        font-weight: 100;
        color: #ffffff;
        max-height: 1rem;
        text-align: center;
        position: relative;
        top: 40px;
        P {
            margin: 0;
        }
        a{
            color: rgb(51, 122, 183);
            text-decoration: none;
        }
    }

    .right-section {
        //background-color: red;
        height: 1rem;
        position: relative;
        top: 40px;
        right: 100px;
        ul {
           // background-color: lightgreen;
            list-style-type: none;
            margin: 0;
            padding: 0;
            color: #fff;
            cursor: pointer;
            font-size: 10px;
            text-align: right;
        }
        @media screen and (max-width: 770px){
            & {
                right: 30px;
            }
        }
    }

    @media screen and (max-width: 580px){
        & {
            position: static;
            flex-direction: column;
            align-items: center;

            .left-section,
            .middle-section,
            .right-section {
                position: static;
                text-align: center;
                font-size: 8px;
                line-height: 0.85rem;
                h1{
                    margin-top: 0;
                    margin-bttom: 5px;
                }
                ul {
                    text-align: center;
                    font-size: 8px;
                }
            }
        }
    }
    
`;

const Footer = () => {
    return (
        <Container>
            <div className="left-section">
                <h1>Weds360</h1>
                <FaFacebookF />
                <FaInstagram />
            </div>
            <div className="middle-section">
                <p>© Copyright <a href="/#"><strong>Plus360</strong></a>. All Rights Reserved</p>
            </div>
            <div className="right-section">
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </Container>
    )
}

export default Footer;
