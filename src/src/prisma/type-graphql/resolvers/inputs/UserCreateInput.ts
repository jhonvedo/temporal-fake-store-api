import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutUserInput } from "../inputs/ProductCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateInput", {})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  products?: ProductCreateNestedManyWithoutUserInput | undefined;
}
