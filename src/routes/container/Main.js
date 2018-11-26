import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import RecentMusicList from '../components/RecentMusicList';
import GenreList from '../components/GenreList';

import RecentMusicJSONArray from '../../database/recentMusicArray.json';
import GenreJSONArray from '../../database/genreArray.json';

import util from '../../utils/util';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      recentMusicArray: [],
      genreArray: []
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.fetchRecentMusicArray = this.fetchRecentMusicArray.bind(this);
    this.fetchGenreArray = this.fetchGenreArray.bind(this);
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const recentMusicArray = await this.fetchRecentMusicArray();
    const genreArray = await this.fetchGenreArray();

    this.setState({ recentMusicArray });
    this.setState({ genreArray });
  }

  handleScroll(e) {
    window.scrollY > 0 
    ? this.setState({ isScrolled: true }) 
    : this.setState({ isScrolled: false });
  }

  fetchRecentMusicArray() {
    return RecentMusicJSONArray;
  }

  fetchGenreArray() {
    return GenreJSONArray;
  }

  render() {
    return (
      <div className="musicPlayer">
        <Header 
          isScrolled={this.state.isScrolled}
        />
        <div className="wrap">
          <section className="section">
            <h2 className="section_title">
              <a 
                href={'#'} 
                className="section_anchor">최신음악
              </a>
            </h2>
            {this.state.recentMusicArray && (
              <RecentMusicList
                recentMusicArray = {this.state.recentMusicArray}
              />
            )}
          </section>
          <section className="section">
            <h2 className="section_title">
              <a 
                href={'#'} 
                className="section_anchor">장르
              </a>
            </h2>
            {this.state.genreArray && (
              <GenreList 
                genreArray = {this.state.genreArray}
              />
            )}
          </section>
          <section className="section"></section>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Main;
