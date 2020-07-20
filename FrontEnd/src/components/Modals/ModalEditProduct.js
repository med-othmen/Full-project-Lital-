import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { connect } from "react-redux";
import { addHistoryInApi } from "../../Action/historyActions";
import { EditProductInApi } from "../../Action/ProductActions";
var d = new Date();

class ModalEditProduct extends Component {
  state = {
    id: this.props.prod.id,
    reference: this.props.prod.reference,
    name: this.props.prod.name,
    type: this.props.prod.type,
    collection: this.props.prod.collection,
    color: this.props.prod.color,
    picture: this.props.prod.picture,
    quantity: this.props.prod.quantity,
    box: this.props.prod.box,
    location: this.props.prod.location,
    mesures: this.props.prod.mesures,
    product_status: this.props.prod.produit_status,
    brand: this.props.prod.brand,
    comment: this.props.prod.comment,
    Modalopen: false,
  };
  toggle = () => {
    this.setState({
      Modalopen: !this.state.Modalopen,
    });
  };
  render() {
    return (
      <div>
        <MDBBtn className="btnEditProduct" onClick={() => this.toggle()}>
          Modifier
        </MDBBtn>
        <MDBModal
          isOpen={this.state.Modalopen}
          toggle={() => this.toggle()}
          fullHeight
          position="top"
        >
          <MDBModalHeader onClick={() => this.toggle()}>
            Ajouter nouveaux Article
          </MDBModalHeader>
          <MDBModalBody>
            <div>
              <div>
                <MDBRow>
                  <MDBCol md="2">
                    <MDBInput
                      name="fname"
                      type="reference"
                      id="materialFormRegisterNameEx"
                      valueDefault={this.state.reference}
                      onChange={(e) =>
                        this.setState({ reference: e.target.value })
                      }
                      outline
                      required
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="fname"
                      type="reference"
                      id="materialFormRegisterNameEx"
                      label="Nom"
                      onChange={(e) => this.setState({ name: e.target.value })}
                      outline
                      required
                      valueDefault={this.state.name}
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="fname"
                      type="reference"
                      id="materialFormRegisterNameEx"
                      label="Type"
                      onChange={(e) => this.setState({ type: e.target.value })}
                      outline
                      required
                      valueDefault={this.state.type}
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="lname"
                      type="text"
                      id="materialFormRegisterEmailEx2"
                      onChange={(e) =>
                        this.setState({ collection: e.target.value })
                      }
                      label="collection"
                      outline
                      required
                      valueDefault={this.state.collection}
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="email"
                      id="materialFormRegisterConfirmEx3"
                      name="email"
                      onChange={(e) => this.setState({ brand: e.target.value })}
                      label="Marque"
                      outline
                      valueDefault={this.state.brand}
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="search"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      label="Coleur"
                      onChange={(e) => this.setState({ color: e.target.value })}
                      outline
                      required
                      valueDefault={this.state.color}
                    ></MDBInput>
                  </MDBCol>{" "}
                </MDBRow>
                <MDBRow>
                  <MDBCol md="2">
                    <MDBInput
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="user_name"
                      label="Produit status"
                      onChange={(e) =>
                        this.setState({ product_status: e.target.value })
                      }
                      outline
                      required
                      valueDefault={this.state.product_status}
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      onChange={(e) =>
                        this.setState({ mesures: e.target.value })
                      }
                      label="Mésures"
                      outline
                      required
                      valueDefault={this.state.mesures}
                    ></MDBInput>
                  </MDBCol>{" "}
                  <MDBCol md="2">
                    <MDBInput
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      label="Localisation"
                      onChange={(e) =>
                        this.setState({ location: e.target.value })
                      }
                      outline
                      required
                      valueDefault={this.state.location}
                    ></MDBInput>
                  </MDBCol>{" "}
                  <MDBCol md="2">
                    <MDBInput
                      type="text"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      onChange={(e) => this.setState({ box: e.target.value })}
                      label="Carton"
                      outline
                      required
                      valueDefault={this.state.box}
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="number"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      onChange={(e) =>
                        this.setState({ quantity: e.target.value })
                      }
                      label="Quantité"
                      outline
                      required
                      valueDefault={this.state.quantity}
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      type="search"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      onChange={(e) =>
                        this.setState({ picture: e.target.value })
                      }
                      outline
                      valueDefault={this.state.picture}
                      required
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput
                      type="search"
                      id="materialFormRegisterPasswordEx4"
                      name="password"
                      onChange={(e) =>
                        this.setState({ comment: e.target.value })
                      }
                      outline
                      valueDefault={this.state.comment}
                      required
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={() => this.toggle()}>
              Close
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={() => {
                this.props.Addhistory({
                  action: "edit",
                  date:
                    [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
                    " " +
                    [d.getHours(), d.getMinutes(), d.getSeconds()].join(":"),
                  product_reference: this.state.reference,
                  user_id: localStorage.getItem("UserID"),
                });
                this.props.EditProduct(
                  {
                    reference: this.state.reference,
                    name: this.state.name,
                    type: this.state.type,
                    collection: this.state.collection,
                    color: this.state.color,
                    picture: this.state.picture,
                    quantity: this.state.quantity,
                    box: this.state.box,
                    location: this.state.location,
                    mesures: this.state.mesures,
                    product_status: this.state.produit_status,
                    brand: this.state.brand,
                  },
                  this.state.id
                );
              }}
            >
              Modifier produit
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  Addhistory: (element) => dispatch(addHistoryInApi(element)),
  EditProduct: (el, id) => dispatch(EditProductInApi(el, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditProduct);
