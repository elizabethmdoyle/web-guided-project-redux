export const initialState = {
    newMember: '',
    members: [
      { name: 'Jojo Zhang', dragonStatus: true },
      { name: 'Brandon Harris', dragonStatus: false }
    ]
  };

  
const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MEMBER:
      return {
        ...state,
        newMember: action.payload,
      };
    case ADD_MEMBER:
      return {
        ...state,
        members: {...state.members, action.payload} 
      };
    default:
      return state;
  }
};

export default dragonReducer;