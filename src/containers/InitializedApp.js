const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return dispatch
}

const InitializedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default InitializedApp