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
      <div className="flex items-center justify-center h-screen absolute top-0 z-[-2] w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(144,238,144,0.2),rgba(255,255,255,0)_100%)]">
        <LoginComponent />
      </div>
    </OpacityAnimated>
  );
};

export default Login;
