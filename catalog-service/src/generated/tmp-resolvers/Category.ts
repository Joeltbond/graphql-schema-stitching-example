// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { CategoryResolvers } from "../graphqlgen";

export const Category: CategoryResolvers.Type = {
  ...CategoryResolvers.defaultResolvers,

  products: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
