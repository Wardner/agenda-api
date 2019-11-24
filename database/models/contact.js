class Contact {
  constructor({ 
    nombre,
    apellido,
    telefono,
    correo,
    fecha_nacimiento
  }) {
    this.nombre = nombre;
    this.apellido = apellido,
    this.telefono = telefono,
    this.correo = correo,
    this.fecha_nacimiento = fecha_nacimiento
  }
}

module.exports = Contact;
