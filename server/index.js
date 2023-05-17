const { ApolloServer, gql } = require('apollo-server');
const { default: axios } = require('axios');

const typeDefs = gql`
    type repos {
        id: String,
        name: String,
        description: String
    }
	type Query {
		gitHubRepository: [repos]
	}
`;

const resolvers = {
    Query: {
        async gitHubRepository() {
            const response = await axios.get(`https://api.github.com/users/gabrielviol/repos`)
                .then(response => response.data)
            return response
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`API GraphQL running ${url}`));