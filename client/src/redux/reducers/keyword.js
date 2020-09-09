export default (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      const { payload } = action
      return payload
    default:
      return state
  }
}