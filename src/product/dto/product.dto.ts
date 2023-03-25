import { IsEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class ProductDto{
    @IsString()
    @IsEmpty()
    @MinLength(10)
    name: string;

    @IsString()
    @IsEmpty()
    @MinLength(5)
    descriptions: string;

    @IsNumber()
    @IsEmpty()
    price:number;

    @IsNumber()
    stock:number;

}