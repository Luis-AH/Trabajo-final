const Selector1 = () => {
  return (
    <div class="grid justify-center lg:my-20">
      <br />
      <select class="w-64 h-10 rounded-md" id="categoryFilter2">
        <option value="allPro">Tipo de producto</option>
        <option value="comida">Alimento</option>
        <option value="salud">Salud e higiene</option>
        <option value="accesorios">Accesorios y otros</option>
      </select>
      <br />
      <select class="w-64 h-10 rounded-md" id="categoryFilter">
        <option value="allAge">edad</option>
        <option value="pequeños">Pequeños</option>
        <option value="adultos">Adultos</option>
      </select>
    </div>
  );
};
