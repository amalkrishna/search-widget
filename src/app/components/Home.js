import React from 'react';
import OptionSelector from './OptionSelector';
import logo from './../images/logo.png'

function Home(props) {
  let link = `https://www.zoomcar.com/${props.link_name}/search?starts=${props.link_starts} 18:00&ends=${props.link_ends} 22:00&lat=${props.link_lat}&lng=${props.link_lng}&hd=0&new_search=true&mapAddHash=undefined&formattedAddress=undefined`;
  return (
    <div className="home">
      <div className="header">
        <img src={logo} alt="logo"/>
        <p>Drive in the city and outstation.<br />Rent a self driven car</p>
      </div>
      <div className="ctas">
        <OptionSelector onOptionSelected={props.onOptionSelected} optionValue="city" displayText={props.city_name} titles={props.title_city}/>
        <OptionSelector onOptionSelected={props.onOptionSelected} optionValue="startDate" displayText={props.link_starts} titles={props.title_start}/>
        <OptionSelector onOptionSelected={props.onOptionSelected} optionValue="endDate" displayText={props.link_ends} titles={props.title_end}/>
        <a href={link} target="_blank">
        <div className="cta">
          <div>FIND CARS</div>
        </div>
        </a>
      </div>
    </div>
  );

}

export default Home;
