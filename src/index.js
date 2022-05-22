import React from 'react';
import {createRoot} from 'react-dom/client';

const container1 = document.querySelector('#root');
const root = createRoot(container1);

function Header(){
  return (
    <header>
      <nav>
        <img src="logo512.png" width="30px" />
      </nav>
    </header>
  );
}

function Footer(){
  return (
    <footer>
      <small>© 2022 Bigrocks development. All rights reserved.</small>
    </footer>
  );
}

function MainContent(){
  return (
    <>
      <h1>Some jokes</h1>
      <ol>
        <li>Now I am getting affinity about react.</li>
        <li>It's a little bit interesting</li>
        <li>Quite boring but someday I would master it.</li>
      </ol>
    </>
  );
}

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