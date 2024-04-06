import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProductsInput } from "../inputs/UserCreateNestedOneWithoutProductsInput";

@TypeGraphQL.InputType("ProductCreateInput", {})
export class ProductCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProductsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProductsInput;
}
