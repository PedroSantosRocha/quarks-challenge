import axios from 'axios';
import { BASE_URL } from '../../../config/baseURL';

//Types
export const GET_PERSONAGE_START = 'GET_PERSONAGE_START';
export const GET_PERSONAGE_SUCCESS = 'GET_PERSONAGE_SUCCESS';
export const GET_PERSONAGE_FAIL = 'GET_PERSONAGE_FAIL';

export const ADD_PERSONAGE_FAVORITE_START = 'ADD_PERSONAGE_FAVORITE_START';
export const ADD_PERSONAGE_FAVORITE_SUCCESS = 'ADD_PERSONAGE_FAVORITE_SUCCESS';
export const ADD_PERSONAGE_FAVORITE_FAIL = 'ADD_PERSONAGE_FAVORITE_FAIL';

export const REMOVE_PERSONAGE_FAVORITE_START =
  'REMOVE_PERSONAGE_FAVORITE_START';
export const REMOVE_PERSONAGE_FAVORITE_SUCCESS =
  'REMOVE_PERSONAGE_FAVORITE_SUCCESS';
export const REMOVE_PERSONAGE_FAVORITE_FAIL = 'GET_PERSONAGE_FAVORITE_FAIL';

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
    /*-------------------------------------------------*/
    case ADD_PERSONAGE_FAVORITE_START:
      return {
        ...state,
        personageIsLoading: true,
      };
    case ADD_PERSONAGE_FAVORITE_SUCCESS:
      return {
        ...state,
        favoritesPersonages: [...state, payload.results],
        personageIsLoading: false,
      };
    case ADD_PERSONAGE_FAVORITE_FAIL:
      return {
        ...state,
        personageIsLoading: false,
      };
    /*-------------------------------------------------*/
    case REMOVE_PERSONAGE_FAVORITE_START:
      return {
        ...state,
        personageIsLoading: true,
      };
    case REMOVE_PERSONAGE_FAVORITE_SUCCESS:
      return {
        ...state,
        favoritesPersonages: state.favoritesPersonages.filter(
          personages => personages.name !== payload.results.name,
        ),
        personageIsLoading: false,
      };
    case REMOVE_PERSONAGE_FAVORITE_FAIL:
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
const getPersonage = () => async dispatch => {
  dispatch({ type: GET_PERSONAGE_START });
  axios
    .get(`${BASE_URL}`)
    .then(function (response) {
      dispatch({ type: GET_PERSONAGE_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: GET_PERSONAGE_FAIL });
    });
};

const addPersonageFavorite = personage => async dispatch => {
  dispatch({
    type: ADD_PERSONAGE_FAVORITE_SUCCESS,
    payload: personage,
  });
};

const RemovePersonageFavorite = personage => async dispatch => {
  dispatch({
    type: REMOVE_PERSONAGE_FAVORITE_SUCCESS,
    payload: personage,
  });
};

export const actions = {
  getPersonage,
  addPersonageFavorite,
  RemovePersonageFavorite,
};

// Selectors
export const selectors = {};
