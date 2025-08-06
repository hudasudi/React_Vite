import Card from "./Card";
import acheronIcon from './assets/acheronImg.jpg'

function App() {

   return(
    <>
   <Card
     name="Huda"
     image={acheronIcon}
     description1="My first ever React Project"
     description2="I will try my best to master it so i can be a great Web Developer 😊"
   />
     </>
   );
}

export default App
