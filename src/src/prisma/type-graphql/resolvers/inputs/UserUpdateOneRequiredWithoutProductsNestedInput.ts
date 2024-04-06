import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProductsInput } from "../inputs/UserCreateOrConnectWithoutProductsInput";
import { UserCreateWithoutProductsInput } from "../inputs/UserCreateWithoutProductsInput";
import { UserUpdateToOneWithWhereWithoutProductsInput } from "../inputs/UserUpdateToOneWithWhereWithoutProductsInput";
import { UserUpsertWithoutProductsInput } from "../inputs/UserUpsertWithoutProductsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProductsNestedInput", {})
export class UserUpdateOneRequiredWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProductsInput, {
    nullable: true
  })
  create?: UserCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProductsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutProductsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutProductsInput | undefined;
}
