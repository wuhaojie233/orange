export default (store: any) => {
  return (next: any) => {
    return (action: any) => {
      console.log(store)
      console.log(action)
      next(action)
    }
  }
}
