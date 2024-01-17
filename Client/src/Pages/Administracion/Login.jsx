import OpacityAnimated from "../../helpers/OpacityAnimated";
import { Helmet } from "react-helmet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

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
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-2 grid h-24 place-items-center"
          >
            <Typography variant="h4" color="white">
              Hospital italiano la plata
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="green" fullWidth>
              Ingresar
            </Button>
            <Typography
              variant="small"
              className="mt-6 flex justify-center italic"
            >
              Si tenes problemas para ingresar comunicate con Sistemas
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </OpacityAnimated>
  );
};

export default Login;
