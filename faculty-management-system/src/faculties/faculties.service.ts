import {
  Injectable,
  ConflictException
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {

  constructor(
    @InjectRepository(Faculty)
    private facultyRepository: Repository<Faculty>
  ) {}

  async createFaculty(createFacultyDto: CreateFacultyDto) {

    const faculty = this.facultyRepository.create(
      createFacultyDto
    );

    try {

      const savedFaculty =
        await this.facultyRepository.save(faculty);

      return {
        message: 'Faculty created successfully',
        data: savedFaculty
      };

    } catch (error: any) {

      if (error.code === '23505') {
        throw new ConflictException(
          'Faculty with this ID already exists'
        );
      }

      throw error;
    }
  }
}