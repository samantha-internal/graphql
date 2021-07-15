# Whitehead GraphQL

GraphQL schema and common queries for whitehead AI.

## Instructions for building package

- Edit files in `common/` directory
- Make sure to set env vars: `export HASURA_ADMIN_SECRET=XXX`
- Run `npm run build`

## Instructions for publishing package

- If build successful, **before committing results**, run `npm run version bump`.
- `npm publish --access public`

git@github.com:whitehead-ai/graphql.git
