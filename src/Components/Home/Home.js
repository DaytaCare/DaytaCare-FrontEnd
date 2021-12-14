import './css/Home.css';
import FeaturedDaycare from "./FeaturedDaycare";

function Home() {
  return(
    <>
    <div>
      <div>
        <h4>About DaytaCare</h4>
        <img src="https://via.placeholder.com/550x300" alt="placeholder"/>
      </div>

      <div>
        <h4>Featured Daycares</h4>
        <FeaturedDaycare/>
      </div>
    </div>
    </>
  )
}

export default Home;