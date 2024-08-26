import styles from "../styles/Body/Services.module.css"

export const Services = ()=>{
    return<>
    <section className={styles.section1Main} ><div >
    <h4>Catergory</h4>
    <h1>We Offer Best Services</h1>
    <div className={styles.cards}>
    <div className="card" style={{width: "18rem"}}>
  <img src="./src/assets/img/Section1/Group 48.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>Image Title</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div >
<div className="card" style={{width: "18rem"}}>
  <img src="./src/assets/img/Section1/Group 51.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h6>Image Title</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="./src/assets/img/Section1/Group 50.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>Image Title</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="./src/assets/img/Section1/Group 49.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>Image Title</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>
</section>
    </>
}