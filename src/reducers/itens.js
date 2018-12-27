import { LISTAR_ITENS } from '../actions';

export default function (state = { listaPorTipo: [] }, action) {
  switch (action.type) {
    case LISTAR_ITENS:
      return {
        ...state,
        lista: action.payload.data,
      };
    default:
      return state;
  }
}

