export const LOADING = 'LOADING'
export const ERROR = 'ERROR'

export function isLoading() {
  return {
    type: LOADING
  }
}

export function hasErrored(err) {
  return {
    type: ERROR,
    err
  }
}