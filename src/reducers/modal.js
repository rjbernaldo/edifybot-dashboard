import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';

const initialState = {
  visible: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL: {
      return Object.assign({}, state, action.modal, { visible: true });
    }
    case HIDE_MODAL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
