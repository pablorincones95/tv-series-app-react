import React from 'react';
import {Link} from 'react-router-dom'; 
import './SeriesList.css';

const SeriesItem = ({series}) => {
  return(
    <li>
      <Link to={`/series/${series.show.id}`}>{series.show.name}</Link>
    </li>
  )
}

const SeriesList = props => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map(series => (
          <SeriesItem series={series} key={series.show.id}/>
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;