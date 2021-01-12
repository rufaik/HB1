import React from 'react';
import Card from './Card'
import './App.css';
import './Me.css'
import './Home.css'
import './Complete.css'
import CardList from './CardList'
import { main } from './main'
import LogoHeader from './Logo header'
import Navigation from './Navigation'
import 'tachyons';
import {Link} from 'react-router-dom';
import Gold from './Gold'
import { Fade } from 'react-slideshow-image';
import Nav from './Nav'
import ReactPlayer from 'react-player'


  const fadeImages = [
  './Images/1.jpeg',
  './Images/2.jpeg',
  './Images/3.jpeg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Me = () => {
  return (
    <div>
          <Nav />
          <div className="pt3">
            <div className="HC Hcontainer mt4 mt5-ns">
              <div className="Hbox poet">
                <h1>POET</h1>
                <p> po·​et | \ ˈpō-ət,-it also ˈpȯ(-)it \
                     Definition
                      <br></br>i: one who writes poetry : a maker of verses
                      <br></br>ii: one (such as a creative artist) of great imaginative and expressive capabilities and special sensitivity to the medium
                </p>
              </div >
              <ReactPlayer 
                playing
                  url='6.mp4'  
                loop={true}
                className="vid pt6 pt0-ns"
              />
              <div className="Hbox copy mt3 pr6-ns"> 
                <h1>COPYWRITER</h1> 
                <p> copy·​writ·​er | \ ˈkä-pē-ˌrī-tər  \
                    Definition of copywriter
                    <br></br>: a writer of advertising or publicity copy
                    <br></br>: a writer of copy, especially for advertisements or publicity releases.
                  </p> 
            </div> 
            <div className="Hbox lyric mt3 pr6-ns"> 
                <h1>LYRICIST</h1> 
                <p> lyr·​i·​cist | \ ˈlir-ə-sist  \
                    Definition of lyricist
                    <br></br>: a writer of lyrics
                    <br></br>: a person who writes the lyrics for songs.
                    <br></br>: a lyric poet.
                    <br></br>: a writer who writes lyrics—words for songs—as opposed to a composer, 
                    who writes the song's music which may include but not limited to the melody, harmony, arrangement and accompaniment.
                  </p> 
            </div> 
            <div className="Hbox vision mt2"> 
                <h1>VISIONARY</h1> 
                <p className="w8"> vi·​sion·​ary | \ ˈvi-zhə-ˌner-ē  \
                    Definition
                    <br></br>: having or marked by foresight and imagination
                    <br></br>: of the nature of a vision : ILLUSORY
                    <br></br>: incapable of being realized or achieved : UTOPIAN
                    <br></br>: existing only in imagination : UNREAL
                  </p> 
            </div> 
          </div>
        </div>
    </div>
  )
}











export default Me;
