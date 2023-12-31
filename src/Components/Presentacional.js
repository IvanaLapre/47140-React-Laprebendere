import React from 'react'

function Presentacional(props) {
  return (
    <div>
        {props.productos.lenght = 0 ? <p>cargando</p> : props.productos.map((item,i) =>{
            return (
                <article key={i} className="card">
                    <h2>{item.title} - ${item.price}</h2>
                    <img src={item.image} alt={item.title}/>
                    </article>
            )
        })}
    </div>
  )
}

export default Presentacional