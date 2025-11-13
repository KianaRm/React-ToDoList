import { useSelector } from "react-redux";
import List from "./List";
import ThemeButton from "./Theme";

function Background() {
  const status = useSelector(state => state.theme.status);
  const imgSrc = status==="dark"?  "images/bg-desktop-dark.jpg" : "images/bg-desktop-light.jpg";

    return (
      <div>

        <div className="background">
            
            
            <img src={imgSrc} />
            <p>TODO</p>
            <ThemeButton />
            
        </div>

        <List/>
          
       
      </div>
    );
  }
  
  export default Background;