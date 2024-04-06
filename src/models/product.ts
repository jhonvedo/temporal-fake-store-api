import { User } from "./user";

export interface Product {
    id?: number;
    name: string;
    price: number;
    user?: User
}