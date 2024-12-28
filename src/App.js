import './App.css';
import Employee from './components/Employee';


function App() {
  console.log('we are about ot list the emmployees');
  const showEmployee=true;
  return (
    <div className="App">
      {showEmployee ?
        <>
        <Employee/>
        <Employee/>
        <Employee/>
        <Employee/>
        <Employee/>
        </>
      : 
      <p>You can't see the employee</p>
      }
    </div>
  );
}

export default App;
