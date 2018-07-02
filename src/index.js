import React from "react";
import ReactDOM from "react-dom";

import Loader from './components/Loader';

const Index = () => {
  return <div>
  	<Loader></Loader>
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));