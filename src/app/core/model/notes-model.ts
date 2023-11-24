export class NotesModel {
  conteudo: string;
  autoria: string;
  modelo: string;

  constructor(conteudo: string, autoria: string, modelo: string) {
    this.conteudo = conteudo;
    this.autoria = autoria;
    this.modelo = modelo;
  }
}
