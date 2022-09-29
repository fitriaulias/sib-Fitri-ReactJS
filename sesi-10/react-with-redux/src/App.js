import './App.css';
import CounterClass from './features/counter/CounterClassComponent';
import CounterFnComponent from './features/counter/CounterFnComponent';

function App() {
  return (
    <main className='App'>
      {/* Pemanggilan komponent CounterFnComponent (functional component) */}
      <CounterFnComponent /> 
      {/* Pemanggilan komponent CounterClassComponent (class component) */}
      <CounterClass />
    </main>
  );
}

export default App;
