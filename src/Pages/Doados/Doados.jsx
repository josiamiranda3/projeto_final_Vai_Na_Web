import S from './doados.module.scss'
import livro from '../../assets/livro.png'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Doados(){

     const [livros,setLivros]= useState([])

     const getLivros = async () =>{
        const responsive = await axios.get("https://desafio-2-api-livros-vai-na-web.onrender.com/livros")
        setLivros(responsive.data)
        
    }
     useEffect(()=>{
        getLivros()
     },[])



    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxcard}>
                
                    <article>
                       <img src={livro} alt="" />
                       <h3>O protagonista</h3>
                       <p>Susanne Andrade</p>
                       <p>Ficção</p>
                    </article>
                    {livros.map((item)=>(
                        <article key={item.id}>
                            <img src={item.imagem_url} alt="" />
                            <h3>{item.titulo}</h3>
                             <p>{item.categoria}</p>
                             <p>{item.autor}</p>
                        </article> 
                    ))}
                
            </section>
        </section>
    )
}