import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutProductsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProductsNestedInput";

@TypeGraphQL.InputType("ProductUpdateInput", {})
export class ProductUpdateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  price?: number | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProductsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProductsNestedInput | undefined;
}
