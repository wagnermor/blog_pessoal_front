import Tema from './Tema';
import Usuario from './User';

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema?: Tema | null; 
  usuario?: Usuario | null
}
