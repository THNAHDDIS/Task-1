
import styles from "../styles/Body/Destinations.module.css"

export  const Destinations = () =>{
    return<>
    <section><div className={styles.section2Main}>
     <h4>Top Selling</h4>
     <h1>Top Destinations</h1>
     <div className= {styles.cards} style={{width: "18rem"}}>
     <img src="..." className="card-img-top" alt="..."/>
     <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
     <img src="..." className="card-img-top" alt="..."/>
     <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
     <img src="..." className="card-img-top" alt="..."/>
     <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

  </section>
    </>
}
