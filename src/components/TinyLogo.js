import React from 'react'

const TinyLogo = ({logoColor}) => {
  return (
    <article className='tiny-wall-logo'>
    <div className='tiny-wall1' color={logoColor}></div>
    <div className='tiny-wall2' color={logoColor}></div>
    </article>
  )
}

export default TinyLogo