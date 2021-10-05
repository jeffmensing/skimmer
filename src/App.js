import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import './App.css';
import ContainerRowA from './layout/ContainerRowA';
import ContainerRowB from './layout/ContainerRowB';

function App() {
  return (
          <>
            <Header />
            <Sidebar />
            <ContainerRowA />
            <ContainerRowB />
          </>  
  );
}

export default App;
