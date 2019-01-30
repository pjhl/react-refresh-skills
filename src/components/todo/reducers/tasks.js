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
    case 'REMOVE_TASK':
      return state.filter(el => el.id !== action.payload.id)
    case 'UPDATE_TASK':
      return state.map(el => {
        if (el.id === action.payload.id) {
          if (action.payload.text !== null) {
            el.text = action.payload.text
          }
          if (action.payload.isCompleated !== null) {
            el.isCompleated = action.payload.isCompleated
          }
        }
        return el
      })
    default:
      return state
  }
}
