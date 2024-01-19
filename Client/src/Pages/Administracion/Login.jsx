import LoginComponent from "../../Components/Admin/LoginComponent";
import OpacityAnimated from "../../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <OpacityAnimated>
      <Helmet>
        <title>Login | Hospital Italiano La Plata</title>
        <meta
          name="description"
          content="Ingresar a la dashboard para gestionar la web"
        />
      </Helmet>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <LoginComponent />
      </div>
    </OpacityAnimated>
  );
};

export default Login;
