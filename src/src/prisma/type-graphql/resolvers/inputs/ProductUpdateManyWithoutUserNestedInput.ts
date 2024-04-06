import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyUserInputEnvelope } from "../inputs/ProductCreateManyUserInputEnvelope";
import { ProductCreateOrConnectWithoutUserInput } from "../inputs/ProductCreateOrConnectWithoutUserInput";
import { ProductCreateWithoutUserInput } from "../inputs/ProductCreateWithoutUserInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutUserInput } from "../inputs/ProductUpdateManyWithWhereWithoutUserInput";
import { ProductUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutUserInput";
import { ProductUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutUserInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutUserNestedInput", {})
export class ProductUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProductCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
