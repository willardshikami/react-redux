//reducer takes 2 things
//1. action - info about what happened.
//2. copy of the state.

function posts(state = [], action){
  console.log(state, action);
  return state;
}

export default posts;