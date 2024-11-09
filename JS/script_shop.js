const Card = ({
  category,
  srcimagen,
  title,
  description,
  price,
  id,
  type,
  age,
}) => {
  return (
    <div className="pet text-center justify-center rounded-md mx-auto bg-white max-w-2xl px-2 py-5 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={srcimagen}
          alt={title}
          className="min-w-16 md:w-32 lg:w-48 object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="grid text-center justify-center">
        <h5 className="w-32 text-sm text-gray-700">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
        <small className="mt-1 text-lg font-medium text-gray-900">
          {price}
        </small>
      </div>
    </div>
  );
};

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
      />
    ))}
  </div>;
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const filteredCards = cardsData.filter((card) => {
    const matchesCategory = selectedCategory
      ? card.category === selectedCategory
      : true;
    const matchesType = selectedType ? card.type === selectedType : true;

    return matchesCategory && matchesType;
  });

  return (
    <div className="filter-container">
      {/* Selector de categoría */}
      <div className="grid">
        <div className="category-filter grid">
          <label htmlFor="category-filter">Filtrar por categoría:</label>
          <select
            id="category-filter"
            onChange={handleCategoryChange}
            value={selectedCategory}
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
          >
            <option value="">Tipo de producto</option>
            <option value="alimento">Alimentos</option>
            <option value="salud">Salud e higiene</option>
            <option value="casa">Casas</option>
            <option value="accesorio">Accesorios y otros</option>
            {/* Añade más opciones aquí según tus categorías */}
          </select>
        </div>
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
          />
        ))}
      </div>
    </div>
  );
};

function showDetails(petId) {
  const pet = petsData.find((g) => g.id === petId);
  if (pet) {
    showPopup(pet);
  }
}

ReactDOM.render(
  <CardList cardsData={cardsData} />,
  document.getElementById("root")
);
