import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}
  
  async create(userId: number, createTaskDto: CreateTaskDto) {
    const taskData = {
      ...createTaskDto,
      userId: userId,
    }

    const task = await this.prisma.task.create({
      data: taskData
    });
    return task;
  }

  findAll(id: number) {
    return this.prisma.task.findMany({ where: { userId: id, }});
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async update(userId: number, id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.prisma.task.findUnique({ where: { id: id }});

    if (!task || task.userId != userId) {
      throw new ForbiddenException(
        'Access to the resource denied',
      );
    }

    return this.prisma.task.update({
      where: {
        id: id,
      },
      data: {
        ...updateTaskDto,
      }
    });
  }

  async remove(userId: number, id: number) {
    const task = await this.prisma.task.findUnique({
      where: {
        id: id,
      }
    });

    if (!task || task.userId != userId) {
      throw new ForbiddenException(
        'Access to the resource denied',
      );
    }

    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
