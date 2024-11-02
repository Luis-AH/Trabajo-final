const Formulario = () => {
    return (
      <div class="grid justify-center h-auto px-10 py-8 min-[320px]:text-center max-[600px]:bg-sky-300">
         <form className="p-6 bg-white shadow-md rounded-lg space-y-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Your Name:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Your Email:
      </label>
      <input
        type="text"
        id="email"
        placeholder="Enter your email"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700"
      >
        Your Message:
      </label>
      <textarea
        id="message"
        placeholder="Enter your message"
        className="w-full p-2 border border-gray-300 rounded"
      ></textarea>

      <input
        type="button"
        value="Send"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      />
    </form>
      </div>
    );
  };
  