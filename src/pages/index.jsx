import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  chamaaction() {
    this.listaaction();
  }

  render() {
    return (
      <div>
        {this.itens.lista}
        <input type="text" />
      </div>
    );
  }
}

function mapStateToProps({ itens }) {
  return { itens };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    listarItens,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
