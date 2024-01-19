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
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(email, password);
    navigate("/dashboard/home");
  };

  return (
    <section>
      {" "}
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
            label="Email"
            size="lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleLogin}
            variant="gradient"
            color="green"
            fullWidth
          >
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
    </section>
  );
};

export default LoginComponent;
