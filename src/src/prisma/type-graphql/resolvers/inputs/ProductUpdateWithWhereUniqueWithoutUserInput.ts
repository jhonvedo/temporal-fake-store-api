import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutUserInput } from "../inputs/ProductUpdateWithoutUserInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutUserInput", {})
export class ProductUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutUserInput;
}
