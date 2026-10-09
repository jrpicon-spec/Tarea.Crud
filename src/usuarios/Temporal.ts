export class Temporal {
  constructor(
    public id: number,
    public nombre: string,
    public edad: number,
  ) {}
}

export const usuarios: Temporal[] = [];

let ultimoId = 0;

export function generarSiguienteId(): number {
  const mayorIdExistente = usuarios.reduce(
    (mayor, usuario) => Math.max(mayor, usuario.id),
    0,
  );
  ultimoId = Math.max(ultimoId, mayorIdExistente) + 1;
  return ultimoId;
}
