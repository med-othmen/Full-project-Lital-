import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getProductsFromApi,
  EditProductInApi,
} from "../../Action/ProductActions.js";
import Addproduct from "./../Modals/ModalAddProduct";
import ProductShow from "./../Modals/ModalShowProduct";
import { MDBBtn } from "mdbreact";
import {
  addHistoryInApi,
  getAllHistoryFromApi,
} from "../../Action/historyActions";
import ModalEditProduct from "../Modals/ModalEditProduct";

var newArray = [];
var Types = [];
var Colors = [];

var Brands = [];
var prduct_status = [];
var Mesures = [];
var Location = [];
var Boxs = [];
var Quantity = [];
var d = new Date();

class Productcontainer extends Component {
  state = {
    element: [],
    reference: "",
    type: "",
    collection: "",
    product_status: "",
    brand: "",
    mesures: "",
    color: "",
    location: "",
    box: "",
    quantity: -1,
  };

  componentDidMount() {
    this.props.getAllProducts();
    this.props.getallhistory();
    this.setState({ products: this.props.products });
  }
  close = () => {
    this.setState({ open: !this.state.open });
  };
  distinctDoubleType = () => {
    let ArrayOfTypes = [];
    this.props.products.map((el) => ArrayOfTypes.push(el.type));
    newArray = new Set(ArrayOfTypes);
    Types = [...newArray];
  };
  distinctDoubleColor = () => {
    let ArrayofColors = [];
    this.props.products.map((el) => ArrayofColors.push(el.color));
    newArray = new Set(ArrayofColors);
    Colors = [...newArray];
  };
  distinctDoubleBrand = () => {
    let ArrayofBrand = [];
    this.props.products.map((el) => ArrayofBrand.push(el.brand));
    newArray = new Set(ArrayofBrand);
    Brands = [...newArray];
  };
  distinctDoubleProductStatus = () => {
    let Arrayofproduct_status = [];
    this.props.products.map((el) =>
      Arrayofproduct_status.push(el.product_status)
    );
    newArray = new Set(Arrayofproduct_status);
    prduct_status = [...newArray];
  };
  distinctDoubleMesures = () => {
    let Arrayofmesures = [];
    this.props.products.map((el) => Arrayofmesures.push(el.mesures));
    newArray = new Set(Arrayofmesures);
    Mesures = [...newArray];
  };
  distinctDoubleLocation = () => {
    let ArrayofLocation = [];
    this.props.products.map((el) => ArrayofLocation.push(el.location));
    newArray = new Set(ArrayofLocation);
    Location = [...newArray];
  };
  distinctDoubleBox = () => {
    let ArrayofBoxs = [];

    this.props.products.map((el) => ArrayofBoxs.push(el.box));
    newArray = new Set(ArrayofBoxs);
    Boxs = [...newArray];
  };
  distinctDoubleQuantity = () => {
    let Arrayofquantity = [];

    this.props.products.map((el) => Arrayofquantity.push(el.quantity));
    newArray = new Set(Arrayofquantity);
    Quantity = [...newArray];
  };

