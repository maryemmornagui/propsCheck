import logo from './logo.svg';
import './App.css';
import ProfileComponent from './profile/profilecomponent'
import image from './image.jpg'

const compo={
  FullName : "Mornagui Mariem",
  Bio : "Goding !!",
  Profession : "Electrical Engineer"
};

function App() {
  const handleName = (name) => {
    alert(`this is ${name} portfolio`)
  }
  return (
    <div className="App">
      <ProfileComponent 
      FullName={compo.FullName} Bio={compo.Bio} Profession={compo.Profession} handleName={handleName} >
         <div>
         <img src={image} width="500" height="500"/>
         </div>
          </ProfileComponent>
      </div>
  );
}

export default App;
