import { PartialType } from '@nestjs/mapped-types';
import { CreatePassTypeDto } from './create-pass-type.dto';

export class UpdatePassTypeDto extends PartialType(CreatePassTypeDto) {}
