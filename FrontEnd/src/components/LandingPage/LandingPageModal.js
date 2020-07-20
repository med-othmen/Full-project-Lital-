import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, CardImg } from "reactstrap";
import { getUserFromApi } from "./../../Action/userActions";
import { addSessionInApi } from "./../../Action/SessionActions";
import { Athentificate } from "./../../Action/athentification";
import Equipe from "./equipe.png";

class ModalSignin extends React.Component {
  state = {
    modal: false,
    username: "",
    password: "",
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  componentDidMount() {
    this.props.getAllUsers();
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signin(this.state);
  };
  render() {
    return (
      <div>
        <Button
          color="danger"
          className="connecterModalBtn"
          onClick={this.toggle}
        >
          Connecter
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          contentClassName="custom-modal-style"
        >
          <ModalBody>
            <div className="img-inputs">
              <div className="img-modal">
                <CardImg
                  src={Equipe}
                  alt="image de l'équipe Lital"
                  className="image-equipe"
                />
              </div>
              <form className="input-modal" onSubmit={this.handleSubmit}>
                <p className="p-modal">Entrez votre informations</p>
                <input
                  placeholder="entrez votre Nom"
                  className="input-modal-nom"
                  name="username"
                  type="text"
                  required
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <input
                  placeholder="Entrez votre Mot de passe"
                  className="input-modal-MDP"
                  type="password"
                  name="password"
                  required
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <button
                  onClick={() =>
                    this.props.signin({
                      username: this.state.username,
                      password: this.state.password,
                    })
                  }
                  className="btn-inside-modal"
                >
                  Connecter
                </button>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUserFromApi()),
  AddSession: (session) => dispatch(addSessionInApi(session)),
  signin: (userInfo) => dispatch(Athentificate(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignin);

/*
 <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <input
              placeholder="Pseudo"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <input
              placeholder="Mot de passe"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button onClick={() => this.Signin(this.state)}>Connecter</button>
          </ModalBody>
        </Modal>
        
        
        
        
          Signin(element) {
    const user = this.props.users.filter(
      (el) =>
        el.username === element.username && el.password === element.password
    );
    if (user.length !== 0 && user[0].post === "moderateur") {
      window.location.pathname = "/product";
      this.props.AddSession({
        userID: user[0].id,
        post: user[0].post,
      });
      localStorage.setItem(
        "UserName",
        user[0].first_name + " " + user[0].last_name
      );
      localStorage.setItem("UserID", user[0].id);
      localStorage.setItem("Post", user[0].post);
    } else if (user.length !== 0 && user[0].post === "admin") {
      window.location.pathname = "/product";
      this.props.AddSession({
        userID: user[0].id,
        post: user[0].post,
      });
      localStorage.setItem(
        "UserName",
        user[0].first_name + " " + user[0].last_name
      );
      localStorage.setItem("UserID", user[0].id);
      localStorage.setItem("Post", user[0].post);
    } else alert("nexiste pas ");
  }
  
  */
