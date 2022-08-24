import React from 'react'
import './rawpics.css'
import pic from '../Assets/gift1.png'
import pic2 from '../Assets/surfexel2.png'
import pic3 from '../Assets/phone3.png'
import pic4 from '../Assets/fasion4.png'
import pic5 from '../Assets/lap5.png'
import pic6 from '../Assets/cooker6.png'
import pic7 from '../Assets/tv7.png'
import pic8 from '../Assets/plane8.png'
import pic9 from '../Assets/last.png'



function RawPics() {
    return (
        <div className='row-box'>
            <div className="small-img">
                <img src={pic} alt="cc" id='pic1' />
                <h6>Top Offers</h6>
            </div>
            <div className="small-img">
                <img src={pic2} alt="cc" id='pic2' />
                <h6 id='glossery'>Grocery</h6>
            </div>
            <div className="small-img">
                <img src={pic3} alt="cc" id='pic3' />
                <h6 id='mobiles'>Mobiles</h6>
            </div>
            <div className="small-img">
                <img src={pic4} alt="cc" id='pic4' />
                <h6 id='fasion'>Fashion</h6>
            </div>
            <div className="small-img">
                <img src={pic5} alt="cc" id='pic5' />
                <h6>Electronics</h6>
            </div>
            <div className="small-img">
                <img src={pic6} alt="cc" id='pic6' />
                <h6 id='home'>Home</h6>
            </div>
            <div className="small-img">
                <img src={pic7} alt="cc" id='pic7' />
                <h6 id='applinces'>Appliances</h6>
            </div>
            <div className="small-img">
                <img src={pic8} alt="cc" id='pic8' />
                <h6 id='travel'>Travel</h6>
            </div>
            <div className="small-img">
                <img src={pic9} alt="cc" id='pic9' />
                <h6>Beauty, Toys & More</h6>
            </div>

        </div>
    )
}

export default RawPics