import MyForm from './components/MyForm';
import MyButton from './components/Mybutton'; 
import './App.css';

function App() {
  const handleClick = () => {
    alert('Reusable button clicked!');
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <MyForm />
      

      <div style={{ marginTop: '2rem' }}>
        <MyButton label="Click Me!" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
