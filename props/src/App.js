import logo from './logo.svg';
import './App.css';
import Card from './Profile/Card';
import Alert from './Profile/Alert';

function App() {
  

  const list = [
    {
      name: 'name1',
      bio:' bio1',
      img:'img1 '
     
    }
  ]
  return (
    <div className="App">
      <div className="back">
      {list.map((item, index) => {
          return (
            <div className='col-auto mb-3' key={index}>
              <Card item={item}  />
            </div>
          )
        })}
        

      </div>
     
    </div>
  );
}

export default App;
