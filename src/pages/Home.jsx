import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./styles/Home.css"

const Home = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameTrainer = e.target.nameTrainer.value
        dispatch(setNameTrainerGlobal(nameTrainer))
    }

  return (
    <main  className='home'>
        <section className='home__section'>
            <div className='home__img'>
                <img src="/images/pokedex.png" alt="" />
            </div>
            <h2 className='home__title'>¡Hello trainer!</h2>
            <p className='home__p'>Give me your name to star!</p>
            <form className='home__form' onSubmit={handleSubmit}>
                <input className='home__input' required autoComplete='off' id='nameTrainer' type="text" placeholder='your name...' />
                <button className='home__btn'>start</button>
            </form>
            <div>
                <div className='home__red'></div>
                <div className='home__black'>
                    <div className='home__pokeball'></div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home