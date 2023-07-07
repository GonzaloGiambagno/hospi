import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react"
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ScrollToTop />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
