import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>


        <h2 className='font-palanquin text-4xl capitalize font-bold'>
          We Provide You
          <span className='text-coral-red'> Super</span>

          <br />
          <span className='text-coral-red'> Quality</span>
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, cupiditate itaque cum, ab soluta officia repudiandae laborum molestiae consequuntur fuga obcaecati earum maiores repellendus. Id, praesentium sequi! Debitis, perferendis beatae?
          Quae dolorum laboriosam voluptates sapiente repellendus,
        </p>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae qui doloremque laboriosam! Nostrum reiciendis quibusdam sunt quas,
        </p>

        <div className='mt-11 '>
          <Button label='View Detal' />
        </div>

      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe8" width={570} height={522}/>
      </div>
    </section>)
}

export default SuperQuality