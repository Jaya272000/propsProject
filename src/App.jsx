import './App.css'
import React from 'react'
import Hostel from './Component/Hostel'

const App = () => {
  return (
    <div className='container'>
        <h1 className='heading'>Hotel Rooms</h1>
        <Hostel
        imgsrc="https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg" alt='img2'
        tittle='Hotel Palazo'
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at officia animi aliquam nam, numquam quibusdam enim beatae vero molestiae quas aspernatur ratione asperiores quam qui fugiat libero eum provident."
        btnt='Read More'
        />
        <Hostel
        imgsrc="https://wallpapershome.com/images/pages/ico_h/19258.jpg" alt="img3"
        tittle='Hotel Plus'
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at officia animi aliquam nam, numquam quibusdam enim beatae vero molestiae quas aspernatur ratione asperiores quam qui fugiat libero eum provident."
        btnt='Read More'
        />
        <Hostel
        imgsrc="https://images7.alphacoders.com/362/362619.jpg" alt="img3"
        tittle='Hotel Luxury'
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at officia animi aliquam nam, numquam quibusdam enim beatae vero molestiae quas aspernatur ratione asperiores quam qui fugiat libero eum provident."
        btnt='Read More'
        />
        <Hostel
        imgsrc="https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_640.jpg" alt="img3"
        tittle='Hotel Pixbay'
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at officia animi aliquam nam, numquam quibusdam enim beatae vero molestiae quas aspernatur ratione asperiores quam qui fugiat libero eum provident."
        btnt='Read More'
        />
        
    </div>
  )
}

export default App
