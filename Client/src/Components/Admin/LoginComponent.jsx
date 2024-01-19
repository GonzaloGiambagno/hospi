import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

const LoginComponent = () => {
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
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
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
    </section>
  );
};

export default LoginComponent;
