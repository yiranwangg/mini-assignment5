import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import allreducers from './reducers/reducers.js';


const store = createStore(allreducers)

ReactDOM.render(
    <Provider store={store} >
        <Grid />
    </Provider>,
    document.getElementById('root')
);