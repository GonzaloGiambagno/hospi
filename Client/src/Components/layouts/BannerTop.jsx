import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const InstagramLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#405DE6" />
          <stop offset="10%" stopColor="#5B51D8" />
          <stop offset="20%" stopColor="#833AB4" />
          <stop offset="30%" stopColor="#C13584" />
          <stop offset="40%" stopColor="#E1306C" />
          <stop offset="50%" stopColor="#FD1D1D" />
          <stop offset="60%" stopColor="#F56040" />
          <stop offset="70%" stopColor="#F77737" />
          <stop offset="80%" stopColor="#FCAF45" />
          <stop offset="100%" stopColor="#FFDC80" />
        </linearGradient>
      </defs>
      <path
        d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z"
        fill="url(#grad)"
      />
    </svg>
  );
};

const BannerTop = () => {
  return (
    <header className="hidden sm:flex flex-ro justify-between mx-auto max-w-screen-2xl p-1 shadow-lg border-b border-b-1 border-gray-300 bg-white">
      <div className="flex flex-row gap-2 items-center">
        <a href="https://www.facebook.com/italianolaplata" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#4267B2"
            className="opacity-60 hover:opacity-100"
          >
            <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
          </svg>
        </a>
        <a href="https://twitter.com/italianolaplata" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#1DA1F2"
            className="opacity-60 hover:opacity-100"
          >
            <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/italianolaplata/"
          className="opacity-60 hover:opacity-100"
          target="blank"
        >
          <InstagramLogo />
        </a>
      </div>
      <div className="flex gap-3">
        <Link to="/vosyelhospital/informacionUtil?tab=guardia">
          <Button variant="text" size="sm" className="p-0.5" color="red">
            guardia
          </Button>
        </Link>
        <a
          href="http://italnet.italianolaplata.org.ar/login.aspx"
          target="blank"
        >
          <Button variant="text" size="sm" color="blue-gray" className="p-0.5">
            Empleados
          </Button>
        </a>
        <a href="https://fundacion.italianolaplata.org.ar/" target="blank">
          <Button variant="text" size="sm" className="p-0.5">
            Fundacion
          </Button>
        </a>
        <a
          href="https://portal.italianolaplata.org.ar/Cuenta/Login"
          target="blank"
        >
          <Button variant="text" size="sm" color="green" className="p-0.5">
            Portal del paciente
          </Button>
        </a>
      </div>
    </header>
  );
};

export default BannerTop;
