import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { CreateSolicitudDto } from './create-solicitud.dto.js';

export class UpdateSolicitudDto extends PartialType(CreateSolicitudDto) {
  @IsOptional()
  @IsString()
  @IsIn(['Pendiente', 'En Proceso', 'Finalizada'])
  estado?: string;
}