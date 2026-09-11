import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('solicitudes')
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  titulo: string;

  @Column({ length: 500 })
  descripcion: string;

  @Column({ length: 100 })
  cliente: string;

  @Column({ length: 50 })
  categoria: string;

  @Column({ length: 20 })
  prioridad: string;

  @Column({ length: 20, default: 'Pendiente' })
  estado: string;

  @Column()
  fechaSolicitud: Date;
}