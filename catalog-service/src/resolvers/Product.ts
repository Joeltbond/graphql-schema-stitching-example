import { ProductResolvers } from "../generated/graphqlgen";

export const Product: ProductResolvers.Type = {
  ...ProductResolvers.defaultResolvers,

  category: (parent, args, ctx) => {
    return ctx.db.product({id: parent.id}).category()
  }
  
};
