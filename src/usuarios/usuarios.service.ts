import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { generarSiguienteId, Temporal, usuarios } from './Temporal';

@Injectable()
export class UsuariosService {
  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = new Temporal(
      generarSiguienteId(),
      createUsuarioDto.nombre,
      createUsuarioDto.edad,
    );
    usuarios.push(usuario);
    return usuario;
  }

  findAll(): Temporal[] {
    return usuarios;
  }

  findOne(id: number): Temporal {
    const usuario = usuarios.find((usuario) => usuario.id === id);
    if (!usuario) {
      throw new NotFoundException(`No existe un usuario con el ID ${id}`);
    }
    return usuario;
  }

  replace(id: number, createUsuarioDto: CreateUsuarioDto): Temporal {
    const index = usuarios.findIndex((usuario) => usuario.id === id);
    if (index === -1) {
      throw new NotFoundException(`No existe un usuario con el ID ${id}`);
    }

    const usuario = new Temporal(
      id,
      createUsuarioDto.nombre,
      createUsuarioDto.edad,
    );
    usuarios[index] = usuario;
    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto): Temporal {
    const usuario = this.findOne(id);
    if (updateUsuarioDto.nombre !== undefined) {
      usuario.nombre = updateUsuarioDto.nombre;
    }
    if (updateUsuarioDto.edad !== undefined) {
      usuario.edad = updateUsuarioDto.edad;
    }
    return usuario;
  }

  remove(id: number): Temporal {
    const index = usuarios.findIndex((usuario) => usuario.id === id);
    if (index === -1) {
      throw new NotFoundException(`No existe un usuario con el ID ${id}`);
    }
    return usuarios.splice(index, 1)[0];
  }
}
