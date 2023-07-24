import '../styles/App.scss';
import background from '../images/corkboard.jpg';
import { useState } from 'react';
function App() {
  const [postits, setPostit] = useState([]);
  const [content, setContent] = useState('');

  const addPostIt = () => {
    const newPostit = {
      id: Date.now(),
      content: content,
    };
    setPostit([...postits, newPostit]);
    setContent('');
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <header>
        <h1 className="h1">REMEMBER IT</h1>
      </header>
      <main>
        <section className="section__form">
          <div className="form">
            <div className="btns">
              <button className="color__btn">color</button>
              <button className="italics__btn">cursiva</button>
              <button className="bold__btn">negrita</button>
              <button className="hightlighter__btn">subrayado</button>
            </div>
            <textarea
              className="form__text"
              placeholder="Escribe aqui..."
              value={content}
              onChange={handleContentChange}
            />

            <div className="inferior__btns">
              <select className="form__select" name="" id="">
                <option value="Trabajo">Trabajo</option>
                <option value="Hogar">Hogar</option>
                <option value="Crea un tema">Crea un tema...</option>
              </select>
              <input
                className="form__input"
                type="button"
                value="Añade al tablero"
                onClick={addPostIt}
              />
            </div>
          </div>
        </section>
        <section className="corkboard">
          <div className="corkboard__div">
            <img
              className="corkboard__img"
              src={background}
              alt="Corkboard for postit's"
            />
            <ul>
              {postits.map((postit, index) => (
                <li
                  className="post-it"
                  key={postit.id}
                  style={{ marginLeft: index !== 0 ? '500px' : '0' }}
                  draggable="true"
                >
                  {postit.content}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
