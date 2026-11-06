import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FacultiesController } from './faculties.controller.js';
import { FacultiesService } from './faculties.service.js';
import { Faculty } from './entities/faculty.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([Faculty])
  ],

  controllers: [
    FacultiesController
  ],

  providers: [
    FacultiesService
  ]
})
export class FacultiesModule {}