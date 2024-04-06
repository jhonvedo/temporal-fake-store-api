import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountProductsArgs } from "./args/UserCountProductsArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  products!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "products",
    nullable: false
  })
  getProducts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountProductsArgs): number {
    return root.products;
  }
}
