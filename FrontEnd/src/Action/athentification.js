import Axios from "axios";

export function Athentificate(userdata) {
  return (dispatch) =>
    Axios.post("http://localhost:2000/authentification", userdata).then(
      (res) => {
        console.log("les données passer");
      }
    );
}
