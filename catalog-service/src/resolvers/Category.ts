import { CategoryResolvers } from '../generated/graphqlgen'

export const Category: CategoryResolvers.Type = {
  ...CategoryResolvers.defaultResolvers,

  products: (parent, args, ctx) => {
    return ctx.db.category({ id: parent.id }).products()
  }
}
