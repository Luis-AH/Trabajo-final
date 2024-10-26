const Navigation = () => {
  return (
    <div>
      <header id="mainheader">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/final-98afc.appspot.com/o/Logo.png?alt=media&token=0c313088-0133-496a-ab6b-ae3334484415"
          height="100"
        />
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
      <img
        class="banner"
        src="https://firebasestorage.googleapis.com/v0/b/final-98afc.appspot.com/o/principal.jpg?alt=media&token=c84567b4-64e9-4612-91bb-312516c3befc"
        height="950"
      />
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
      <br />
      <br />
      <p>LO MÁS VENDIDO</p>
      <br />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Pets World. Todos los derechos reservados.</p>
    </footer>
  );
};
