import { RiPlayCircleFill } from "react-icons/ri";
import styles from "../styles/Hero/Banner.module.css"

export const Banner = ()=>{
    return <>
     <div className={styles.banner}>
        <div className = {styles.titles}>
             <p>BEST DESTINATIONS AROUND THE WORLD</p>
             <h1 className={styles.heading}>Travel, enjoy
             and live a new 
             full life </h1>
            <div className={styles.findMore}>
          <button>Find more</button>
          <button><RiPlayCircleFill /></button>
          </div>
        </div>
        <div className={styles.traveller}>
        <img src="./src/assets/img/Hero/Image (1).png" alt="Traveller" />
        </div>
       
      </div>
    </>
}  