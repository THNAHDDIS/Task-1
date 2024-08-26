import styles from "../styles/Hero/Header.module.css"

export const Header = () =>{
    return <>
    <div className={styles.header}>
        
       <div className={styles.list}>
         <l>Destinations</l>
         <l>Hotels</l>
         <l>Flights</l>
         <l>Bookings</l>
         
       </div>
       
       <div className={styles.login}>
       <l>Login</l>
       <button >Sign Up</button>
       </div>
     
     <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    EN
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item active" href="#">ES</a></li>
    <li><a className="dropdown-item" href="#">J</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>

    
  </ul>
    </div>
    </div>
 
    </>
} 