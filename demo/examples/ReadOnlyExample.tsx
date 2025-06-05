import ReactStars from "../../src";

const ReadOnlyExample = () => {
  return (
    <div className="example-container">
      <h3 className="example-title">Modo Solo Lectura</h3>
      <p className="example-description">
        Uso del componente en modo de solo lectura, sin interacción.
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
