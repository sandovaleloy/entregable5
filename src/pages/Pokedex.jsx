import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'
import usePokedex from '../hooks/usePokedex'
import "./styles/Pokedex.css"

const Pokedex = () => {

  const nameTrainer = useSelector(store => store.nameTrainer)

  const {handleSubmit,
    handleChangeSelect,
    types,
    pokemonsInPage,
    handlepreviousPage,
    handleNextPage,
    pagesInBlock, 
    setCurrentPage,
    lastPage} = usePokedex()
  
  return (
    <main className='pokedexContainer'>
      <p className='pokedexContainer__p'><span className='pokedexContainer__span'><b>welcome {nameTrainer}</b>,</span> <br /> here you can find your favorite pokemon</p>
      <form className='pokedexContainer__form' onSubmit={handleSubmit}>
        <div className='pokedexContainer__div-input'>
          <input className='pokedexContainer__input' type="text" id='pokemonName' placeholder='search your pokemon'/>
          <button className='pokedexContainer__btn'><span className='btn__span'><b>search</b></span></button>
        </div>
        <select className='pokedexContainer__selection' onChange={handleChangeSelect}>
          <option className='pokedexContainer__option1'  value="">All</option>
          {
            types.map(type => <option className='pokedexContainer__option2' key={type.url}>{type.name}</option>)
          }
        </select>
      </form>
      <section className='pokedexContainer__block'>
        {
          pokemonsInPage.map(pokemon => <PokemonCard  key={pokemon.url} pokemonUrl={pokemon.url}/>)
        }
      </section>
      <section className='pokedexFooter'>
        <ul className='pokedexFooter__ul'>
          <li className='pokedexFooter__li1' onClick={handlepreviousPage}><i className='icon__1 bx bx-chevrons-left'></i></li>
          <li className='pokedexFooter__li2' onClick={() => setCurrentPage(1)}><i className='icon__2  bx bx-chevron-left'></i></li>
          {
            pagesInBlock.map(page => <li className='pokedexFooter__li' onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
          }
          <li className='pokedexFooter__li2' onClick={() => setCurrentPage(lastPage)}><i className='icon__2 bx bx-chevron-right'></i></li>
          <li className='pokedexFooter__li1' onClick={handleNextPage}><i className='icon__1 bx bx-chevrons-right'></i></li>
        </ul>
      </section>
    </main>
  )
}

export default Pokedex