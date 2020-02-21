import React, { useState } from 'react';
import styled from "styled-components";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import icons from "../data/slider-icons";
const image = {
    url: "https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/42/icon/big-05336d746529a7b2585adbf945dea5e2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200220%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200220T121710Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=74c875e676f379990fc8f43d20cce13b785713c529f8c430a23f4720d5b3acc0",

    title: "Health",
    id: 9
}
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


const Carousel = () => {
    const [ shownIcons, setShownIcons ] = useState(icons.slice(0,8));

    let sliderContent = shownIcons.map((image, i) => {
        // if (i <= 7){
            return (
                <div className="card" style={{"backgroundColor": "transparent"}} key={image.id}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>
            )
        // }
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
                {/* <div className="card" style={{"backgroundColor": "green"}}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>
                <div className="card" style={{"backgroundColor": "red"}}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>
                <div className="card" style={{"backgroundColor": "blue"}}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>
                <div className="card" style={{"backgroundColor": "yellow"}}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>
                <div className="card" style={{"backgroundColor": "grey"}}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>
                <div className="card" style={{"backgroundColor": "red"}}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>
                <div className="card" style={{"backgroundColor": "yellow"}}>
                    <img src={image.url} alt="asd" />
                    <p>{image.title}</p>
                </div>   */}
            </Slider>
            <div className="icon-div right-icon" id="right-icon" onClick={handleClick}>
                <FaCaretRight className="icon"   /> 
            </div>
        </Container>
    )
}

export default Carousel;
