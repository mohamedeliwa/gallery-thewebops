import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleRight, FaFacebookF, FaTwitter } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import { Thumbnail } from "../components/Gallery";
import {connect } from "react-redux";

const Container = styled.div`
  font-family: "Lato", sans-serif;
  .related-photos-div {
    //background-color: lightgrey;
    margin-top: 4rem;
    h2 {
      font-size: 35.1px;
      line-height: 0.92;
      font-weight: bold;
      color: #000;
      margin-bottom: 35px;
    }
  }
  .related-photos {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const PhotoContainer = styled.div`
  //background-color: lightgrey;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  .photo {
    //background-color: lightgreen;
    width: 60%;
    padding-left: 6px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .photo-description {
    //background-color: lightblue;
    width: 35%;
    padding: 15px 20px;

    h2 {
      margin: 0;
      margin-bottom: 35px;
      font-size: 35.1px;
      font-weight: bold;
      color: #000;
      line-height: 1.2;
    }
    h5 {
      display: block;
      margin: 0;
      margin-bottom: 20px;
      font-size: 23.6px;
      line-height: 1.42;
      font-weight: normal;
      color: #000;
    }
    .icon {
      border-radius: 50%;
      height: 30px;
      width: 30px;
      padding: 3px;
      box-sizing: border-box;
      color: #fff;
      margin-right: 5px;
      background-color: #000;
    }
  }
  @media screen and (max-width: 770px){
      & {
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .photo{
              width: 90%;
          }
          .photo-description {
              width: 90%;
          }
      }
  }
`;

const Photo = ({images}) => {
  const relatedPhotos = images.map((image, i) => {
    return image.id !== 1 ? (
      <Thumbnail bg={image.url} key={image.id}>
        <img src={image.url} alt={image.title} />
        <h3>{image.title}</h3>
      </Thumbnail>
    ) : null;
  });
  return (
    <Container>
      <Breadcrumb>
        <FaAngleRight className="icon" />
        <p>WEDDING IDEAS</p>
      </Breadcrumb>
      <PhotoContainer>
        <div className="photo">
          <img src={images[0].url} alt="photo" />
        </div>
        <div className="photo-description">
          <h2>Wedding details</h2>
          <h5>Bits and pieces of the wedding's bigger picture.</h5>
          <h5 style={{ color: "#337ab7", cursor: "pointer" }}>Al Khardawaty</h5>
          <FaFacebookF className="icon" style={{ cursor: "pointer" }} />
          <FaTwitter className="icon" style={{ cursor: "pointer" }} />
        </div>
      </PhotoContainer>
      <div className="related-photos-div">
        <h2> Related Photos</h2>
        <div className="related-photos">{relatedPhotos}</div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(Photo);
