import React, { Component } from 'react';
import Home from './components/Home';
import City from './components/City';
import DatePicker from './components/DatePicker';
let cityList = [], cityListLength;
class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      view:'home',
      carouselStart:0,
      carouselEnd:5,
      dateView:1,
      startDate:null,
      endDate:null,
      city_name:'YOUR CITY',
      link_name:'bangalore',
      link_starts:'START TRIP',
      link_ends:'END TRIP',
      link_lat:'',
      link_lng:'',
      title_city:'SELECT',
      title_start:'SELECT',
      title_end:'SELECT'
    };

    this.handleOptionSelector = this.handleOptionSelector.bind(this);
    this.handleCitySelector = this.handleCitySelector.bind(this);
    this.handleCarouselSelector = this.handleCarouselSelector.bind(this);
    this.handleStartDateSelector = this.handleStartDateSelector.bind(this);
    this.handleEndDateSelector = this.handleEndDateSelector.bind(this);

  }


  componentWillMount() {
    fetch("https://api.zoomcar.com/v4/users/app_config?platform=web",
      {
          method: "POST"
      })
      .then(function(res){ return res.json(); })
      .then(function(data){
        let cities=  data.cities;
        cityList = cities;
        cityListLength = cityList.length;
        console.log(cityList);
        console.log("length",cityListLength);
      });


  }

  handleOptionSelector(event){
    console.log("Option Selected",event.currentTarget.id);
    console.log(cityList);
    if(event.currentTarget.id === "city"){
        this.setState({
            view: 'city'
          });
    } else if(event.currentTarget.id === "startDate"){
        this.setState({
            view: 'datePicker',
            dateView:1
          });
    } else if(event.currentTarget.id === "endDate"){
        this.setState({
            view: 'datePicker',
            dateView:0
          });
    }
  }

  handleCitySelector(event){
    console.log("city selected ", event.name);
    this.setState({
        view: 'home',
        link_name: event.link_name,
        link_lat: event.lat,
        link_lng: event.lng,
        city_name:event.name,
        title_city:'CITY'
      });
  }

  handleCarouselSelector(event){
    console.log("carousel selected", event.target.id);
    if(event.target.id === "next" && this.state.carouselEnd!=cityListLength){
        this.setState({
            carouselStart: this.state.carouselStart+1 ,
            carouselEnd: this.state.carouselEnd+1
          });
    } else if(event.target.id === "prev" && this.state.carouselStart!=0){
        this.setState({
          carouselStart: this.state.carouselStart-1 ,
          carouselEnd: this.state.carouselEnd-1
          });
    }
  }

  dateFormatter(date){
    console.log("dateformater",date);
    var d = new Date(date);
    var fulldate = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
    return fulldate;
  }

  handleStartDateSelector(event){
    console.log("this", this.state.link_name);
      console.log("Start date selected", event._d);
      var start = this.dateFormatter(event._d);
      console.log('full', start);
      this.setState({
          view: 'home',
          link_starts: start,
          title_start: 'START TRIP'
        });
  }

  handleEndDateSelector(event){
      console.log("End date selected", event._d);
      var end = this.dateFormatter(event._d);
      console.log('full', end);
      this.setState({
          view: 'home',
          link_ends: end,
          title_end: 'END TRIP'
        });
  }


  viewSelect(){
      switch (this.state.view) {
        case 'home':
              return <Home onOptionSelected={this.handleOptionSelector}
                            link_name={this.state.link_name}
                            link_starts={this.state.link_starts}
                            link_ends={this.state.link_ends}
                            link_lat={this.state.link_lat}
                            link_lng={this.state.link_lng}
                            city_name={this.state.city_name}
                            title_city={this.state.title_city}
                            title_start={this.state.title_start}
                            title_end={this.state.title_end}
                            />
              break;
        case 'city':
              return <City cityList={cityList}
                            onCitySelected={this.handleCitySelector}
                            onCarouselBtnSelected={this.handleCarouselSelector}
                            carouselStart={this.state.carouselStart}
                            carouselEnd={this.state.carouselEnd}
                            />
              break;
        case 'datePicker':
              return <DatePicker onStartDateSelected={this.handleStartDateSelector}
                                  onEndDateSelected={this.handleEndDateSelector}
                                  startDate={this.state.startDate}
                                  endDate={this.state.endDate}
                                  dateView={this.state.dateView}
                                  />
              break;
        default:
              return <Home onOptionSelected={this.handleOptionSelector} />
      }
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          {this.viewSelect()}
        </div>
      </div>
    );
  }
}

export default App;
