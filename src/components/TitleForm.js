import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateNewTitle, updateTitle } from '../actions/titleActions';

const TitleForm = (props) => {
    // const [newTitleText, setNewTitleText] = useState();

    // const handleChanges = e => {
    //     setNewTitleText(e.target.value);
    // };

    // const handleSubmit = ()=> {
    //     props.handleTitleUpdate(newTitleText);
    // }
    
    return(<div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={props.newTitle}
            onChange={(e) => { props.updateNewTitle(e.target.value)}}
          />
          <button
            onClick={() => {props.updateTitle(props.newTitle)}}>
            Update title
          </button>
        </div>);
}

const mapStateToProps = (state) => {
  return {
    newTitle: state.title.newTitle 
  }
}

export default connect(mapStateToProps, {updateNewTitle, updateTitle})(TitleForm);