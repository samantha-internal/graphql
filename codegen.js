const pkg = require("./package.json");
const { WHITEHEAD_GRAPHQL_ENDPOINT } = process.env;
const endpoint = WHITEHEAD_GRAPHQL_ENDPOINT || pkg.graphqlEndpoint;
console.log(endpoint);

module.exports = {
  overwrite: true,
  schema: [
    {
      [endpoint]: {
        headers: {
          "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET || "",
        },
      },
    },
  ],
  generates: {
    "./schema.json": {
      plugins: ["introspection"],
    },
  },
};
