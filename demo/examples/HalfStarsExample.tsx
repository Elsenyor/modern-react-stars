import { useState } from 'react';
import ReactStars from '../../src';

const HalfStarsExample = () => {
  const [rating, setRating] = useState<number>(3.5);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="example-container">
      <h3 className="example-title">Half Stars</h3>
      <p className="example-description">Using the component with support for half stars.</p>

      <ReactStars count={5} value={rating} onChange={handleRatingChange} size={36} isHalf={true} />

      <p>Current rating: {rating}</p>

      <div className="example-code">
        <pre>{`import ReactStars from 'react-stars-modern';

const Example = () => {
  const [rating, setRating] = useState(3.5);

  return (
    <ReactStars
      count={5}
      value={rating}
      onChange={setRating}
      size={36}
      isHalf={true}
    />
  );
};`}</pre>
      </div>
    </div>
  );
};

export default HalfStarsExample;
