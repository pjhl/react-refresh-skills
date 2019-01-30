export const addTask = (id, text, isCompleated = false) => ({
  type: 'ADD_TASK',
  payload: {
    id,
    text,
    isCompleated
  }
})

export const removeTask = id => ({
  type: 'REMOVE_TASK',
  payload: { id }
})

export const updateTask = (id, { text = null, isCompleated = null }) => ({
  type: 'UPDATE_TASK',
  payload: {
    id,
    text,
    isCompleated
  }
})
