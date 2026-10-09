import {
  Body,
  Controller,
  Delete,
  Get,
  Head,
  Header,
  HttpCode,
  Options,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Options()
  @HttpCode(204)
  @Header('Allow', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS')
  options(): void {}

  @Options(':id')
  @HttpCode(204)
  @Header('Allow', 'GET, HEAD, PUT, PATCH, DELETE, OPTIONS')
  optionsOne(): void {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Head()
  @HttpCode(200)
  headAll(@Res({ passthrough: true }) response: Response): void {
    response.setHeader(
      'X-Total-Usuarios',
      String(this.usuariosService.findAll().length),
    );
    response.setHeader('X-API-Estado', 'Funcionando');
  }

  @Head(':id')
  headOne(@Param('id', ParseIntPipe) id: number): void {
    this.usuariosService.findOne(id);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(id);
  }

  @Put(':id')
  replace(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUsuarioDto: CreateUsuarioDto,
  ) {
    return this.usuariosService.replace(id, createUsuarioDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(id);
  }
}
