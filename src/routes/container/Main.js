import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecentMusicList from '../components/RecentMusicList';
import RecentMusicJSONArray from '../../database/recentMusicArray.json';
import util from '../../utils/util';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentMusicArray: []
    };
    this.fetchRecentMusicArray = this.fetchRecentMusicArray.bind(this);
  }

  async componentDidMount() {
    // fetch recentMusicArray
    const recentMusicArray = await this.fetchRecentMusicArray();
    this.setState({ recentMusicArray });
  }

  fetchRecentMusicArray() {
    return RecentMusicJSONArray;
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
            {this.state.recentMusicArray && (
              <RecentMusicList
                recentMusicArray = {this.state.recentMusicArray}
              />
            )}
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
