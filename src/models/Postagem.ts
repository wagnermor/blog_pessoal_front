import Tema from './Tema';

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  date: string;
  tema?: Tema | null; 
}