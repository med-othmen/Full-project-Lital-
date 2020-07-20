import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllHistoryFromApi } from "../../Action/historyActions";
import { getProductsFromApi } from "../../Action/ProductActions";

import { getUserFromApi } from "../../Action/userActions";
var newArray = [];
var Users = [];
class HistoryContainer extends Component {
  componentDidMount() {
    this.props.getAllHistory();
    this.props.getallproducts();
    this.props.getAllUsers();
    this.distinctDoubleUserNames();
  }
  state = {
    action: "",
    UserName: "",
  };
  distinctDoubleUserNames = () => {
    let ArrayOfUsernames = [];
    this.props.user.map((el) =>
      ArrayOfUsernames.push(el.first_name + " " + el.last_name)
    );
    newArray = new Set(ArrayOfUsernames);
    Users = [...newArray];
    console.log(Users);
  };
  render() {
    return (
      <div>
        <select
          className="mt-3 mb-3 ml-3"
          name="pets"
          id="action-select"
          onChange={(e) => this.setState({ action: e.target.value })}
        >
          <option value="">Action</option>
          <option value="Add">Ajout</option>
          <option value="Delete">Suppression</option>
          <option value="Edit">Modification</option>
        </select>
        <select
          name="pets"
          id="UserName-select"
          onChange={(e) => this.setState({ UserName: e.target.value })}
        >
          <option value="">Utilisateur</option>

          {Users.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>

        <table class="table">
          <thead className="headOfTableMod">
            <tr>
              <th scope="col">Nom utilisateur</th>
              <th scope="col">Réference de product</th>
              <th scope="COL">Action </th>
              <th scope="COL">Date </th>
            </tr>
          </thead>
          <tbody>
            {this.props.history
              .filter((action) =>
                this.state.action === ""
                  ? action
                  : action.action === this.state.action
              )
              .filter((username) =>
                this.state.UserName === ""
                  ? username
                  : username.UserName === this.state.UserName
              )
              .map((el, i) => (
                <tr>
                  <td>
                    <i class=" fas fa-user" />
                    {this.props.user
                      .filter((elm) => elm.id === el.user_id)
                      .map((mp) => mp.username)}
                  </td>
                  <td>{el.product_reference}</td>
                  <td>
                    {el.action === "add"
                      ? "Ajout"
                      : el.action === "delete"
                      ? "Suppression"
                      : "Modification"}
                  </td>
                  <td>{el.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.history,
  products: state.products,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllHistory: () => dispatch(getAllHistoryFromApi()),
  getallproducts: () => dispatch(getProductsFromApi()),
  getAllUsers: () => dispatch(getUserFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
