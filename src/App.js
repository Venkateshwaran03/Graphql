import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Retailer from './retailerDetails';
import './App.css';

const client = new ApolloClient({
  uri: "https://mfsd5v4t35dqfgtlnvzb5qza2e.appsync-api.ap-south-1.amazonaws.com/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">GraphQL - Sample Application</a>
      </nav>
      <div>
        <Retailer />
      </div>
    </div>
  </ApolloProvider>
)


export default App;
