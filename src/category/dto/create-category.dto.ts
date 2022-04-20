import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ default: true })
  @IsBoolean({'message':'concho'})
  is_active: boolean;
}
