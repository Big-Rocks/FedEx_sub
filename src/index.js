import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import "./index.css"

const container1 = document.querySelector('#root');
const root = createRoot(container1);

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

root.render(<Page />);