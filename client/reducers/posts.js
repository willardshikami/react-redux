//reducer takes 2 things
//1. action - info about what happened.
//2. copy of the state.

function posts(state = [], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
    console.log("incrementing likes")
    const i = action.index;
    return[
      ...state.slice(0,i), //before the one we are 
      {...state[i], likes: state[i].likes +1},
      ...state.slice(i + 1),//after the one we are updating
    ]
    //return updated state
    default:
      return state;
  }
}

export default posts;