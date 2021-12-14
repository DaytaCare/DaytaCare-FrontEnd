import './css/Home.css';
import './FeaturedDaycare/FeaturedDaycare.css'
import FeaturedDaycare from "./FeaturedDaycare/FeaturedDaycare";

function Home() {
  return(
    <>
    <div className="home">
      <div className= "about">
        <h4>About DaytaCare</h4>
        <img className="aboutImg" src="https://via.placeholder.com/550x300" alt="placeholder"/>
      </div>

      <div>
        <h5>Featured Daycares</h5>
        <FeaturedDaycare/>
      </div>
    </div>
    </>
  )
}

export default Home;