import React, { Component } from "react";
import { MDBModal } from "mdbreact";
import { connect } from "react-redux";
let x = [];
class ModalShowProduct extends Component {
  state = {
    Modalopen: false,
    product: [],
    id: this.props.product.id,
    reference: this.props.product.reference,
    name: this.props.product.name,
    type: this.props.product.type,
    collection: this.props.product.collection,
    color: this.props.product.color,
    picture: this.props.product.picture,
    quantity: this.props.product.quantity,
    box: this.props.product.box,
    location: this.props.product.location,
    mesures: this.props.product.mesures,
    product_status: this.props.product.produit_status,
    brand: this.props.product.brand,
  };
  toggle = () => {
    this.setState({
      Modalopen: !this.state.Modalopen,
    });
  };
  componentDidMount() {
    /*this.setState({ product: this.props.product })
    console.log(this.props.product)
    x = Object.values(this.props.product)*/
  }

  render() {
    // console.log(this.props.product);
    const { product } = this.state;
    return (
      <div>
        <a onClick={() => this.toggle()}>Plus des informations</a>
        <MDBModal
          isOpen={this.state.Modalopen}
          toggle={() => this.toggle()}
          fullHeight
          position="top"
        >
          <h1>Detail d'article</h1>
          <img
            className="mb-5"
            width="150px"
            height="150px"
            disabled
            src={this.state.picture}
          />

          <span>{this.state.reference}</span>
          <span>{this.state.name}</span>
          <span>{this.state.quantity}</span>
          <span>{this.state.type}</span>
          <span>{this.state.brand}</span>
          <span>{this.state.collection}</span>
          <span>{this.state.brand} </span>
          <span>{this.state.prduct_status}</span>
          <span>{this.state.mesures}</span>
          <span>{this.state.color}</span>
          <span>{this.state.location}</span>
          <span>{this.state.box}</span>
        </MDBModal>
      </div>
    );
  }
}

export default connect(null, null)(ModalShowProduct);
