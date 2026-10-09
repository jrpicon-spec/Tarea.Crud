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

//N.º	Consulta o prompt utilizado	Objetivo de la consulta	Información o palabras clave obtenidas	¿Cómo llevó a la siguiente consulta?
//1	Crear un backend básico de usuarios en NestJS.	Preparar la estructura inicial del proyecto para gestionar usuarios.	NestJS, UsuariosController, UsuariosService, módulos y rutas HTTP.	Se necesitaba una forma de almacenar usuarios sin configurar una base de datos.
//2	Crear un archivo temporal.ts para almacenar usuarios en un arreglo.	Simular una base de datos temporal durante el desarrollo.	temporal.ts, clase Temporal, arreglo usuarios[], almacenamiento en memoria.	Una vez creado el almacenamiento, se debía conectar con el servicio.
//3	Conectar el arreglo temporal con el servicio y realizar las operaciones CRUD.	Implementar las operaciones básicas de gestión de usuarios.	UsuariosService, POST, GET, GET /usuarios/:id, PATCH y DELETE.	Después de implementar las rutas, se procedió a probar su funcionamiento.
//4	Corregir el error al enviar una solicitud POST que producía Cannot read properties of undefined (reading 'nombre').	Solucionar el problema al recibir los datos del usuario desde la solicitud HTTP.	@Body(), cuerpo de la solicitud, DTO y datos JSON.	Al corregirse la recepción del cuerpo, se pudo continuar con las pruebas de creación y consulta.
//5	Probar las rutas del backend y verificar que los usuarios se guardaran y consultaran correctamente.	Comprobar el funcionamiento de las operaciones implementadas.	Postman, POST /usuarios, GET /usuarios, respuesta JSON y arreglo en memoria.	Con las operaciones básicas funcionando, se planteó ampliar los métodos HTTP disponibles.
//6	Incorporar el método PUT al backend de usuarios.	Añadir una operación para reemplazar los datos de un usuario existente.	PUT, actualización por identificador, rutas y controlador.	Se continuó con otros métodos HTTP para ampliar el comportamiento de la API.
//7	Incorporar el método HEAD.	Consultar los encabezados de una respuesta sin recibir contenido en el cuerpo.	HEAD /usuarios, código HTTP 200, encabezados HTTP y cuerpo vacío.	Se planteó cómo proporcionar información dinámica del estado del backend mediante encabezados.
//8	Incorporar el método OPTIONS.	Informar qué métodos HTTP admite la ruta de usuarios.	OPTIONS /usuarios, encabezado Allow, GET, POST, PUT, PATCH, DELETE, HEAD y OPTIONS.	Fue necesario distinguir los métodos permitidos de la configuración de solicitudes entre distintos orígenes.
//9	Prompt para Codex: mejorar las rutas HEAD y OPTIONS existentes.	Solicitar una implementación adaptada al proyecto actual, sin duplicar lógica ni eliminar funcionalidades.	X-Total-Usuarios, X-API-Estado, Allow, UsuariosService, main.ts, CORS y compilación sin errores.	El prompt estableció los requisitos para implementar y verificar los dos métodos en el código existente.
//10	Explicar cómo probar HEAD y OPTIONS en Postman.	Verificar las respuestas y los encabezados de ambos métodos.	HEAD http://localhost:3000/usuarios, OPTIONS http://localhost:3000/usuarios, pestaña Headers, Allow y ausencia de cuerpo.	La verificación permite comprobar que los métodos respondan según lo esperado.