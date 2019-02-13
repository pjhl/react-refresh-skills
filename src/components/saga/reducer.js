const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return { user: action.payload }
    default:
      return state
  }
}
