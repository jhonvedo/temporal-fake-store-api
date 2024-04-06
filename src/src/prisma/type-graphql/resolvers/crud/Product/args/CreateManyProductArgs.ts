import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCreateManyInput } from "../../../inputs/ProductCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProductArgs {
  @TypeGraphQL.Field(_type => [ProductCreateManyInput], {
    nullable: false
  })
  data!: ProductCreateManyInput[];
}
