import axios from 'axios';
import { BASE_URL } from '../../../config/baseURL';
import { types } from './types';

// Reducer
const initialState = {
  loading: false,
  personages: [],
  favoritesPersonages: [],
  nextPageURL: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PERSONAGE_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PERSONAGE_SUCCESS:
      return {
        ...state,
        personages: payload.results,
        loading: false,
        nextPageURL: payload.next,
      };
    case types.GET_PERSONAGE_FAIL:
      return {
        ...state,
        loading: false,
      };
    /*-------------------------------------------------*/
    case types.ADD_PERSONAGE_FAVORITE:
      return {
        ...state,
        favoritesPersonages: [...state.favoritesPersonages, payload],
      };
    /*-------------------------------------------------*/
    case types.REMOVE_PERSONAGE_FAVORITE:
      return {
        ...state,
        favoritesPersonages: state.favoritesPersonages.filter(
          personages => personages.name !== payload.name,
        ),
      };
    /*-------------------------------------------------*/
    case types.GET_PERSONAGE_NEXT_PAGE_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PERSONAGE_NEXT_PAGE_SUCCESS:
      console.log('reducer next page', [
        ...state.personages,
        ...payload.results,
      ]);
      return {
        ...state,
        personages: [...state.personages, ...payload.results],
        loading: false,
        nextPageURL: payload.next,
      };
    case types.GET_PERSONAGE_NEXT_PAGE_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;

//Action Creators
const getPersonage = () => async dispatch => {
  dispatch({ type: types.GET_PERSONAGE_START });
  axios
    .get(`${BASE_URL}/people`)
    .then(function (response) {
      dispatch({ type: types.GET_PERSONAGE_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: types.GET_PERSONAGE_FAIL });
    });
};

const addPersonageFavorite = personage => async dispatch => {
  dispatch({
    type: types.ADD_PERSONAGE_FAVORITE,
    payload: personage,
  });
};

const removePersonageFavorite = personage => async dispatch => {
  dispatch({
    type: types.REMOVE_PERSONAGE_FAVORITE,
    payload: personage,
  });
};

const getPersonageNextPage = () => async (dispatch, getState) => {
  const { nextPageURL } = getState().home;
  dispatch({ type: types.GET_PERSONAGE_NEXT_PAGE_START });
  axios
    .get(nextPageURL)
    .then(function (response) {
      console.log('NEXT_PAGE', response.data);
      dispatch({
        type: types.GET_PERSONAGE_NEXT_PAGE_SUCCESS,
        payload: response.data,
      });
    })
    .catch(function (error) {
      dispatch({ type: types.GET_PERSONAGE_NEXT_PAGE_FAIL });
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
