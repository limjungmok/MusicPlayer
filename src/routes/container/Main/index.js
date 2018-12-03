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
      isRecentsLoaded: false,
      isGenresLoaded: false,
      isRecommendsLoaded: false,
      recents: [],
      genres: [],
      recommends: [],
      currentMusic: {},
      isPlaying: false,
      timerId: null
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.fetchRecents = this.fetchRecents.bind(this);
    this.fetchGenres = this.fetchGenres.bind(this);
    this.fetchRecommends = this.fetchRecommends.bind(this);
    this.handleSelectMusic = this.handleSelectMusic.bind(this);
    this._playMusic = this._playMusic.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.fetchRecents();
    this.fetchGenres();
    this.fetchRecommends();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.state.timerId);
  }

  componentDidUpdate() {
    if(this.state.isPlaying) {
      this._playMusic();
    }
  }

  handleScroll(e) {
    window.scrollY > 0 
    ? this.setState({ isScrolled: true }) 
    : this.setState({ isScrolled: false });
  }

  async fetchRecents() {
    await axios.get('http://127.0.0.1:8000/recents').then(({ data }) => {
      const recents = data;
      this.setState({ 
        isRecentsLoaded: true,
        recents 
      });
    });
  }

  async fetchGenres() {
    await axios.get('http://127.0.0.1:8000/genres').then(({ data }) => {
      const genres = data;
      this.setState({ 
        isGenresLoaded: true,
        genres 
      });
    });
  }

  async fetchRecommends() {
    await axios.get('http://127.0.0.1:8000/recommends').then(({ data }) => {
      const recommends = data;
      this.setState({ 
        isRecommendsLoaded: true,
        recommends
       });
    });
  }

  handleSelectMusic(music) {
    const currentMusic = {
      title: music.title,
      artist: music.artist,
      thumbnail: music.thumbnail,
      duration: music.duration,
      playtime: music.playtime
    };
    this.setState({ 
      currentMusic,
      isPlaying: true
    });
  }

  _playMusic() {
    console.log(this.state)
  }

  // _playMusic() {
  //   const interval = 1000;
  //   let {currentMusic} = this.state.currentMusic;
  //   let {timerId} = this.state.timerId || 0;
  //   console.log({currentMusic}, timerId)

  //   function counterUp() {
  //     if(currentMusic.playtime < currentMusic.duration) {
  //       timerId = setTimeout(counterUp(), interval);
  //       currentMusic.playtime++;
  //       this.setState({
  //         currentMusic,
  //         timerId
  //       })
  //     } else {
  //       clearTimeout(timerId);
  //     }
  //   }
  // }


  render() {
    return (
      <div className="musicPlayer">
        <Header 
          isScrolled={this.state.isScrolled}
        />
        <div className="wrap">
          <section className="section">
            <h2 className="section_title">최신 음악</h2>
            {this.state.recents && (
              <RecentMusicList
                isRecentsLoaded = {this.state.isRecentsLoaded}
                recents = {this.state.recents}
                handleSelectMusic = {(e) => this.handleSelectMusic(e)}
              />
            )}
          </section>
          <section className="section">
            <h2 className="section_title">장르</h2>
            {this.state.genres && (
              <GenreList 
                isGenresLoaded = {this.state.isGenresLoaded}
                genres = {this.state.genres}
              />
            )}
          </section>
          <section className="section">
            <h2 className="section_title">추천 앨범</h2>
            {this.state.recommends && (
              <RecommendList
                isRecommendsLoaded = {this.state.isRecommendsLoaded}
                recommends = {this.state.recommends}
              />
            )}
          </section>
          <MusicPlayer 
            isPlaying = {this.state.isPlaying}
            currentMusic = {this.state.currentMusic}
          />
        </div>
      </div>
    );
  }
};

export default Main;
