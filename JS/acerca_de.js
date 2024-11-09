const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Acerca de Nosotros
        </h1>

        {/* Video Principal */}
        <div className="mb-12">
          <iframe
            className="w-full h-48 md:h-96 rounded-lg mb-8"
            src="https://www.youtube.com/embed/VigrgrBRlug"
            title="Video presentación"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contenido Principal */}
        <div className="space-y-6 text-base md:text-lg mb-12">
          <p>
            PetsWorld es una cadena de tiendas de mascotas que esta presente en
            varios distritos de la capital.
          </p>
          <p>
            Fundada en 2015, nuestro objetivo es ofrecer todo lo que necesitan
            las mascotas, desde alimento hasta medicinas a precios cómodos.
          </p>
        </div>
      </div>
    </div>
  );
};
