import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    setErrorMessage("");
    try {
      await login(email, password);
    } catch (error) {
      setErrorMessage(
        "Credenciales invalidas, por favor intentelo nuevamente."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <Input
            color="green"
            label="Email"
            size="lg"
            type="email"
            value={email}
            autoComplete="current-password"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            color="green"
            label="Password"
            size="lg"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <Typography variant="small" className="text-red-500">
              {errorMessage}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit" variant="gradient" color="green" fullWidth>
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
    </form>
  );
};

export default LoginComponent;
