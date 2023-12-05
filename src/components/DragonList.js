import React from 'react';
import DragonMember from './DragonMember';
import { connect } from 'react-redux';

import { updateNewMember, addMember } from '../actions/dragonListActions';

class DragonList extends React.Component {
  // state = {
  //   newMember: '',
  //   members: [
  //     { name: 'Jojo Zhang', dragonStatus: true },
  //     { name: 'Brandon Harris', dragonStatus: false }
  //   ]
  // };

  // handleChanges = e => {
  //   this.setState({ ...this.state, newMember: e.target.value });
  // };

  // handleClick = ()=> {
  //   this.setState({
  //     ...this.state,
  //     members: [...this.members, {name: newMember, dragonStatus: true}]
  //   })
  // }

 handleClick = () => {
    const newMember = {name: this.props.newMember, dragonStatus: true}
    this.props.addMember(newMember)
  }

  render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.props.newMember}
          onChange={(e) => {
            this.props.updateNewMember(e.target.value)
          }}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    member: state.dragonList.members,
    newMember: state.dragonList.newMember
  }
}

export default connect(mapStateToProps, {updateNewMember, addMember})(DragonList);
