import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/createNinja.dto';

@Controller('ninjas')
export class NinjasController {

  @Get('all')
  findAll() {
    return [{ name: 'Naruto' }, { name: 'Sasuke' }, { name: 'Sakura' }];
  }
  @Get('type')
  getType(@Query('type') type:string){
    return type 
  }

  @Get(':id')
  findbyId(@Param('id') id : string){
    return 'this is my ' + id
  }

  @Post()
  createNinja(@Body() createNinjaDto : CreateNinjaDto){
      return {
        name : createNinjaDto.name
      }
  }
  

  



}
