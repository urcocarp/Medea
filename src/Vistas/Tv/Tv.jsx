import style from './Tv.module.css'
import portada from '../../assets/portada.png'


const Tv =()=>{
    return(
    <div className={style.tvContainer}>
        <section className={style.firstSection}>
         <img src={portada} className={style.imgPortada}></img>
           <div className={style.Links}>
            
                    <a>MENSAJE</a>
                
                    <a>EVENTO</a>
            
                    <a>ARTICULOS</a>
            
        

           </div>
        </section>
          <section className={style.word}>
           <h1>El poder de la palabra</h1>
           <div className={style.words}>
            <h2>Raul Villareal</h2>
            <h2> 24.11.2024</h2>
           </div>
          </section>

        </div>

    )
}
export default Tv