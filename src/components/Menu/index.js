import './index.css'
import category from '../../assets/category.png'
import gallery from '../../assets/Image 3.png'
import mouse from '../../assets/mouse-square.png'
import calendar from '../../assets/calendar-2.png'
import setting from '../../assets/Setting.png'
import image from '../../assets/image 18.png'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";


const Menu = () => {
    return (
        <div className='menu-bg-container'>
            <div className='image-container'>
                <img src={image} className='menu-image' alt="Logo" />
                <FaAngleLeft className='left-icon' />
            </div>
            <ul className='menu-list' >
                <div className='menu-list-div'>
                    <img src={category} className='menu-icons' alt="Category" />
                    <li className='menu-list-item'>Revenue</li>
                </div>
                <div className='menu-list-div'>
                    <img src={gallery} className='menu-icons' alt="Gallery" />  
                    <li className='menu-list-item'>Shoppable Video</li>
                    <IoIosArrowDown className='down-icon' />
                </div>
                <div className='menu-list-div'>
                    <img src={gallery} className='menu-icons' alt="Gallery" />  
                    <li className='menu-list-item'>Story</li>
                    <IoIosArrowDown className='down-icon' />
                </div>
                <div className='menu-list-div'>
                    <img src={gallery} className='menu-icons' alt="Gallery" />  
                    <li className='menu-list-item'>Live Commerce</li>
                    <IoIosArrowDown className='down-icon' />
                </div>
                <div className='menu-div'>
                    <div className='menu-list-div'>
                        <img src={gallery} className='menu-icons' alt="Gallery" />  
                        <li className='menu-list-item'>PlayList Manager</li>
                        <IoIosArrowUp className='down-icon' />
                    </div>
                    <p className='menu-para'>Product playlist</p>
                </div>    
                <div className='menu-list-div'>
                    <img src={mouse} className='menu-icons' alt="Mouse Square" />  
                    <li className='menu-list-item'>One Click Post</li>
                </div>
                <div className='menu-list-div'>
                    <img src={calendar} className='menu-icons' alt="Calendar" />  
                    <li className='menu-list-item'>Calendar</li>
                </div>
                <div className='menu-list-div'>
                    <img src={setting} className='menu-icons' alt="Setting" />  
                    <li className='menu-list-item'>Hire Influencer</li>
                </div>
            </ul>
        </div>
    )
}

export default Menu