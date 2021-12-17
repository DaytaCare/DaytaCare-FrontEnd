import './css/Home.css';
import './FeaturedDaycare/FeaturedDaycare.css'
import FeaturedDaycare from "./FeaturedDaycare/FeaturedDaycare";

function Home() {
  return (
    <>
      <div className="home">
        {/* <img className="aboutImg" src="/DaytaCare.png" alt="DaytaCare Logo"/> */}
        <div className="about">
          <h5>About</h5>
          <p>Finding the right daycare for your child can be a difficult process.
            There are so many daycares to choose from, and each one can have different features that you may want for your child.</p>
          <p>Along with parents, daycare owners also need a place to find new applicants.</p>
          <p>This website allows parent users to search and find daycares based on their preference, and allows daycare owners to add their daycares with specific amenities.
          </p>
        </div>

        <div>
          {/* <h5>Featured Daycares</h5> */}
          <FeaturedDaycare />
        </div>
      </div>
    </>
  )
}

export default Home;