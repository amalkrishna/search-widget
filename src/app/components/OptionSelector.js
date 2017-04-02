import React from 'react';

function OptionSelector(props) {

  return (
    <div className="optionSelector"  onClick={props.onOptionSelected}  id={props.optionValue}>
      <span>{props.titles}</span>
      <div className="title">{props.displayText}</div>
      <div className="arrow"></div>
    </div>
  );

}

export default OptionSelector;
