import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/authService";
import ImageInput from "components/image_input/image_input";
import ImageUploader from "service/imageUploader";
import CardRepository from "service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const ImageFileInput = props => {
  return <ImageInput {...props} imageUploader={imageUploader} />;
};
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} ImageFileInput={ImageFileInput} cardRepository={cardRepository}/>
  </React.StrictMode>,
  document.getElementById("root")
);


