import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, PaginateQuery } from 'nestjs-paginate';
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  // Don't forget to import the UsersModule into the root AppModule.
  constructor(
    @InjectRepository(Category)
    private categroryRepository: Repository<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categroryRepository.save(createCategoryDto);
  }

  paginate(query: PaginateQuery): any {
    return from(
      paginate(query, this.categroryRepository, {
        sortableColumns: ['id'],
        searchableColumns: ['name'],
        defaultSortBy: [['id', 'DESC']],
        filterableColumns: {},
      }),
    );
  }

  findOne(id: number) {
    return from(this.categroryRepository.findOneOrFail(id));
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return from(this.categroryRepository.update(id, updateCategoryDto));
  }

  remove(id: number) {
    return from(this.categroryRepository.softDelete(id));
  }
}
