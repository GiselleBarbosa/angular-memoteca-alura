export class NotesModel {
  id: number;
  conteudo: string;
  autoria: string;
  modelo: string;

  constructor(id: number, conteudo: string, autoria: string, modelo: string) {
    this.id = id;
    this.conteudo = conteudo;
    this.autoria = autoria;
    this.modelo = modelo;
  }
}
