import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyUserInput } from "../inputs/ProductCreateManyUserInput";

@TypeGraphQL.InputType("ProductCreateManyUserInputEnvelope", {})
export class ProductCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyUserInput], {
    nullable: false
  })
  data!: ProductCreateManyUserInput[];
}
