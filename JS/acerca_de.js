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
            La Guarida de Antibush es una plataforma líder en la organización de
            torneos de esports y venta de productos gaming en Latinoamérica.
          </p>
          <p>
            Fundada en 2024, nos dedicamos a crear experiencias competitivas
            únicas para jugadores de todos los niveles, proporcionando un
            ambiente seguro y profesional para el desarrollo del gaming
            competitivo.
          </p>
        </div>
      </div>
    </div>
  );
};
