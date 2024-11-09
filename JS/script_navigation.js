const Navigation = () => {
  return (
    <div>
      <header id="mainheader">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/final-98afc.appspot.com/o/Logo.png?alt=media&token=0c313088-0133-496a-ab6b-ae3334484415"
          height="100"
          class="w-96"
        />
      </header>
      <nav>
        <ul class="grid">
          <li class="m-1 border-b-4 border-sky-700">
            <a href="index.html">Inicio</a>
          </li>
          <li class="m-1 border-b-4 border-sky-700">
            <a href="Productos.html">Productos</a>
          </li>
          <li class="m-1 border-b-4 border-sky-700">
            <a href="Acerca-de.html">Acerca de</a>
          </li>
          <li class="m-1 border-b-4 border-sky-700">
            <a href="Contacto.html">Contáctanos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
