import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './createNinja.dto';


export class UpdateUserDto extends PartialType(CreateNinjaDto) {}
