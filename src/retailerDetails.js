import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';



const Retailer = () => (
    <Query query={gql`
        {
            getReteilerInfoget {
                items {
                  retailerId
                  retailerName
                }
              }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
            
            return data.getReteilerInfoget.items.map(({retailerId,retailerName}) => (
                <div key={retailerId}>
                   <p> {`${retailerName}`}</p>
                </div>
            ));
        }}
    </Query>
);

export default Retailer;