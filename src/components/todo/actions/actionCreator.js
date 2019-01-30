export const addTask = (id, text, isCompleated) => ({
  type: 'ADD_TASK',
  payload: {
    id,
    text,
    isCompleated
  }
})
