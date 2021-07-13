import axios from 'axios';

//Types
export const GET_PERSONAGE_START = 'GET_PERSONAGE_START';
export const GET_PERSONAGE_SUCCESS = 'GET_PERSONAGE_SUCCESS';
export const GET_PERSONAGE_FAIL = 'GET_PERSONAGE_FAIL';

// Reducer
const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_PERSONAGE_START:
      return {
        ...state,
        personageIsLoading: true,
      };

    case GET_PERSONAGE_SUCCESS:
      return {
        ...state,
        personages: payload.results,
        personageIsLoading: false,
      };

    case GET_PERSONAGE_FAIL:
      return {
        ...state,
        personageIsLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;

//Action Creators
const getPersonage = () => async (dispatch, getState) => {
  dispatch({ type: GET_PERSONAGE_START });
  axios
    .get('https://swapi.dev/api/people')
    .then(function (response) {
      dispatch({ type: GET_PERSONAGE_SUCCESS, payload: response.data });
      console.log(response.data);
    })
    .catch(function (error) {
      dispatch({ type: GET_PERSONAGE_FAIL });
      console.log(error);
    });
};

export const actions = {
  getPersonage,
};

// Selectors
export const selectors = {};
