import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Solicitud } from './entities/solicitud.entity/solicitud.entity.js';
import { CreateSolicitudDto } from './dto/create-solicitud.dto.js';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto.js';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitud)
    private readonly solicitudRepository: Repository<Solicitud>,
  ) {}

  async findAll(): Promise<Solicitud[]> {
    return this.solicitudRepository.find();
  }

  async buscar(
    estado?: string,
    prioridad?: string,
    categoria?: string,
  ): Promise<Solicitud[]> {
    const query = this.solicitudRepository.createQueryBuilder('solicitud');

    if (estado) {
      query.andWhere('solicitud.estado = :estado', { estado });
    }

    if (prioridad) {
      query.andWhere('solicitud.prioridad = :prioridad', { prioridad });
    }

    if (categoria) {
      query.andWhere('solicitud.categoria = :categoria', { categoria });
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Solicitud> {
    const solicitud = await this.solicitudRepository.findOne({
      where: { id },
    });

    if (!solicitud) {
      throw new NotFoundException(
        `Solicitud con ID ${id} no encontrada`,
      );
    }

    return solicitud;
  }

  async create(
    createSolicitudDto: CreateSolicitudDto,
  ): Promise<Solicitud> {
    const fechaActual = new Date();

    if (createSolicitudDto.fechaSolicitud > fechaActual) {
      throw new BadRequestException(
        'La fecha de solicitud no puede ser posterior a la fecha actual',
      );
    }

    const solicitud = this.solicitudRepository.create({
      ...createSolicitudDto,
      estado: 'Pendiente',
    });

    return this.solicitudRepository.save(solicitud);
  }

  async update(
    id: number,
    updateSolicitudDto: UpdateSolicitudDto,
  ): Promise<Solicitud> {
    const solicitud = await this.findOne(id);

    if (
      updateSolicitudDto.fechaSolicitud &&
      updateSolicitudDto.fechaSolicitud > new Date()
    ) {
      throw new BadRequestException(
        'La fecha de solicitud no puede ser posterior a la fecha actual',
      );
    }

    if (
      solicitud.estado === 'Finalizada' &&
      updateSolicitudDto.estado === 'Pendiente'
    ) {
      throw new BadRequestException(
        'Una solicitud Finalizada no puede volver a Pendiente',
      );
    }

    Object.assign(solicitud, updateSolicitudDto);

    return this.solicitudRepository.save(solicitud);
  }

  async remove(id: number): Promise<void> {
    const solicitud = await this.findOne(id);

    if (solicitud.estado !== 'Finalizada') {
      throw new BadRequestException(
        'Solo se pueden eliminar solicitudes con estado Finalizada',
      );
    }

    await this.solicitudRepository.remove(solicitud);
  }
}