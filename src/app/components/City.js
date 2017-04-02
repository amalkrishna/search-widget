import React,{Component} from 'react';
class City extends Component{
  handleCityClick(city){
    this.props.onCitySelected(city);
  }
  render(){
    var that = this;
    return (
      <div className="citySelector">
        <div>CITY</div>
        <div onClick={this.props.onCarouselBtnSelected} id="prev">&#x25B2;</div>
        <ul>
        {
          this.props.cityList.slice(this.props.carouselStart, this.props.carouselEnd).map(function(city){
          return(
            <li key={city.id}  onClick={that.handleCityClick.bind(that,city)}>{city.name}</li>
          );
        })}
        </ul>
        <div onClick={this.props.onCarouselBtnSelected} id="next">&#x25BC;</div>
      </div>
    );
  }

}

export default City;
