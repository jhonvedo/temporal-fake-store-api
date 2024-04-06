import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutUserInput } from "../inputs/ProductCreateWithoutUserInput";
import { ProductUpdateWithoutUserInput } from "../inputs/ProductUpdateWithoutUserInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutUserInput", {})
export class ProductUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProductCreateWithoutUserInput;
}
