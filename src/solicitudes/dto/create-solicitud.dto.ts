import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSolicitudDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(15)
  @MaxLength(500)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  cliente: string;

  @IsString()
  @IsNotEmpty()
  @IsIn([
    'Hardware',
    'Software',
    'Redes',
    'Seguridad',
    'Soporte Usuario',
  ])
  categoria: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Baja', 'Media', 'Alta', 'Crítica'])
  prioridad: string;

  @Type(() => Date)
  @IsDate()
  fechaSolicitud: Date;
}