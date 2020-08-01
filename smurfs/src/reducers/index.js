import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE,
} from "../actions";

const initialSate = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: "",
};

export const smurfsReducer = (state = initialSate, actions) => {
  switch (actions.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        smurfs: [],
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        smurfs: actions.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: actions.payload,
        smurfs: [],
      };
    case POST_START:
      return {
        ...state,
        isPosting: true,
        error: null,
        smurfs: [...state.players],
      };
    case POST_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: null,
        smurfs: actions.payload,
      };
    case POST_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: actions.payload,
        smurfs: [],
      };

    default:
      return state;
  }
};

export default smurfsReducer;
