const Pets = ({ srcimagen, id }) => {
  return (
    <div className="pet text-center justify-center rounded-md mx-auto bg-white max-w-2xl px-2 py-5 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 flex-wrap min-[320px]:text-center max-[600px]:bg-sky-300">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 min-[320px]:text-center max-[600px]:bg-sky-300 flex-auto">
        <img
          src={srcimagen}
          className="min-w-16 md:w-32 lg:w-48 object-cover object-center group-hover:opacity-75 min-[320px]:text-center max-[600px]:bg-sky-300 scale-100 flex-auto"
        />
      </div>
      <div>
        <a href="Productos.html">Ver más</a>
      </div>
    </div>
  );
};
const PetList = ({ petsData }) => (
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 min-[320px]:text-center max-[600px]:bg-sky-300 min-[320px]:text-center max-[600px]:bg-sky-300 scale-100 flex-auto">
    {petsData.map((card, index) => (
      <Card key={index} srcimagen={card.src} />
    ))}
  </div>
);
