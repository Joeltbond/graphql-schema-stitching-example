import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { Product } from "./Product";
import { Category } from "./Category";

export const resolvers: Resolvers = {
  Query,
  Product,
  Category
};