  toggleshow = (el) => {
    this.setState({
      Modalopenshow: !this.state.Modalopenshow,
      prodShow: el,
    });
    console.log(el);
  };
  filterByRef = (e) => {
    let input = e.target.value.toUpperCase();
    this.setState({ reference: input });
    console.log(this.state.reference);
  };
  render() {
    this.distinctDoubleType();
    this.distinctDoubleColor();
    this.distinctDoubleBrand();
    this.distinctDoubleProductStatus();
    this.distinctDoubleMesures();
    this.distinctDoubleLocation();
    this.distinctDoubleBox();
    this.distinctDoubleQuantity();

    return (
      <div>
        <div>
          <div className="filterMod">
            <select
              onChange={(e) => this.setState({ type: e.target.value })}
              name="pets"
              id="product-select"
            >
              <option value="">Type</option>
              {Types.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ color: e.target.value })}
              name="pets"
              id="color-select"
            >
              <option value="">Couleur</option>
              {Colors.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ brand: e.target.value })}
              name="pets"
              id="brand-select"
            >
              <option value="">Marque</option>
              {Brands.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ prduct_status: e.target.value })}
              name="pets"
              id="productStatus-select"
            >
              <option value="">Produit_Status</option>
              {prduct_status.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ mesures: e.target.value })}
              name="pets"
              id="Mesure-select"
            >
              <option value="">Mesure</option>
              {Mesures.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ location: e.target.value })}
              name="pets"
              id="Location-select"
            >
              <option value="">Localisation</option>
              {Location.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) => this.setState({ box: e.target.value })}
              name="pets"
              id="box-select"
            >
              <option value="">Embalage</option>
              {Boxs.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <select
              onChange={(e) =>
                this.setState({ quantity: Number(e.target.value) })
              }
              name="pets"
              id="Quantity-select"
            >
              <option value="">Quantité</option>
              {Quantity.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <div>
              <Addproduct />
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="flt d-flex">
          <i class="fas fa-search"></i>
          <input
            placeholder="Filtrer par reference ..."
            onChange={(e) => this.filterByRef(e)}
          />
        </div>
        <hr></hr>
        <div className="fl">
          {this.props.products
            .filter((eltype) =>
              this.state.type === "" ? eltype : eltype.type === this.state.type
            )
            .filter((elcollection) =>
              this.state.collection === ""
                ? elcollection
                : elcollection.collection === this.state.collection
            )
            .filter((elbrand) =>
              this.state.brand === ""
                ? elbrand
                : elbrand.brand === this.state.brand
            )
            .filter((elcollection) =>
              this.state.collection === ""
                ? elcollection
                : elcollection.collection === this.state.collection
            )
            .filter((elbrand) =>
              this.state.brand === ""
                ? elbrand
                : elbrand.brand === this.state.brand
            )
            .filter((elprductS) =>
              this.state.product_status === ""
                ? elprductS
                : elprductS.product_status === this.state.product_status
            )
            .filter((elmesure) =>
              this.state.mesures === ""
                ? elmesure
                : elmesure.mesures === this.state.mesures
            )
            .filter((elcolor) =>
              this.state.color === ""
                ? elcolor
                : elcolor.color === this.state.color
            )
            .filter((ellcoation) =>
              this.state.location === ""
                ? ellcoation
                : ellcoation.location === this.state.location
            )
            .filter((elbox) =>
              this.state.box === "" ? elbox : elbox.box === this.state.box
            )
            .filter((elquantity) =>
              this.state.quantity === -1
                ? elquantity
                : elquantity.quantity === this.state.quantity
            )

            .filter((elreference) =>
              this.state.reference === ""
                ? elreference
                : elreference.reference.includes(this.state.reference)
            )
            .map((prod) => (
              <div className="cardproduct">
                <img
                  className="mb-5"
                  src={prod.picture}
                  width="150px"
                  height="150px"
                />

                <span>
                  <small>Réference-</small>
                  <strong>{prod.reference}</strong>
                </span>
                <span>{prod.name}</span>
                <span>{prod.quantity}-Piéces</span>
                <ProductShow
                  Modalopenshow={this.state.Modalopenshow}
                  toggleshow={this.toggleshow}
                  product={prod}
                />
                <div className="groupbtn">
                  <ModalEditProduct prod={prod} />
                  <MDBBtn
                    className="btnEditProduct"
                    onClick={() => {
                      this.props.Addhistory({
                        action: "delete",
                        date:
                          [d.getMonth() + 1, d.getDate(), d.getFullYear()].join(
                            "/"
                          ) +
                          " " +
                          [d.getHours(), d.getMinutes(), d.getSeconds()].join(
                            ":"
                          ),
                        product_reference: prod.reference,
                        user_id: localStorage.getItem("UserID"),
                      });
                      this.props.EditProduct(
                        {
                          reference: prod.reference,
                          name: prod.name,
                          type: prod.type,
                          collection: prod.collection,
                          color: prod.color,
                          picture: prod.picture,
                          quantity: 0,
                          box: prod.box,
                          location: prod.location,
                          mesures: prod.mesures,
                          product_status: prod.produit_status,
                          brand: prod.brand,
                        },
                        prod.id
                      );
                    }}
                  >
                    Supprimer
                  </MDBBtn>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  history: state.history,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getProductsFromApi()),
  getallhistory: () => dispatch(getAllHistoryFromApi()),
  EditProduct: (el, id) => dispatch(EditProductInApi(el, id)),
  Addhistory: (element) => dispatch(addHistoryInApi(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Productcontainer);
