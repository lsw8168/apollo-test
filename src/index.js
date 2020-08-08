import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/swapi'
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
