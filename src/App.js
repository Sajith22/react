import './App.css';
import Employee from './components/Employee';


function App() {
  const showEmployee=true;
  return (
    <div className="App">
      {showEmployee ?
        <>
        <Employee name="Caleb" role="Intern"/>
        <Employee name="Abby"/>
        <Employee name="John"/>
        </>
      : 
      <p>You can't see the employee</p>
      }
    </div>
  );
}

export default App;
