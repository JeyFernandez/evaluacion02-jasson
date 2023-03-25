import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marca{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type:'text'})
    name: string;

    @Column({type:'text'})
    category: string;
    
    @Column({type:'text'})
    origin_contry: string;;

    @Column({type:'text'})
    observations: string;
}