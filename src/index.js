import React from 'react';
import ReactDOM from 'react-dom';
import { PricingComponent, Wrapper, Navbar } from './components'
import { data } from './mockedData'



ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <PricingComponent data={data} />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);