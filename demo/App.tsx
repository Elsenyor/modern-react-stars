import { useState } from 'react';
import {
  BasicExample,
  HalfStarsExample,
  CustomIconsExample,
  ReadOnlyExample,
  A11yExample,
} from './examples';

const App = () => {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="container">
      <h1>React Stars Modern</h1>
      <p>Un componente moderno de calificación con estrellas para React</p>

      <div className="tabs">
        <button
          onClick={() => setActiveTab('basic')}
          className={activeTab === 'basic' ? 'active' : ''}
        >
          Ejemplo Básico
        </button>
        <button
          onClick={() => setActiveTab('half')}
          className={activeTab === 'half' ? 'active' : ''}
        >
          Medias Estrellas
        </button>
        <button
          onClick={() => setActiveTab('icons')}
          className={activeTab === 'icons' ? 'active' : ''}
        >
          Iconos Personalizados
        </button>
        <button
          onClick={() => setActiveTab('readonly')}
          className={activeTab === 'readonly' ? 'active' : ''}
        >
          Solo Lectura
        </button>
        <button
          onClick={() => setActiveTab('a11y')}
          className={activeTab === 'a11y' ? 'active' : ''}
        >
          Accesibilidad
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'basic' && <BasicExample />}
        {activeTab === 'half' && <HalfStarsExample />}
        {activeTab === 'icons' && <CustomIconsExample />}
        {activeTab === 'readonly' && <ReadOnlyExample />}
        {activeTab === 'a11y' && <A11yExample />}
      </div>
    </div>
  );
};

export default App;
