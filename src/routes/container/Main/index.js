import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import RecentMusicList from '../../components/RecentMusicList';
import GenreList from '../../components/GenreList';
import RecommendList from '../../components/RecommendList'
import MusicPlayer from '../../components/MusicPlayer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      isMusicPlayerListOpend: false,
      recents: [],
      genres: [],
      recommends: []
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.fetchRecents = this.fetchRecents.bind(this);
    this.fetchGenres = this.fetchGenres.bind(this);
    this.fetchRecommends = this.fetchRecommends.bind(this);
    this.handleOpenMusicList = this.handleOpenMusicList.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.fetchRecents();
    this.fetchGenres();
    this.fetchRecommends();  
  }

  handleScroll(e) {
    window.scrollY > 0 
    ? this.setState({ isScrolled: true }) 
    : this.setState({ isScrolled: false });
  }

  async fetchRecents() {
    await axios.get('http://127.0.0.1:8000/recents').then(({ data }) => {
      const recents = data;
      this.setState({ recents });
    });
  }

  async fetchGenres() {
    await axios.get('http://127.0.0.1:8000/genres').then(({ data }) => {
      const genres = data;
      this.setState({ genres });
    });
  }

  async fetchRecommends() {
    await axios.get('http://127.0.0.1:8000/recommends').then(({ data }) => {
      const recommends = data;
      this.setState({ recommends });
    });
  }

  handleOpenMusicList() {
    this.setState({ isMusicPlayerListOpend: !this.state.isMusicPlayerListOpend });
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
              <a href={'#'} className="section_anchor">최신 음악</a>
            </h2>
            {this.state.recents && (
              <RecentMusicList
                recents = {this.state.recents}
              />
            )}
          </section>
          <section className="section">
            <h2 className="section_title">
              <a href={'#'} className="section_anchor">장르</a>
            </h2>
            {this.state.genres && (
              <GenreList 
                genres = {this.state.genres}
              />
            )}
          </section>
          <section className="section">
            <h2 className="section_title">
              <a href={'#'} className="section_anchor">추천 앨범</a>
            </h2>
            {this.state.recommends && (
              <RecommendList
                recommends = {this.state.recommends}
              />
            )}
          </section>
          <MusicPlayer 
            handleOpenMusicList = {this.handleOpenMusicList}
          />
        </div>
      </div>
    );
  }
};

export default Main;