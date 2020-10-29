import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  headers: {
    authorization: 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si'
  },
  fetch: fetch
});

contents = client.query({
  query: gql`
    query allStations {
      stations(_size: 10) {
        data {
          _id
          name
          _ts
        }
      }
    }
  `
});

export function get(req, res, next) {
  res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
