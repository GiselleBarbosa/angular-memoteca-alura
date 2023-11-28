export class PreviewNotesModel {
  titulo: string;
  conteudo: string;
  autoria: string;
  modelo: string;
  cor_aspas: string;

  constructor(
    titulo: string,
    conteudo: string,
    autoria: string,
    modelo: string,
    cor_aspas: string
  ) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.autoria = autoria;
    this.modelo = modelo;
    this.cor_aspas = cor_aspas;
  }
}
