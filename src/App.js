import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login.js";

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Checkout /> */}
      <Router>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header />
                  <Home />
                </div>
              }
            />
            <Route
              path="/checkout"
              element={
                <div>
                  <Header />
                  <Checkout />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div>
                  <Login />
                </div>
              }
            />
            {/* <Route path="/WristWatch" element={<Main />} />
            <Route path="/Blog/*" element={<Head />} />
            <Route path="/Contact/*" element={<App1 />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
    // <Router>
    //  <div>
    //  <Header />
    //     <Switch>
    //       <Route path='/login'>
    //         <Login />
    //       </Route>
    //       {/* <Header /> */}
    //       <Route path='/checkout'>
    //         <Checkout />
    //       </Route>

    //       <Route exact path='/'>
    //       <Home />
    //       </Route>
    //     </Switch>
    //     </div>
    // </Router>
  );
}

export default App;
