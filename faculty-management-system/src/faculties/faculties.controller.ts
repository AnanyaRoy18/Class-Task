import {
  Controller,
  Post,
  Body
} from '@nestjs/common';

import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Controller('faculties')
export class FacultiesController {

  constructor(
    private readonly facultiesService: FacultiesService
  ) {}

  @Post('create-faculty')
  createFaculty(
    @Body() createFacultyDto: CreateFacultyDto
  ) {
    return this.facultiesService.createFaculty(
      createFacultyDto
    );
  }

}