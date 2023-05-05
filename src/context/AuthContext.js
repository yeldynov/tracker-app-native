import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { errorMessage: '', token: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    // make API request to sign up with the email and password
    // if we sign up, modify the state, and say that we are authenticated
    // if signing up fails, we need to reflect an error message
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });

      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up.',
      });
    }
  };

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign in
    // Handle success by updating the state
    // Handle failure by showing the error message
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);
