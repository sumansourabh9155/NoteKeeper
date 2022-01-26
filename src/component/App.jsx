import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Content from "./content";

function CardRender(Content) {
  return (
    <Note
      key={Content.id}
      id={Content.id}
      name={Content.name}
      email={Content.text}
    />
  );

  function App() {
    return (
      <div>
        <Header />
        {Content.map(CardRender)}
        <Footer />
      </div>
    );
  }
}

export default App;
