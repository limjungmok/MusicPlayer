import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import util from '../../utils/util';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentMusicArray: []
    };
  }

  componentDidMount() {
    // fetch recentMusicArray
  }

  render() {
    return (
      <div className="musicPlayer">
        <Header />
        <div className="wrap">
          <section className="section">
            <h2 className="section_title">
              <a 
                href={'#'} 
                className="section_anchor">최신음악</a>
            </h2>
            <div className="recents">
              {[...Array(10)].map((recent, i) => (
                <a 
                  href="#" 
                  className="recent"
                  key={i}
                  >
                  <figure className="recent_profile">
                    <img 
                      src={''}
                      className="recent_img"
                      alt='' 
                    />
                  </figure>
                  <b className="recent_title">{'타이틀12341234'}</b>
                  <i className="recent_artist">{'아티스트12342143'}</i>
                </a>
              ))}
            </div>
          </section>
          <section className="section"></section>
          <section className="section"></section>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Main;
