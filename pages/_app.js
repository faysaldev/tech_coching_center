import "../styles/globals.css";
import "../styles/custom.css";
import { store } from "../redux/app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
