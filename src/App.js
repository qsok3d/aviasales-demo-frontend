import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/Search" exact component={Search} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
