import React from 'react';

import {connect} from 'react-redux'
import { toggleEditing } from '../actions/titleActions';


const TitleDisplay = (props)=> {
  const handleClick = () => {
  }

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={handleClick}
      />
  </h2>);

}

const mapStateToProps = (state) => {
  return {
    title: state.title.title
  }
}

export default connect(mapStateToProps, {toggleEditing: toggleEditing})(TitleDisplay);