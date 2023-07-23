import { Controller, Get, Query, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  // @Get()
  // async findAll() {
  //   return this.dataService.findAll();
  // }

  @Get('paginate')
  async paginate(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.dataService.paginate(page, limit);
  }

  @Get('search')
  async search(@Query('q') keyword: string) {
    return this.dataService.search(keyword);
    }
    
  @Get('searchByColumn')
  async searchData(@Query('column') column: string, @Query('value') value: string) {
    return this.dataService.searchByColumn(column, value);
  } 
}
