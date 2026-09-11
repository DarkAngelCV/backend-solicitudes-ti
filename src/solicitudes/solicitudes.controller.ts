import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { SolicitudesService } from './solicitudes.service.js';
import { Solicitud } from './entities/solicitud.entity/solicitud.entity.js';
import { CreateSolicitudDto } from './dto/create-solicitud.dto.js';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto.js';

@Controller('solicitudes')
export class SolicitudesController {
  constructor(
    private readonly solicitudesService: SolicitudesService,
  ) {}

  @Get()
  async findAll(): Promise<Solicitud[]> {
    return this.solicitudesService.findAll();
  }

  @Get('buscar')
  async buscar(
    @Query('estado') estado?: string,
    @Query('prioridad') prioridad?: string,
    @Query('categoria') categoria?: string,
  ): Promise<Solicitud[]> {
    return this.solicitudesService.buscar(
      estado,
      prioridad,
      categoria,
    );
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Solicitud> {
    return this.solicitudesService.findOne(id);
  }

  @Post()
  async create(
    @Body() createSolicitudDto: CreateSolicitudDto,
  ): Promise<Solicitud> {
    return this.solicitudesService.create(createSolicitudDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSolicitudDto: UpdateSolicitudDto,
  ): Promise<Solicitud> {
    return this.solicitudesService.update(
      id,
      updateSolicitudDto,
    );
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.solicitudesService.remove(id);
  }
}