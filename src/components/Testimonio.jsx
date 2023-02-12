//crear componente
import React from "react"; //se puede quitar ya que no se usa desde react 17 en adelante
// import "../stylesheets/Reset.css";
import "../stylesheets/Testimonio.css";

//componente funcional
//!export nombradas: export function Testimonio
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      {/* <img
        className="imagen-testimonio"
        src={require("../img/testimonio-Emma.png")}
        alt="Foto de Emma"
      /> */}
      <img
        className="imagen-testimonio"
        src={require(`../img/testimonio-${props.img}.png`)}
        // alt="Foto de Emma"
        alt={props.descripcion}
      />
      <div className="contendor-texto-testimonio">
        {/* <p className="nombre-testimonio">Emma Bostian in Sweden</p> */}
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> in {props.pais}
        </p>
        {/* <p className="cargo-testimonio">Software Engineer at Spotify</p> */}
        <p className="cargo-testimonio">
          {props.cargo} at <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
          {props.testimonio}
          <strong>{props.text}</strong>
          {/* "I've always struggled with learning JavaScript. I've taken many
          courses but freeCodeCamp's course was the one which stuck. Studying
          JavaScript as well as data structures and algorithms on freeCodeCamp
          gave me the skills and confidence I needed to land my dream job as a
          software engineer at Spotify." */}
        </p>
      </div>
    </div>
  );
}

//siempre se debe exportar un archivo o sino da errores
//Exportaciones por defecto: permite decir que ese sera el unico componente o elemento que se va a exportar de ese archivo
export default Testimonio;
