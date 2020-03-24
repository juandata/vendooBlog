import React from "react";

import MainTitle from "./MainTitle";
import NavBar from "./NavBar";
import Thumbnail from "./Thumbnail";
import Button from "./Button";

import snowMountainImg from './assets/snowMountains.png';
import bigCitiesImg from './assets/bigCities.png';
import longDesertImg from './assets/longDesert.png'
import deepOceanImg from './assets/deepOceans.png';
import buttonBackgroundImg from './assets/buttonBackground.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="MainHeader">
        <MainTitle />  <NavBar />

      </header>
      <main className="MainSection">
        <section className="Section1">
        <Thumbnail Title="Snow Mountains" Likes={10} Date={"12/18/90"} Img={snowMountainImg} />
     
          <div className="InnerSection">
          <Thumbnail Title="Big Cities" Likes={10}  Img={bigCitiesImg}  />
        <Thumbnail Title="Long Desert" Likes={1}   Img={longDesertImg} />
          </div>
        </section>
        <section className="Section2">
        <Thumbnail Title="Long Desert" Likes={10} Date={"6/6/96"} Img={deepOceanImg} Id="ThumbnailSection2" />
        <Button Img={buttonBackgroundImg} />

        </section>
      </main> 
    </div>
  );
}




/**  <header className="MainHeader">
        </header>
        <main className="MainSection">
          <section className="Section1">

          </section>
          <section className="Section2">

          </section>

        </main> */