import { Product } from "./product";

export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    products?: Product[]
}