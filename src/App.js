import './App.css';
import Button from './components/Button';
import HomeIcon from './components/HomeIcon';
import PlusIcon from './components/PlusIcon';

function App() {
  return (
    <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode="filled">Filled (Default)</Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          {/* passing another component as a prop */}
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          {/* passing another component as a prop */}
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          {/* passing function as a prop */}
          <Button onClick={() => console.log('Clicked!')}>Click me</Button>
        </p>
      </section>
    </div>
  );
}

export default App;
