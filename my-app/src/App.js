import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StateFulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';


function App() {
  return (
    <div className="App">
       {/* <FunctionalGreetingWithProps greeting="Nice to meet you, I see you are " name="Jamie" age="31 years old." />  */}
      {/* <StatefulGreeting /> */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventsClass /> */}
      {/* <EventsFunctional /> */}
      <EventBinding />
    </div>
  );
}

export default App;
