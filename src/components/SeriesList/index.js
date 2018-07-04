import React from 'react';
import './index.css';

const SeriesListItem = function( {series} ){
		return (
			<li>
				{series.show.name}
			</li>
		)};

const SeriesList = function( props ) {
	return(
		<div>
			<ul className="series-list">
				{props.list.map(series => (
					<SeriesListItem series={series} key={series.show.id} />
				))}
			</ul>
		</div>
	);
};

export default SeriesList;
