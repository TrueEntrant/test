import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../containers/main";

const RootRouter = (props: any) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RootRouter;
