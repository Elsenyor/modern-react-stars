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
      <p>A modern star rating component for React</p>

      <div className="tabs">
        <button
          onClick={() => setActiveTab('basic')}
          className={activeTab === 'basic' ? 'active' : ''}
        >
          Basic Example
        </button>
        <button
          onClick={() => setActiveTab('half')}
          className={activeTab === 'half' ? 'active' : ''}
        >
          Half Stars
        </button>
        <button
          onClick={() => setActiveTab('icons')}
          className={activeTab === 'icons' ? 'active' : ''}
        >
          Custom Icons
        </button>
        <button
          onClick={() => setActiveTab('readonly')}
          className={activeTab === 'readonly' ? 'active' : ''}
        >
          Read Only
        </button>
        <button
          onClick={() => setActiveTab('a11y')}
          className={activeTab === 'a11y' ? 'active' : ''}
        >
          Accessibility
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
