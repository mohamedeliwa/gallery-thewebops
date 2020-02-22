import React from 'react';
import styled from "styled-components";
import images from "../data/gallery-images";


const Container = styled.div`
   // background-color: lightgreen;
    width: 70%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 740px){
        & {
            width: 100%;
        }
    }
`;
export const Thumbnail = styled.div`
    //background-color: lightgrey;
    font-family: "Lato", sans-serif;
    max-width: 100%;
    min-width: 242px;
    margin: 0.3rem;
    img {
        height: 230px;
        width: 242px
    }
    h3 {
        color: #000;
        font-size: 17.3px;
        font-weight: bold;
        margin: 10px 0 15px;
        max-width: 100%;
        line-height: 25px;
        height: 50px;
    }
    @media screen and (max-width: 1095px){
        & {
            img {
                width: 285px
            }
        }

    }
    @media screen and (max-width: 860px){
        & {
            img {
                width: 240px
            }
        }

    }
    @media screen and (max-width: 520px){
        & {
            min-width: 200px;
            img {
                width: 200px
            }
        }
    }
`;
const ImageContainer = images.map((image,i) => {
    return (
        <Thumbnail bg={image.url} key={image.id}>
            <img src={image.url} alt={image.title}/>
            <h3>{image.title}</h3> 
        </Thumbnail>
    )
});



const Gallery = () => {
    return (
        <Container>
            {ImageContainer}
        </Container>
    )
}

export default Gallery;
