import './css/Home.css';
import './FeaturedDaycare/FeaturedDaycare.css'
import FeaturedDaycare from "./FeaturedDaycare/FeaturedDaycare";

function Home() {
  return(
    <>
      <div className="home">
        <img className="aboutImg" src="/DaytaCare.png" alt="DaytaCare Logo"/>
        <div className="about">
          <h5>About</h5>

          <p>Cupcake ipsum dolor sit amet topping gingerbread. Powder donut chocolate cake cupcake caramels liquorice cookie gummi bears. Ice cream lollipop chocolate pastry ice cream muffin cupcake lollipop. Sweet roll dessert pie sweet roll soufflé tiramisu. Chocolate pudding cookie cupcake marzipan liquorice sugar plum. Croissant macaroon tart cheesecake jelly halvah sugar plum sesame snaps. Tart jujubes bear claw dessert icing chupa chups bonbon muffin. Lollipop toffee bonbon chocolate cake cake pastry macaroon.
          </p>
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