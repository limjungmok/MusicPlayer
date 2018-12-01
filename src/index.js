import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './routes/container/Main';
import Album from './routes/container/Album';

import './public/scss/app.scss';

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={Main} />
      <Switch>
        <Route path="/album" component={Album} />
        <Route path="/album/:id" component={Album} />
      </Switch>
    </Fragment>  
  </BrowserRouter>,
  document.getElementById('app')
);
