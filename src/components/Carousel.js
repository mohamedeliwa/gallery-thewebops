import React, { useState } from 'react';
import styled from "styled-components";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { connect } from "react-redux";

const Container = styled.div`
    //background-color: lightgreen;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    position: relative;
    height: 140px;
    display: block;
    margin-top: 10px;
    background-color: #000;
    color: #fff;
    overflow: hidden;
    .icon-div {
        width: 18px;
        height: 100%;
        font-size: 20px;     
        position: absolute;    
        cursor: pointer;
    }
    .left-icon {
        top: 0;
        left: 0;
    }
    .right-icon {
        top: 0;
        right: 0;
    }
    .icon {
        position: absolute;
        top: 55px;
        left: 0;
    }
`;

const Slider = styled.div`
    height: 100%;
    //background-color: lightgreen;
    .card {
        //background-color: lightblue;
        width: 124px;
        height: 100%;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
            margin: 10px 0;
        }
        p {
            margin: 0;
            padding: 0;
            font-size: 12px;
            color: #fff;
            text-align: center;
        }
    }
`;


const Carousel = ({icons}) => {
    const [ shownIcons, setShownIcons ] = useState(icons.slice(0,8));

    let sliderContent = shownIcons.map((image, i) => {
            return (
                <div className="card" style={{"backgroundColor": "transparent"}} key={image.id}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>
            )     
    });
    const handleClick = (e) => {
        console.log(e.currentTarget.id);
        
        if (e.currentTarget.id === "left-icon") {
            console.log("go left");
            let sliderStart = sliderContent[0].key;
            console.log(sliderStart);
            sliderStart = shownIcons.filter(image => image.id == sliderStart);
            console.log(sliderStart);
            const startIndex = icons.indexOf(sliderStart[0]);
            console.log(startIndex);
            if(startIndex > 0){
                let iconsArray = icons.slice(startIndex-1);
                let index = 0;
                while(iconsArray.length < 8){
                    iconsArray.push(icons[index]);
                    index++;
                }
                setShownIcons(iconsArray);
            } else if (startIndex == 0) {
                let iconsArray = icons.slice(icons.length-1);
                let index = 0;
                while(iconsArray.length < 8){
                    iconsArray.push(icons[index]);
                    index++;
                }
                setShownIcons(iconsArray);
            }

        } else if (e.currentTarget.id === "right-icon" ) {
             console.log("go right");
            let sliderStart = sliderContent[0].key;
            console.log(sliderStart);
            sliderStart = shownIcons.filter(image => image.id == sliderStart);
            console.log(sliderStart);
            const startIndex = icons.indexOf(sliderStart[0]);
            console.log(startIndex);
            if(startIndex < icons.length-1){
                let iconsArray = icons.slice(startIndex+1);
                let index = 0;
                while(iconsArray.length < 8){
                    iconsArray.push(icons[index]);
                    index++;
                }
                setShownIcons(iconsArray);
            } else if (startIndex == icons.length-1) {
                console.log("more")
                let iconsArray = icons.slice(icons.length-2);
                console.log(iconsArray);
                let index = 0;
                while(iconsArray.length < 8){
                    iconsArray.push(icons[index]);
                    index++;
                }
                setShownIcons(iconsArray);
            }
        }
       
    }
    return (
        <Container>
            <div className="icon-div left-icon" id="left-icon" onClick={handleClick}>
                <FaCaretLeft className="icon"  />
            </div>
            <Slider>
                {sliderContent}
            </Slider>
            <div className="icon-div right-icon" id="right-icon" onClick={handleClick}>
                <FaCaretRight className="icon"   /> 
            </div>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        icons: state.sliderIcons
    }
}

export default connect(mapStateToProps)(Carousel);
