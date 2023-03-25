import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type:'text'})
    name: string;

    @Column({type:'text'})
    descriptions: string;
    
    @Column({type:'numeric'})
    price: number;

    @Column({type:'numeric'})
    stock: number;
}