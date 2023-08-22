export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div>
          <label
            htmlFor="mascota"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="Email"
            className="block text-gray-700 font-bold uppercase"
          >
           Email
          </label>

          <input
            id="Email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};
