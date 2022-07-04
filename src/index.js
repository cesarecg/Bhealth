import React from 'react';
import ReactDOM from 'react-dom';
import { PricingComponent, Wrapper, Navbar } from './components'
import { data } from './mockedData'
import App from "./App";




ReactDOM.render(
  <React.StrictMode>
    <App />
    <Wrapper>
      <PricingComponent data={data} />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);