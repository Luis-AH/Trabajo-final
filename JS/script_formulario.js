const Formulario = () => {
    return (
      <div class="grid justify-center h-auto px-20 py-8 min-[320px]:text-center max-[600px]:bg-sky-300">
         <form className="p-6 bg-white shadow-md rounded-lg space-y-4">
      <label htmlFor="name" className="block text-lg font-medium text-gray-700 w-80">
        Nombre:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Ingresa nombre"
        className="w-full text-lg p-2 border border-gray-300 rounded w-80"
      />
      <label htmlFor="Lastname" className="block text-lg font-medium text-gray-700 w-80">
        Apellido:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Ingresa tu apellido"
        className="w-full text-lg p-2 border border-gray-300 rounded w-80"
      />

      <label
        htmlFor="email"
        className="block text-lg font-medium text-gray-700 w-80"
      >
        Correo Eletrónico:
      </label>
      <input
        type="text"
        id="email"
        placeholder="Ingresa tu correo"
        className="w-full text-lg p-2 border border-gray-300 rounded w-80"
      />

      <label
        htmlFor="message"
        className="block text-lg font-medium text-gray-700 w-80"
      >
        Mensaje:
      </label>
      <textarea
        id="message"
        placeholder="Ingresa Mensaje"
        className="w-full text-lg p-2 border border-gray-300 rounded w-80"
      ></textarea>

      <input
        type="button"
        value="Enviar"
        className="w-full text-lg py-2 bg-blue-600 text-white bg-sky-900 text-white rounded-md hover:bg-cyan-600 w-80"
      />
    </form>
      </div>
    );
  };
  