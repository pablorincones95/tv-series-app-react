import React, {Component} from 'react'
import {Link} from 'react-router-dom'; 
import Loading from '../../components/loading/loading';

class SingleSeries extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: null
     }
  }

  componentDidMount() {

    const {id} = this.props.match.params; 

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`).then((response) => {
      response.json().then(json => {
        this.setState({ show : json });
      });
    });
  }

  render() { 
    const {show} = this.state;
    return ( 
      <div>
        { show === null && <Loading/> }

        {
          show !== null
          &&
          <div>
            <p><Link to={'/'}>back</Link></p>
            <p>{show.name}</p>
            <p>Premiered: {show.premiered}</p>
            <p>Rating: {show.rating.average}</p>
            <p>Episodes: {show._embedded.episodes.length}</p>
            <p>
              <img src={show.image.medium} alt="show"/>
            </p>
          </div>
        }
      </div>  
    );
  }
}
 
export default SingleSeries;