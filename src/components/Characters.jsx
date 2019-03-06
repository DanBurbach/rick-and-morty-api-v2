import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import posed from 'react-pose';
import { keyframes } from 'popmotion';

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
});

const Characters = ({currentCharacterArray}) => {
  return (
    <Box className="box" pose={(currentCharacterArray.length > 0) ? 'visible' : 'hidden'}>
      <em>List of characters</em>
      {currentCharacterArray.map(character => {
        return (
          <li key={character.id} className="card">
            <img src={character.image}/>
            <h1>{character.name}</h1>
            <p>Status: {character.status} | Species: {character.species}</p>
            <p>Type: {character.type} | Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
          </li>
        );
      })}
    </Box>
  );
};

Characters.propTypes = {
  currentCharacterArray: PropTypes.arrayOf(Object),

  name: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentCharacterArray: state.currentCharacterArray,

  };
};

export default connect(mapStateToProps)(Characters);
