import { FC } from 'react'

interface IBurgerProps {
  onToggle: () => void
}

const BurgerComponent: FC<IBurgerProps> = ({ onToggle }) => {
  return (
    <>
      <button
        className='flex burger gap-1.5 w-8 h-5 flex-col lg:hidden'
        onClick={onToggle}
        id='burger'
      >
        <span className='bg-white block h-0.5 w-6'></span>
        <span className='bg-white block h-0.5 w-6'></span>
        <span className='bg-white block h-0.5 w-6'></span>
      </button>
    </>
  )
}

export default BurgerComponent
