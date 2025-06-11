import ReactStars from '../../src';

const ReadOnlyExample = () => {
  return (
    <div className="example-container">
      <h3 className="example-title">Read Only Mode</h3>
      <p className="example-description">
        Using the component in read-only mode, without interaction.
      </p>

      <ReactStars count={5} value={3.7} size={36} isHalf={true} edit={false} />

      <div className="example-code">
        <pre>{`import ReactStars from 'react-stars-modern';

const Example = () => {
  return (
    <ReactStars
      count={5}
      value={3.7}
      size={36}
      isHalf={true}
      edit={false}
    />
  );
};`}</pre>
      </div>
    </div>
  );
};

export default ReadOnlyExample;
