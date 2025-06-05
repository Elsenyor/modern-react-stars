import { useState } from "react";
import ReactStars from "../../src";

const A11yExample = () => {
  const [rating, setRating] = useState<number>(3);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="example-container">
      <h3 className="example-title">Accesibilidad</h3>
      <p className="example-description">
        El componente es completamente accesible. Prueba a usar las teclas de
        dirección para cambiar la valoración, o los números del 1 al 5 para
        establecer un valor directo.
      </p>

      <div>
        <label htmlFor="stars-a11y">Valorar del 1 al 5:</label>
        <div id="stars-a11y">
          <ReactStars
            count={5}
            value={rating}
            onChange={handleRatingChange}
            size={36}
            isHalf={true}
            a11y={true}
          />
        </div>
      </div>

      <p>Valoración actual: {rating}</p>

      <div className="a11y-instructions">
        <h4>Instrucciones para teclado:</h4>
        <ul>
          <li>Tab: Enfocar el componente</li>
          <li>
            Teclas de flecha izquierda/derecha: Disminuir/aumentar la valoración
          </li>
          <li>Números 1-5: Establecer valoración directamente</li>
          <li>Home: Establecer valoración a 0</li>
          <li>End: Establecer valoración máxima</li>
        </ul>
      </div>

      <div className="example-code">
        <pre>{`import ReactStars from 'react-stars-modern';

const Example = () => {
  const [rating, setRating] = useState(3);

  return (
    <>
      <label htmlFor="stars-a11y">Valorar del 1 al 5:</label>
      <div id="stars-a11y">
        <ReactStars
          count={5}
          value={rating}
          onChange={setRating}
          size={36}
          isHalf={true}
          a11y={true}
        />
      </div>
    </>
  );
};`}</pre>
      </div>
    </div>
  );
};

export default A11yExample;
