import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import {Provider} from "react-redux";
import {store} from "./Redux/store";

ReactDOM.render(
// <<<<<<< HEAD
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
//   rootElement
// );
// =======
  <React.StrictMode>
    <Provider store={store}>      
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
