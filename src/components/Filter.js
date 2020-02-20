import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    /background-color: lightgreen;
    width: 25%;
    margin-right: 25px;
    font-family: "Lato", sans-serif;
    form {
        margin-top: 15px;
        padding-left: 6px;

        .btn-container {
            margin-bottom: 10px;
            input {
                padding: 0;
                border: solid 1px #000;
                width: 55px;
                height: 21px;
                margin-left: 3px;
                font-size: 12px;
                text-align: center;
                cursor: pointer;
                &[type="submit"] {
                    background-color: #000;
                    color: #fff;
                }
                &[type="reset"] {
                    background-color: #fff; 
                    color: #000;
                }
            }
        }
        .search-container {
            margin: 20px 0;
            input[type="search"] {
                width: 100%;
                border: 1px solid black;
                padding: 5px;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit;
            }
        }
    }
    @media screen and (max-width: 740px){
        & {
            width: 95%;
            margin-left: 30px
        }
    }
`;

const Filter = () => {
    return (
        <Container>
            <form>
                <div className="btn-container">
                    <input type="reset" value="Clear"/>
                    <input type="submit" value="Apply"/>
                </div>
                <div className="search-container">
                    <input type="search" placeholder="Search"/>
                </div>
                
            </form>
        </Container>
    )
}

export default Filter;
