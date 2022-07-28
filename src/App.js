
import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfArgos, setListOfArgos] = useState([]);
  const [argonaute_name, setName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4000/argo").then((response) => {
      setListOfArgos(response.data);
      console.log(response.data)
    });
  }, []);


  const createArgo = () => {
    Axios.post("http://localhost:4000/argo/",{argonaute_name})
          .then((response) => {
      setListOfArgos([
        ...listOfArgos,
        {
          argonaute_name
        },
      ]);
    });
  };

  function Header() {
    return (
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
        </header>
    );
  }
  function Footer() {
    return (
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    );
  }

  return (
    <main>
      <Header />
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <label for="name">Nom de l&apos;Argonaute</label>
        <input id="name" name="name" type="text" placeholder="Charalampos"  onChange={(event) => {
            setName(event.target.value);
          }} />
        <button onClick={createArgo} type="submit">Envoyer</button>
      </form>

      <h2>Membres de l'équipage</h2>
      <section className="member-list">
          {listOfArgos.map((argonautes) => {
            return (
              <div className="member-item">{argonautes.argonaute_name}</div>
              );
            })}
          </section>   
      <Footer/>
    </main>
  );
}

export default App;