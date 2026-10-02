
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Registration Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Enter your name" required />
        <br /><br />
        <input type="email" placeholder="Enter your email" required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
