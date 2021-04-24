export default (store: any) => {
  return (next: any) => {
    return (action: any) => {
      if (typeof action === 'function') {
        return action(store.dispatch)
      }
      next(action)
    }
  }
}
