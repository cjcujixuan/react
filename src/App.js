import './App.css';
import BirthComponent from './component/BirthComponent';
import GreetingComponent from './component/GreetingCompent';
import ConditionalComponent from './component/ConditionalComponent';
import CombinedComponent from './component/CombinedComponent';

function App() {
  return (
    <div className="App">
     <BirthComponent />
     <GreetingComponent />
     <ConditionalComponent isVIP={true}/>
     <ConditionalComponent isVIP={false}/>
     <CombinedComponent />
    </div>
  );
}

export default App;
