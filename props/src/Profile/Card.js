import React from 'react';
import PropTypes from 'prop-types';
import Akram from '../img/akram.jpeg';

function Card(props) {
    const { item, name,bio,profission } = props
    return (
        <>
        <h1>{name}</h1>
        <img  style={{"height" : "120px", "width" : "220px"}} src={Akram} />
        <h3>{profission}</h3>
        <p>{bio}</p>
        <div>
      <script>
         function handleName() {
           
          alert('rayen hotmani')
              }
        </script>

      </div>
        </>
    )
            }
  
  Card.defaultProps = {
    name: "rayen hotmani",
    bio: "I’ve always had a natural curiosity for machinery. As a child, I loved taking things apart and putting them back together. By the age of 12, I was building components for use in construction and even making a bit of pocket money for my troubles. My passion for machinery continued to develop and I soon obtained a mechanical engineering degree from the Massachusetts Institute of Technology (MIT).",
    profission:"web developer",
    img:{rayen},
  };
  
  Card.propTypes = {
    
    name: PropTypes.string,
    bio: PropTypes.string,
    profission: PropTypes.string,
    img:PropTypes.object
  }
  
  export default Card
  