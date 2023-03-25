import { IsString, MinLength, IsEmpty, IsNotEmpty } from 'class-validator';
export class MarcasDto{
    @IsString()
    @MinLength(5)
    @IsEmpty()
    name: string;

    @IsString()
    @IsEmpty()
    category: string;

    @IsString()
    @MinLength(3)
    @IsEmpty()
    origin_contry: string;

    @IsString()
    @IsNotEmpty()
    observation?: string;
}