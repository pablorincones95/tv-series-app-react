import React, { Component } from 'react';
import 'whatwg-fetch';
import Intro from '../../components/intro/intro';
import Loading from '../../components/loading/loading';
import SeriesList from '../../components/seriesList/SerieList';

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      series: [],
      seriesName: '',
      isFetching: false 
    }
  }

  onSeriesInputChange = e => {

    this.setState({ seriesName: e.target.value, isFetching: true})

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`).then((response) => {
      response.json().then(json => {
        this.setState({ series : json, isFetching: false });
      });
    });
  }

  render() { 

    const { series, seriesName, isFetching } = this.state;

    return ( 
      <div> 

        <Intro message="component intro"/>

        <div>
          <input value={seriesName} type="text" onChange={this.onSeriesInputChange}/>
        </div>

        {
          !isFetching && series.length === 0 && seriesName.trim() === ''
          &&
          <p>Please enter series name into input</p>
        }

        {
          !isFetching && series.length === 0 && seriesName.trim() !== ''
          &&
          <p>No tv series have been found with name</p>
        }

        {
          isFetching && <Loading/>
        }

        {
          !isFetching && <SeriesList list={ this.state.series } />  
        }

      </div>
      
     );
  }
}
 
export default Series;