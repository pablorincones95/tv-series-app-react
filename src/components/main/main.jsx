import React from 'react'
import { Switch, Route } from "react-router-dom";
import Series from '../../containers/series/series';
import SingleSeries from '../../containers/singleseries/singleseries';

const Main = props => {
  return (
    <Switch>
      <Route exact path="/" component={Series}/>
      <Route path="/series/:id" component={SingleSeries}/>
    </Switch>
  );
}

export default Main;