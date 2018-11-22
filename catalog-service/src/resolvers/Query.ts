import { QueryResolvers } from "../generated/graphqlgen";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  allProducts: (parent, args, ctx) => {
    return ctx.db.products()
  },
  allCategories: (parent, args, ctx) => {
    return ctx.db.categories()
  }
};
