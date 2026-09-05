import { IoSearchSharp } from "react-icons/io5";

import sun from "./images/sun.png";

import clouds from "./images/clouds.png";

import rains from "./images/rains.png";

import snow from "./images/snow.png";

import thunder from "./images/thunder.png";

import rain from "./images/rain.png";

import mist from "./images/mist.png";

import styles from "./style.module.css";
import { MdWaterDrop } from "react-icons/md";
import { RiCloudWindyLine } from "react-icons/ri";
import { useState } from "react";
const App = () => {
  const [city, setCity] = useState("");

  const [data, setData] = useState(null);

  const API_KEY = "d90a6d30ccd84d18710513ec42e77db4 ";

  const LINK = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;



  const handleFetch = async () => {
    const res = await fetch(LINK);
    const data = await res.json();
    console.log(data)
    setData(data);
  };

  const renderIcon = () =>{
    const weather = data?.weather[0]?.main;
    console.log(weather);
    switch (weather){
      case "Clear":
        return <img className={styles.previewImg} src={sun} alt="" />
      case "Thunderstorm":
        return <img className={styles.previewImg} src={thunder} alt="" />
      case "Snow":
        return <img className={styles.previewImg} src={snow} alt="" />
      case "Clouds":
        return <img className={styles.previewImg} src={clouds} alt="" />
      case "Rain":
        return <img className={styles.previewImg} src={rains} alt="" />
         case "Drizzle":
        return <img className={styles.previewImg} src={rain} alt="" />
         case "Atmosphere":
        return <img className={styles.previewImg} src={mist} alt="" />
        default:
          
    }
  } 

  return (
    <div className={styles.container}>
      <div className={styles.searchContianer}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.searchBar}
          type="text"
          name="city"
          id="city"
          placeholder="City"
        />

        <button className={styles.searchBtn} onClick={handleFetch}>
          <IoSearchSharp />
        </button>
      </div>
      {renderIcon()}
      <p className={styles.temperature}>{Math.round(data?.main?.temp)} K</p>
      <p className={styles.city}>{data?.name}</p>
      <div className={styles.infoContainer}>
        <div className={styles.infoSubcontainer}>
          <MdWaterDrop className={styles.icon} />
          <div>
            <p className={styles.bold}>{data?.main?.humidity}</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className={styles.infoSubcontainer}>
          <RiCloudWindyLine className={styles.icon} />
          <div>
            <p className={styles.bold}>{data?.wind?.speed}</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
