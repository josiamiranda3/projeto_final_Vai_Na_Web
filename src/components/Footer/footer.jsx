import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import S from './footer.module.scss'


export default function footer(){
    return(

        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={face} alt="" /> </a>
                    <a href=""> <img src={insta} alt="" /> </a>
                    <a href=""> <img src={youtube} alt="" /> </a>
                    <a href=""> <img src={twitter} alt="" /> </a>
                    <a href=""> <img src={linkedin} alt="" /> </a>
                </nav>
            </section>

            <section className={S.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}