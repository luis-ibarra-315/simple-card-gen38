
import './App.css';
import Card from './components/Card';

function App() {


  return (
  <div className='app'>
    <h1 className='app_title'>Simple Cards</h1>
    <div className = 'app_container'>
    <Card
    color='dodgerblue'
    text='Primary'
    />
    <Card
    color='green'
    text='Scondary'
    />
    <Card
    color='red'
    text='Danger'  
    />
    </div>
  </div>
   
  )
}

export default App;
