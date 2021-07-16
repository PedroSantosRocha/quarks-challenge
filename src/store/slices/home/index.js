import axios from 'axios';
import { BASE_URL } from '../../../config/baseURL';

//Types
export const GET_PERSONAGE_START = 'GET_PERSONAGE_START';
export const GET_PERSONAGE_SUCCESS = 'GET_PERSONAGE_SUCCESS';
export const GET_PERSONAGE_FAIL = 'GET_PERSONAGE_FAIL';

export const ADD_PERSONAGE_FAVORITE = 'ADD_PERSONAGE_FAVORITE';

export const REMOVE_PERSONAGE_FAVORITE = 'REMOVE_PERSONAGE_FAVORITE';

export const GET_PERSONAGE_NEXT_PAGE_START = 'GET_PERSONAGE_NEXT_PAGE_START';
export const GET_PERSONAGE_NEXT_PAGE_SUCCESS =
  'GET_PERSONAGE_NEXT_PAGE_SUCCESS';
export const GET_PERSONAGE_NEXT_PAGE_FAIL = 'GET_PERSONAGE_NEXT_PAGE_FAIL';

// Reducer
const initialState = {
  personageIsLoading: false,
  personages: [],
  favoritesPersonages: [],
  nextPageURL: 0,
};

const reducer = (state = initialState, { type, payload }) => {
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
        nextPageURL: payload.next,
      };
    case GET_PERSONAGE_FAIL:
      return {
        ...state,
        personageIsLoading: false,
      };
    /*-------------------------------------------------*/
    case ADD_PERSONAGE_FAVORITE:
      console.log('reducer add personage', [
        ...state.favoritesPersonages,
        payload,
      ]);
      return {
        ...state,
        favoritesPersonages: [...state.favoritesPersonages, payload],
      };
    /*-------------------------------------------------*/
    case REMOVE_PERSONAGE_FAVORITE:
      return {
        ...state,
        favoritesPersonages: state.favoritesPersonages.filter(
          personages => personages.name !== payload.name,
        ),
      };
    /*-------------------------------------------------*/
    case GET_PERSONAGE_NEXT_PAGE_START:
      return {
        ...state,
        personageIsLoading: true,
      };
    case GET_PERSONAGE_NEXT_PAGE_SUCCESS:
      console.log('reducer next page', [
        ...state.personages,
        ...payload.results,
      ]);
      return {
        ...state,
        personages: [...state.personages, ...payload.results],
        personageIsLoading: false,
        nextPageURL: payload.next,
      };
    case GET_PERSONAGE_NEXT_PAGE_FAIL:
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
    .get(`${BASE_URL}/people`)
    .then(function (response) {
      dispatch({ type: GET_PERSONAGE_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: GET_PERSONAGE_FAIL });
    });
};

const addPersonageFavorite = personage => async dispatch => {
  dispatch({
    type: ADD_PERSONAGE_FAVORITE,
    payload: personage,
  });
};

const removePersonageFavorite = personage => async dispatch => {
  dispatch({
    type: REMOVE_PERSONAGE_FAVORITE,
    payload: personage,
  });
};

const getPersonageNextPage = () => async (dispatch, getState) => {
  const { nextPageURL } = getState().home;
  dispatch({ type: GET_PERSONAGE_NEXT_PAGE_START });
  axios
    .get(nextPageURL)
    .then(function (response) {
      console.log('NEXT_PAGE', response.data);
      dispatch({
        type: GET_PERSONAGE_NEXT_PAGE_SUCCESS,
        payload: response.data,
      });
    })
    .catch(function (error) {
      dispatch({ type: GET_PERSONAGE_NEXT_PAGE_FAIL });
    });
};

export const actions = {
  getPersonage,
  addPersonageFavorite,
  removePersonageFavorite,
  getPersonageNextPage,
};

// Selectors
const personages = ({ home }) => home.personages;
const favoritesPersonages = ({ home }) => home.favoritesPersonages;

export const selectors = {
  personages,
  favoritesPersonages,
};
