import Page from "../components/Page";
import { createStore } from "redux";
import CartStateReducers from "../reducers.js/reducers";
import { createWrapper } from "next-redux-wrapper";

const store = () => createStore(CartStateReducers);
const wrapper = createWrapper(store);

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default wrapper.withRedux(MyApp);
