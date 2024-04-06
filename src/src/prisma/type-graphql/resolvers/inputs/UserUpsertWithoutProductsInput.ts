import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProductsInput } from "../inputs/UserCreateWithoutProductsInput";
import { UserUpdateWithoutProductsInput } from "../inputs/UserUpdateWithoutProductsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutProductsInput", {})
export class UserUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProductsInput, {
    nullable: false
  })
  create!: UserCreateWithoutProductsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
