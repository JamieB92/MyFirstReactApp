import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StateFulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from "./components/ConditionalRenderingClass.js";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import { UnControlledForm } from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import HooksCounter from './components/HooksCounter';
import ClassCounter from './components/ClassCounter';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCountContainer from './components/UseEffectCountContainer';
import HTTPRequests from './components/HTTPRequests';

function App() {
  return (
    <div className="App">
       {/* <FunctionalGreetingWithProps greeting="Nice to meet you, I see you are " name="Jamie" age="31 years old." />  */}
      {/* <StatefulGreeting /> */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventsClass /> */}
      {/* <EventsFunctional /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingFunctional connected={false} /> * */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UnControlledForm /> */}
      {/* <SearchBar /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays /> */}
      {/* <HooksCounter /> */}
      {/* <UseStateWithObjects /> */}
      {/* <ClassCounter /> */}
      {/* <UseEffectCounter /> */}
      {/* <UseEffectCountContainer /> */}
      <HTTPRequests />
    </div>
  );
}

export default App;
