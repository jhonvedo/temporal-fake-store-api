import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyUserInputEnvelope } from "../inputs/ProductCreateManyUserInputEnvelope";
import { ProductCreateOrConnectWithoutUserInput } from "../inputs/ProductCreateOrConnectWithoutUserInput";
import { ProductCreateWithoutUserInput } from "../inputs/ProductCreateWithoutUserInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutUserInput", {})
export class ProductCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProductCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
