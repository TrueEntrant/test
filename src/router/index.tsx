import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "src/containers/header";
import Main from "src/containers/main";

const RootRouter = (props: any) => {
  return (
    <BrowserRouter>
      <>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
};

export default RootRouter;
