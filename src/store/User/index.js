const user = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
        return action.data
    default:
      return state
  }
}

export default user;
