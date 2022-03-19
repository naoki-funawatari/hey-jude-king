import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@/features/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
