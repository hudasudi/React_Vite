import Card from "./Card";
import acheronIcon from './assets/acheronImg.jpg'

function App() {

   return(
    <>
   <Card
     name="Huda"
     image={acheronIcon}
     description1="My first ever React Project"
     description2=" Aspiring Web and Mobile Developer!"
   />
     </>
   );
}

export default App
