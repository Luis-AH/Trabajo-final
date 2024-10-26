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
      <img class="banner" src="https://firebasestorage.googleapis.com/v0/b/final-98afc.appspot.com/o/principal.jpg?alt=media&token=c84567b4-64e9-4612-91bb-312516c3befc" height="950" />
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

const Vender =() => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md space-x-4">
      <img
        src={srcimagen}
        alt={title}
        className="w-24 h-24 object-cover rounded"
        loading="lazy"
      />
      <div className="flex-1">
        <h5 className="text-lg font-bold text-gray-800">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
        <small className="text-blue-600 font-semibold">{price}</small>
      </div>
    </div>
  ) 
}
const CardList = ({ cardsData }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {cardsData.map((card, index) => (
      <Card
        key={index}
        category={card.category}
        srcimagen={card.src}
        title={card.title}
        description={card.description}
        price={card.price}
      />
    ))}
  </div>
);

const Footer =() => {
  return (
    <footer>
    <p>&copy; 2024 Pets World. Todos los derechos reservados.</p>
  </footer>
  )
}
