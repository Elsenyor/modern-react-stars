import { useState } from 'react';
import ReactStars from '../../src';

const A11yExample = () => {
  const [rating, setRating] = useState<number>(3);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="example-container">
      <h3 className="example-title">Accessibility</h3>
      <p className="example-description">
        The component is fully accessible. Try using the arrow keys to change the rating, or numbers
        1 to 5 to set a direct value.
      </p>

      <div>
        <label htmlFor="stars-a11y">Rate from 1 to 5:</label>
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

      <p>Current rating: {rating}</p>

      <div className="a11y-instructions">
        <h4>Keyboard Instructions:</h4>
        <ul>
          <li>Tab: Focus the component</li>
          <li>Left/Right arrow keys: Decrease/increase rating</li>
          <li>Numbers 1-5: Set rating directly</li>
          <li>Home: Set rating to 0</li>
          <li>End: Set maximum rating</li>
        </ul>
      </div>

      <div className="example-code">
        <pre>{`import ReactStars from 'react-stars-modern';

const Example = () => {
  const [rating, setRating] = useState(3);

  return (
    <>
      <label htmlFor="stars-a11y">Rate from 1 to 5:</label>
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
