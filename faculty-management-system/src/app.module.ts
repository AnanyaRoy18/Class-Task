import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FacultiesModule } from './faculties/faculties.module.js';
import { Faculty } from './faculties/entities/faculty.entity.js';

@Module({
  imports: [

    TypeOrmModule.forRoot({

      type: 'postgres',

      host: 'localhost',

      port: 5432,

      username: 'postgres',

      password: 'Data@anu15',

      database: 'faculty_management_db',

      entities: [Faculty],

      synchronize: true

    }),

    FacultiesModule

  ]
})
export class AppModule {}