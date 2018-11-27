import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './routes/container/Main';
import PlayList from './routes/container/PlayList';

import './public/scss/app.scss';

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={Main} />
      <Route exact path="/playlist" component={PlayList} />
    </Fragment>  
  </BrowserRouter>,
  document.getElementById('app')
);
