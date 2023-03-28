import "./App.css";
import { RoutesProvider } from "./Routes/index";
import { Global } from "./Styles";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <Global />
      <ToastContainer autoClose={1000} theme={"dark"} />
      <RoutesProvider />
    </>
  );
}

export default App;
