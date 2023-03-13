import { createStore } from "redux";
import { tokenReducer } from './tokens/TokensReducer';

export default const store = createStore(tokenReducer);
