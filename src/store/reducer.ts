let defaultState = {
  name: 'redux',
  list: ['123123123', '22222222222222', '33333333333333'],
}
export default (state = defaultState, action: any) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...action.list }
  }
  // console.warn(action)
  return state
}
