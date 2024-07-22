import { LimitedCounter } from './components/LimitedCounter/LimitedCounter';
import { PersistentCounter } from './components/PersistentCounter/PersistentCounter';
import { RealTimeClock } from './components/RealTimeClock/RealTimeClock';
import { TitleUpdater } from './components/TitleUpdater/TitleUpdater';
import { ToggleText } from './components/ToggleText/ToggleText';
import { WindowSize } from './components/WindowSize/WindowSize';

function App() {
  return (
    <>
      <h1 className="title">
        Exercicios ciclo de vida em componentes funcionais
      </h1>
      <div className="cards">
        <TitleUpdater />
        <WindowSize />
        <PersistentCounter />
        <RealTimeClock />
        <ToggleText />
        <LimitedCounter />
      </div>
    </>
  );
}

export default App;
