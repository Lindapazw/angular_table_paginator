export interface Persona {
  id?: number;
  nombre: string;
  apellido: string;
  correo: string;
  tipoDocumento: string;
  documento: number;
  fechaNacimiento: Date;
}

// Los campos opcionales en tyscrip llevan signo de pregunta
