import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {
  const [pokemon, setpokemon] = useState()

  const {id} = useParams()

  const getPercentBar = (stat) => {
    const percent = (stat * 100) / 150
    return `${percent}%`
  }

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(url)
      .then((res) => setpokemon(res.data))
      .catch((err) => console.log(err))
  }, [])
  
  return (
    <main className={`pokemon__main border-${pokemon?.types[0].type.name}`}>
      <section className={`pokemon__main-section bg-lg-${pokemon?.types[0].type.name}`}>
        <section className='pokemon__main-div'>
          <div className='pokemon__main-img'>
            <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
          </div>
        </section>
      </section>

      <section className='pokemon__container'>
        <div className='pokemon__container-superior'>
          <h2 className='pokemon__container-number'># {pokemon?.id}</h2>
          <div className='pokemon__container-inter'>
            <hr className='pokemon__container-hr1'/>
            <h2 className='pokemon__container-name'>{pokemon?.name}</h2>
            <hr className='pokemon__container-hr2'/>
          </div>
        </div>

        <div className='pokemon__container-dimen'>
          <div className='pokemon__container-dimen1'>
            <h5 className='pokemon__container-title'>weigth</h5>
            <h4 className='pokemon__container-sifra'>{pokemon?.weight}</h4>
          </div>
          <div className='pokemon__container-dimen2'>
            <h5 className='pokemon__container-title'>heigth</h5>
            <h4 className='pokemon__container-sifra'>{pokemon?.height}</h4>
          </div>
        </div>

        <div className='pokemon__container-type'>
          <div>
            <h3 className='pokemon__type-title'>type</h3>
            <div className="pokemon__type">
              {
                pokemon?.types.map(type => <div key={type.type.name}><span className={`pokemon__type-span bg-lg-${pokemon?.types[0].type.name}`}>{type.type.name}</span></div>)
              }
            </div>
          </div>
          <div>
          <h3 className='pokemon__type-title'>abilities</h3>
            <div className='pokemon__abilities'>
              {
                pokemon?.abilities.map(ability => <div key={ability.ability.name}><span className='pokemon__abilities-span'>{ability.ability.name}</span></div>)
              }
            </div>
          </div>
        </div>

        <section className='pokemon__stats'>
          <div className='pokemon__stats-prio'>
            <h2 className='pokemon__stats-title'>Stats</h2>
            <hr className='pokemon__stats-hr'/>
          </div>
          
          <section className='pokemon__stats-info'>
            
            {
              pokemon?.stats.map(stat => (
                <article className='pokemon__stat' key={stat.stat.name}>
                  <div className='pokemon__stat-header'>
                    <h4 className='pokemon__stat-name'>{stat.stat.name}</h4>
                    <h5 className='pokemon__stat-value'>{stat.base_stat}/255</h5>
                  </div>
                  <div className='pokemon__stat-bar'>
                    <div className='pokemon__stat-barGray'>
                      <div className='pokemon__stat-barProgress' style={{width: getPercentBar(stat.base_stat)}}></div>
                    </div>
                  </div>
                </article>
              ))
            }
            
          </section>
        </section>

      </section>
    </main>
  )
}

export default Pokemon