const Sedes = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Nuestras Sedes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sede San Borja</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31210.52084053397!2d-77.04358632568358!3d-12.090567400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c79211179535%3A0x1fa5b7c7f332ca93!2sSuperPet!5e0!3m2!1ses-419!2spe!4v1730522957932!5m2!1ses-419!2spe"
                className="w-full h-64 rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sede La Molina</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31216.15877219512!2d-76.97858561006231!3d-12.042154546007382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7e08cf36323%3A0x9e532d9a8ae2bc81!2sSuperPet!5e0!3m2!1ses-419!2spe!4v1730522768562!5m2!1ses-419!2spe"
                className="w-full h-64 rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sede SJL</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31220.17870400669!2d-77.02517526523441!3d-12.007518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c52e36a73747%3A0x42c2e84b3dc33f5e!2sSuperPet!5e0!3m2!1ses-419!2spe!4v1730523066153!5m2!1ses-419!2spe"
                className="w-full h-64 rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sede Surco</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31206.48946576589!2d-77.0217423256836!3d-12.125067999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c78bb3ee0d33%3A0xa609fda0687fe37f!2sSuperPet!5e0!3m2!1ses-419!2spe!4v1730523218356!5m2!1ses-419!2spe"
                className="w-full h-64 rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
