const Card = ({ category, srcimagen, title, description, price }) => {
  return (
    <div className="pet text-center justify-center rounded-md mx-auto bg-white max-w-2xl px-2 py-5 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 flex-1">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 flex-1">
        <img
          src={srcimagen}
          alt={title}
          className="min-w-16 md:w-32 lg:w-48 object-cover object-center group-hover:opacity-75 flex-1"
        />
      </div>
      <div className="grid text-center justify-center flex-1">
        <h5 className="w-32 text-sm text-gray-700 flex-1">{title}</h5>
        <p className="text-sm text-gray-600 flex-1">{description}</p>
        <small className="mt-1 text-lg font-medium text-gray-900 flex-1">
          {price}
        </small>
      </div>
    </div>
  );
};

const CardList = ({ cardsData }) => (
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 min-[320px]:text-center max-[600px]:bg-sky-300">
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