import { useState } from 'react';
import ReactStars from '../../src';

const CustomIconsExample = () => {
  const [rating, setRating] = useState<number>(4);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="example-container">
      <h3 className="example-title">Custom Icons</h3>
      <p className="example-description">Using the component with custom FontAwesome icons.</p>

      <ReactStars
        count={5}
        value={rating}
        onChange={handleRatingChange}
        size={36}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fas fa-star-half-alt"></i>}
        filledIcon={<i className="fas fa-star"></i>}
      />

      <p>Current rating: {rating}</p>

      <div className="example-code">
        <pre>{`import ReactStars from 'react-stars-modern';

const Example = () => {
  const [rating, setRating] = useState(4);

  return (
    <ReactStars
      count={5}
      value={rating}
      onChange={setRating}
      size={36}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fas fa-star-half-alt"></i>}
      filledIcon={<i className="fas fa-star"></i>}
    />
  );
};`}</pre>
      </div>
    </div>
  );
};

export default CustomIconsExample;
