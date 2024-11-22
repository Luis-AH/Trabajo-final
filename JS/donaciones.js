const Pets = ({ category, srcimagen, title, description, price, onClick }) => (
  <div
    className="pet text-center justify-center grid
   rounded-md mx-auto bg-white max-w-2xl px-2 py-5 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8"
    onClick={onClick}
  >
    <div className="">
      <h1 className=" w-52 text-sm text-gray-700">{title}</h1>
    </div>
    <br />
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img
        src={srcimagen}
        alt={title}
        className="min-w-16 md:w-32 lg:w-48 object-cover object-center group-hover:opacity-75"
      />
    </div>
    <div className="grid text-center justify-center">
      <small className="mt-1 text-lg font-medium text-gray-900">{price}</small>
    </div>
    <br />
    <div>
      <p>Pulsa para más información</p>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{product.title}</h2>
        <img
          src={product.src}
          alt={product.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <p>{product.description}</p>
      </div>
    </div>
  );
};

const PetList = ({ petsData }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 min-[320px]:text-center max-[600px]:bg-sky-300 m-20 ">
        {petsData.map((card, index) => (
          <Pets
            key={index}
            category={card.category}
            srcimagen={card.src}
            title={card.title}
            description={card.description}
            price={card.price}
            onClick={() => openModal(card)}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};
