import Button from "../components/Button";
import Logo from "../components/logo";
import Logo2 from "../components/logo2";
import PartFive from "../components/PartFive";
import PartFour from "../components/PartFour";
import PartOne from "../components/PartOne";
import PartSeven from "../components/PartSeven";
import PartSix from "../components/PartSix";
import PartThree from "../components/PartThree";
import PartTwo from "../components/PartTwo";


export default function Home() {
  return (
     <div>
       <Logo />
       <PartOne />
       <Logo2 />
       <PartTwo />
       <PartThree />
       <Button />
       <PartFour />
       <PartFive />
       <PartSix />
       <PartSeven />
     </div>
  )
}
