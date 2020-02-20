import React from "react";
import styled from "styled-components";
import budgeter from "../images/icons/tools-budgeter.png";
import checklist from "../images/icons/tools-checklist.png";
import guestlist from "../images/icons/tools-guestlist.png";
import registry from "../images/icons/tools-registry.png";
import vendors from "../images/icons/tools-vendors.png";
import website from "../images/icons/tools-website.png";

const Container = styled.div`
  //background-color: lightgrey;
  text-align: center;
  padding: 1rem;
  margin-top: 100px;
  font-family: "Lato", sans-serif;
  h3 {
    font-family: "Lato", sans-serif;
    font-size: 24px;
    line-height: 1.25;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
    font-weight: 900;
  }
  .wedding-tools{
    //background-color: lightgrey;
    margin: 90px auto 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    section {
      //background-color: lightgreen;
      //margin: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 335px;
      margin: 35px 0;
      .icon{
        img {
          width: 60px;
          margin: 30px;
        }
      }

      .desc {
        text-align: left;
        h4 {
          margin: 0;
          margin-bottom: 7px;
          font-size: 18px;
          font-weight: 900;
          line-height: 1.39;
          letter-spacing: 0.7px;
        }

        p {
          font-size: 12px;
          line-height: 1.25;
          letter-spacing: 0.5px;
        }
      }

      @media screen and (max-width: 719px){
        & {
          width: 95%;
        }
      }
    }
    
  }
`;
const BottomSection = () => {
  return (
    <Container>
      <h3>
        WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS
        MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.
      </h3>
      <div className="wedding-tools">
        <section>
          <div className="icon">
            <img src={website} />
          </div>
          <div className="desc">
            <h4>WEDDING WEBSITE</h4>
            <p>
              Where you will save all your wedding memories forever, where you
              will choose your own personalized template, manage every event
              detail and let your guests share their pictures, videos and
              moments with you. Create your website
            </p>
          </div>
        </section>
        <section>
          <div className="icon">
            <img src={budgeter} />
          </div>
          <div className="desc">
            <h4>BUDGETER</h4>
            <p>
              Do you have a figure in mind? Place it in the budgeter and we will
              provide you with all the choices and possibilities you can think
              of. Create and manage your budget
            </p>
          </div>
        </section>
        <section>
          <div className="icon">
            <img src={checklist} />
          </div>
          <div className="desc">
            <h4>CHECK LIST</h4>
            <p>
              Set your tasks, create your priority list and never forget any
              wedding detail. Get your check list
            </p>
          </div>
        </section>
        <section>
          <div className="icon">
            <img src={guestlist} />
          </div>
          <div className="desc">
            <h4>GUEST LIST</h4>
            <p>
              Who is coming? Who is not? Who replied with a "Maybe"? Manage all
              of this while customizing your invitations. All in one place and
              right at your fingertips. Create your guest list
            </p>
          </div>
        </section>
        <section>
          <div className="icon">
            <img src={vendors} />
          </div>
          <div className="desc">
            <h4>VENDORS</h4>
            <p>
              Meet your service providers, view their profiles and make all the
              perfect choice for your wedding night. Start your tour
            </p>
          </div>
        </section>
        <section>
          <div className="icon">
            <img src={registry} />
          </div>
          <div className="desc">
            <h4>registry</h4>
            <p>
              Escape the awkward moments and receiving the same gift twice by
              listing everything you've thought of and every store you love. Let
              your guests choose what to get you for the wedding and say goodbye
              to unwanted presents. Create your dream list
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default BottomSection;
