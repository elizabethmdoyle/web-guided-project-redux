import React, { useState, useReducer } from 'react';
import {connect} from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  // const handleToggleEditing = () => {
  //   dispatch(toggleEditing());
  // }

  // const handleTitleUpdate = (title) => {
  //   dispatch(updateTitle(title));
  // }

  return (
    <div>
      {
        !props.editing ? 
          <TitleDisplay/>: 
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    editing: state.title.editing
  }
}

export default connect(mapStateToProps, {})(Title);
