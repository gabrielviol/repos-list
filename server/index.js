const { ApolloServer, gql } = require('apollo-server');
const { default: axios } = require('axios');

const typeDefs = gql`
    type repositories {
        id: String!,
        name: String,
        description: String,
        pushed_at: String,
        html_url: String,
        fork: Int,
        license: License,
        archived: Boolean
    }

    type License{
        key: String,
        name: String,
        node_id: String,
        spdx_id: String,
        url: String
    }

	type Query {
		repos: [repositories]
	}
`;

const resolvers = {
    Query: {
        async repos() {
            const response = await axios.get(`https://api.github.com/users/gabrielviol/repos`)
                .then(response => response.data)
            return response
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`API GraphQL running ${url}`));