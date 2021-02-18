import React from 'react';
import PropTypes from 'prop-types';

const NewWordButton = (props) => {
  if (props.display) {
    return (
      <button data-test="component-new-word-button">
        New word
      </button>
    );
  } else {
    return (
      <div data-test="component-new-word-button"></div>
    );
  }
};

NewWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  resetAction: PropTypes.func,
};

export default NewWordButton