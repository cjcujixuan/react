import './App.css';
import BirthComponent from './component/BirthComponent';
import GreetingComponent from './component/GreetingCompent';
import ConditionalComponent from './component/ConditionalComponent';
import CombinedComponent from './component/CombinedComponent';
import CalcOne from './component/Calc';
import PropsText from './component/PropsText';


function App() {
  return (
    <div className="App">
     <BirthComponent />
     <GreetingComponent />
     <ConditionalComponent isVIP={true}/>
     <ConditionalComponent isVIP={false}/>
     <CombinedComponent />
     <CalcOne numOne={5} numTwo={7}/>
     <PropsText />

    </div>
  );
}

export default App;
