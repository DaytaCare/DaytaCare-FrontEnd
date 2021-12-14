import './css/Home.css';
import './css/FeaturedDaycare.css'
import FeaturedDaycare from "./FeaturedDaycare";

function Home() {
  return(
    <>
    <div>
      <div className= "about">
        <h4>About DaytaCare</h4>
        <img className="aboutImg" src="https://via.placeholder.com/550x300" alt="placeholder"/>
      </div>

      <div>
        <FeaturedDaycare/>
      </div>
    </div>
    </>
  )
}

export default Home;