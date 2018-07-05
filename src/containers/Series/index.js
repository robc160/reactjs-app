import React, { Component } from 'react';
import Main from '../../components/Main';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import './index.css';

class Series extends Component {
		state = {
    	series: [],
			seriesName: '',
			isFetching: false
  	};

		onSeriesInputChange = e => {
				this.setState({seriesName: e.target.value, isFetching: true})
				fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
	      	.then((response) => response.json())
	      	.then(json => this.setState({series: json, isFetching: false}))
		};

		render() {
			return (
				<div>
					<Intro message="Here you can find all of your most loved series" />
					<div>
						<input
								type="text"
								value={this.state.seriesName}
								onChange={this.onSeriesInputChange}
					  />
				</div>
					{
						!this.state.isFetching  && this.state.series.length === 0 && this.state.seriesName.trim() === ''
						&&
						<p>Please enter the series name.</p>
					}
					{
					 !this.state.isFetching  &&	 this.state.series.length === 0 && this.state.seriesName.trim() !== ''
						&&
						<p>Not found.</p>
					}
					{
						this.state.isFetching
						&&
						<Loader />
					}
					{
						!this.state.isFetching
						&&
						<SeriesList list = {this.state.series} />
					}
	      </div>
			);
		};
};

export default Series;
