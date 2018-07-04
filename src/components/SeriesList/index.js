import React from 'react';
import './index.css';

const SeriesListItem = function( {series} ){
		return (
			<li key={series.show.id}>
				{series.show.name}
			</li>
		)};

const SeriesList = function( props ) {
	return(
		<div>
			<ul className="series-list">
				{props.list.map(series => (
					<SeriesListItem series={series} />
				))}
			</ul>
		</div>
	);
};

export default SeriesList;
