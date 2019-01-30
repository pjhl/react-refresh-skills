const initialState = [
  {
    id: 1,
    text: 'Learn React',
    isCompleated: true
  }, {
    id: 2,
    text: 'Learn redux',
    isCompleated: false
  }, {
    id: 3,
    text: 'Create react-redux admin framework',
    isCompleated: false
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}
