import React from 'react';

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
}

export default NewWordButton