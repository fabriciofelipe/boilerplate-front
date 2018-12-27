import axios from 'axios';

export const LISTAR_ITENS = 'LISTAR_ITENS';

export const listarItens = () => (dispatch) => {
  axios
    .get(
      'http://localhost:8080/products',
      {},
      {
        headers: {},
      },
    )
    .then(response =>
      dispatch({
        type: LISTAR_ITENS,
        payload: response,
      }),
    );
};

