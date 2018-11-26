import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import util from '../../utils/util';

class Main extends Component {
  render() {
    return (
      <div className="musicPlayer">
        <Header />
        <div className="wrap">container</div>
        <Footer />
      </div>
    );
  }
};

export default Main;
