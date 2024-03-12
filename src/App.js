import './App.css';
// import BirthComponent from './component/BirthComponent';
// import GreetingComponent from './component/GreetingCompent';
// import ConditionalComponent from './component/ConditionalComponent';
// import CombinedComponent from './component/CombinedComponent';
// import CalcOne from './component/Calc';
// import PropsText from './component/PropsText';
// import DynamicComp from './component/DynamicComp';
import Students from './component/Students';


function App() {
  return (
    <div className="App">
     {/* <BirthComponent />
     <GreetingComponent />
     <ConditionalComponent isVIP={true}/>
     <ConditionalComponent isVIP={false}/>
     <CombinedComponent />
     <CalcOne numOne={5} numTwo={7}/>
     <PropsText /> */}
    {/* <DynamicComp />
    <DynamicComp title="研發處" thick="5" color='red' option={true}/>
    <DynamicComp title="人資處" thick="10" color='blue' option={false}/> */}
    <Students />
    </div>
  );
}

export default App;