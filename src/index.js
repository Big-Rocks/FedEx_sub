import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
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