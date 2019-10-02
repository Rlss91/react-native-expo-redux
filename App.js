import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer1 from './store/reducers/reducer1';
import T1 from './components/T1'

const rootReducer = combineReducers({
  r1: reducer1
})
const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store = {store}>
      <T1 />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
