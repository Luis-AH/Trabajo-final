const Navigation = () => {
  return (
    <div>
      <header id="mainheader">
        <img src="images/logo.png" height="100" alt="logo" />
      </header>
      <nav>
        <ul>
          <li>
            <a href="index.html">Inicio</a>
          </li>
          <li>
            <a href="Productos.html">Productos</a>
          </li>
          <li>
            <a href="Acerca-de.html">Acerca de</a>
          </li>
          <li>
            <a href="Contacto.html">Contáctanos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Banner = () => {
  return (
    <div>
      <img class="banner" src="images\principal.jpg" height="950" />
    </div>
  );
};

const Welcome = () => {
  return (
    <div class="inicio">
      <br />
      <h1>¡BIENVENIDOS A PETS WORLD!</h1>
      <p>
        Aquí encontraras gran variedad de productos para los más engreidos de la
        casa. Tenemos productos para diversos tipos de mascotas. Tenemos
        productos para perros, gatos, pájaros y conejos.
      </p>
    </div>
  );
};

const MasVendido = () => {
  return (
    <div class="masVendido">
      <p>LO MÁS VENDIDO</p>
    </div>
  );
};

const Vendidos = () => {
  return <div></div>;
};
