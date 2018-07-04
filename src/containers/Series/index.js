import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import './index.css';

class Series extends Component {
		state = {
    	series: []
  	};

		onSeriesInputChange = e =>{
			fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      	.then((response) => response.json())
      	.then(json => this.setState({series: json}))
		};
		render() {
			return (
				<div>
					The length of series array: {this.state.series.length}
					<input type="text" onChange={this.onSeriesInputChange} />
	        <SeriesList list = {this.state.series} />
	      </div>
			);
		};
};

export default Series;
