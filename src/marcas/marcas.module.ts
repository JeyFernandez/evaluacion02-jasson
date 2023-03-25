import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marca } from './entities/marcas.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Marca])],
    controllers: [],
    providers:[],
})
export class MarcasModule{}