import { ApiProperty } from '@nestjs/swagger';
export class CreateDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
}
