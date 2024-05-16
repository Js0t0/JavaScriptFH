import { v4 as uuid } from 'uuid';
//Con una dependencia UUID creamos un ID aleartorio para cada ID del constructor
export class Todo {
  /**
   *
   * @param {String} description
   */
  constructor(description) {
    this.id = crypto.randomUUID();
    //Con crypto.randomUUID() creamos un ID Aleartorio de igual manera pero es Nativo , sin dependencia
    //Como dato randomUUID está basado en uuid
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
