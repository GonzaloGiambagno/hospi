/* eslint-disable react/prop-types */
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-row gap-2">
      <h1>PRUEBA LAYOUT DASH</h1>
      {/* Puedes agregar cualquier contenido adicional que desees, como un sidebar */}
      {children}
    </div>
  );
};

export default DashboardLayout;
