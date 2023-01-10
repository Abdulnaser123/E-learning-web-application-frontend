import Main from './components/Main';
import {Accessibility} from 'accessibility/src/main';

function App() {
  return (
    <div className="App">
      {/* {window.addEventListener(
        'load',
        function () {
          new Accessibility();
        },
        false
      )} */}
      <Main />
    </div>
  );
}

export default App;
