import { useState } from "react";
import ReactStars from "../../src";

const BasicExample = () => {
  const [rating, setRating] = useState<number>(3);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="example-container">
      <h3 className="example-title">Ejemplo Básico</h3>
      <p className="example-description">
        Uso básico del componente con estrellas completas.
      </p>

      <ReactStars
        count={5}
        value={rating}
        onChange={handleRatingChange}
        size={36}
      />

      <p>Valoración actual: {rating}</p>

      <div className="example-code">
        <pre>{`import ReactStars from 'react-stars-modern';

const Example = () => {
  const [rating, setRating] = useState(3);

  return (
    <ReactStars
      count={5}
      value={rating}
      onChange={setRating}
      size={36}
    />
  );
};`}</pre>
      </div>
    </div>
  );
};

export default BasicExample;
