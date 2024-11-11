const Card = ({
  category,
  srcimagen,
  title,
  description,
  price,
  id,
  type,
  age,
  onClick,
}) => {
  return (
    <div
      className="pet text-center justify-center rounded-md mx-auto bg-white max-w-2xl px-2 py-5 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 "
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={srcimagen}
          alt={title}
          className="min-w-16 md:w-32 lg:w-48 object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="grid text-center justify-center">
        <h5 className="w-32 text-sm text-gray-700">{title}</h5>
        <small className="mt-1 text-lg font-medium text-gray-900">
          {price}
        </small>
      </div>
    </div>
  );
};

const Modal = ({ product, onClose }) => (
  <div className="modal" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="close-button" onClick={onClose}>
        &times;
      </span>
      <h1>{product.title}</h1>
      <img
        src={product.src}
        alt={product.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <p>{product.description}</p>
      <br />
      <p>{product.price}</p>
      <div class="flex justify-center m-auto">
        <button class="p-2 rounded-md bg-sky-950 hover:bg-sky-600 text-white xl:text-xl">
          Comprar
        </button>
      </div>
    </div>
  </div>
);

const CardList = ({ cardsData }) => {
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 min-[320px]:text-center max-[600px]:bg-sky-300">
    {cardsData.map((card, index) => (
      <Card
        key={index}
        id={card.id}
        category={card.category}
        srcimagen={card.src}
        title={card.title}
        description={card.description}
        price={card.price}
        type={card.type}
        age={card.age}
        onClick={() => onCardClick(card)}
      />
    ))}
  </div>;
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("");
  const [selectedAge, setSelectedAge] = React.useState("");
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };
  const handleProductClick = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const filteredCards = cardsData.filter((card) => {
    const matchesCategory = selectedCategory
      ? card.category === selectedCategory
      : true;
    const matchesType = selectedType ? card.type === selectedType : true;
    const matchesAge = selectedAge ? card.age === selectedAge : true;

    return matchesCategory && matchesType && matchesAge;
  });

  return (
    <div className="filter-container">
      {/* Selector de categoría */}
      <div className="grid">
        <div className="category-filter grid">
          <label class="text-lg" htmlFor="category-filter">
            Filtrar por categoría:
          </label>
          <select
            id="category-filter"
            onChange={handleCategoryChange}
            value={selectedCategory}
            class="m-1 rounded-md lg:text-lg w-80 xl:w-48 py-2 hover:bg-sky-700 hover:text-white"
          >
            <option value="">Tipo de mascota</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="masPequeños">Mascotas pequeñas</option>
            {/* Añade más opciones aquí según tus categorías */}
          </select>
        </div>

        <div className="category-filter">
          <select
            id="type-filter"
            onChange={handleTypeChange}
            value={selectedType}
            class="m-1 rounded-md lg:text-lg w-80 xl:w-48 py-2 hover:bg-sky-700 hover:text-white"
          >
            <option value="">Tipo de producto</option>
            <option value="alimento">Alimentos</option>
            <option value="salud">Salud e higiene</option>
            <option value="casa">Casas</option>
            <option value="accesorio">Accesorios y otros</option>
            {/* Añade más opciones aquí según tus categorías */}
          </select>
        </div>
        <div className="age-filter ">
          <select
            id="age-filter"
            onChange={handleAgeChange}
            value={selectedAge}
            class="m-1 rounded-md lg:text-lg w-80 xl:w-48 py-2 hover:bg-sky-700 hover:text-white"
          >
            <option value="">Edad</option>
            <option value="pequeño">pequeños</option>
            <option value="adulto">Adultos</option>
            <option value="todas">Todas las edades</option>
            {/* Añade más opciones aquí según tus categorías */}
          </select>
        </div>
        <br />
      </div>

      {/* Renderizado de tarjetas filtradas */}
      <div className="cards-grid grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 min-[320px]:text-center max-[600px]:bg-sky-300">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            category={card.category}
            srcimagen={card.src}
            title={card.title}
            description={card.description}
            price={card.price}
            type={card.type}
            age={card.age}
            onClick={() => handleProductClick(card)}
          />
        ))}
      </div>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

ReactDOM.render(
  <CardList cardsData={cardsData} />,
  document.getElementById("root")
);
