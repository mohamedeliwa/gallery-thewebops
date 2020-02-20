import React from 'react';
import styled from "styled-components";
import Gallery from './Gallery';
import Filter from './Filter';

const Container = styled.div`
   //background-color: lightgrey;
    display: flex;
    @media screen and (max-width: 740px){
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`;
const GalleryWrapper = () => {
    return (
        <Container>
            <Filter />
            <Gallery />
        </Container>
    )
}

export default GalleryWrapper;
