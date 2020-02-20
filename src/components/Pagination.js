import React from "react";
import styled from "styled-components";

const Container = styled.div`
  //background-color: lightgrey;
  
  height: 79px;
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  a {
    color:  #024d4c;
    padding: 6px 12px;
    line-height: 1.428571429;
    background-color: #fff;
    border: 1px solid #ddd;
    text-decoration: none;
    &.active {
        background-color: #024d4c;
        border-color: #024d4c;
        color: #fff;
        cursor: default;
    }
    &:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
  }
`;
const Pagination = () => {
  return (
    <Container>
      <a href="/#">← Previous</a>
      <a href="/#" className="active">1</a>
      <a href="/#">2</a>
      <a href="/#">3</a>
      <a href="/#">4</a>
      <a href="/#">5</a>
      <a href="/#">6</a>
      <a href="/#">7</a>
      <a href="/#">8</a>
      <a href="/#">9</a>
      <a href="/#">...</a>
      <a href="/#">41</a>
      <a href="/#">42</a>
      <a href="/#">Next →</a>
    </Container>
  );
};

export default Pagination;
