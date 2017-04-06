export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'

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

export function isSuccess() {
  return {
    type: SUCCESS
  }
}