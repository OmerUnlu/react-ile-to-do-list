import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <>
        <footer className='footerNew'>
            <p>{date.getFullYear()} | Ömer Ünlü</p>
        </footer>
    </>
  )
}

export default Footer