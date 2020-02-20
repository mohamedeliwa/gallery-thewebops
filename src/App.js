import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import BottomSection from "./components/BottomSection";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

const AppStyled = styled.div`
  //background-color: lightgrey;
  padding-top: 2.5rem;
  //text-align: center;
  max-width: 1100px;
  min-height: 200vh;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <AppStyled className="App">
        <Header />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        </Switch>
        <BottomSection />
        <Footer />
      </AppStyled>
    </Router>
  );
}

export default App;
