
import './App.css'
import ComponentA from './Components/ComponentA';

function App() {


  const people = [
    { id: 1, name: "Fazliddin", status: "student" },
    { id: 2, name: "Leo", status: "footballer" },
    { id: 3, name: "Azam", status: "teacher" },
  ];
  return (
    <>
      {
      people.map((person,index)=>(
        <ComponentA key={index} data={person}/>
      ))

      }
    </>
  );
}

export default App





//prop
//components