import React from 'react'

const Hostel = ({imgsrc,tittle,text,btnt}) => {
  return (
    <>
      <div className="hotelCards">
          <img src={imgsrc} alt="" srcset="" />
          <h2 className='tittle'>{tittle}</h2>
          <p>{text}</p>
          <div className="btn">
            <button>{btnt}</button>
          </div>
        </div>
      
    </>
  )
}

export default Hostel
