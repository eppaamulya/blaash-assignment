import './index.css'
import { IoClose } from "react-icons/io5";
import { IoSyncSharp } from "react-icons/io5";


const Slider = ({feedlist, closeSlider}) => {
  return (
    <div className='slider-bg-container'>
      <button className="close-button" onClick={closeSlider}><IoClose className='close-icon' /></button>
      <p className='feed-para-1'>Thumbnail Title</p>
      <p className='feed-para-2'>Get Sporty in Style</p>
      <p className='feed-para-1'>Video status</p>
      <div className='input-div'>
        <input type="radio" name="rad" id="active" value="Active" checked className='feed-para-3' />
        <label for="active" className='feed-para-4'>Active</label>
        <input type="radio" name="rad" id="inactive" value="Inactive" class="ml-2" className='feed-para-3'/>
        <label for="inactive" className='feed-para-4'>Inactive</label>
      </div>
      
      <p className='feed-para-5'>Product List</p>
      <ul className='slider-list'>
        {feedlist.map((feed, index) => (
          <li key={index} className='slider-list-item'>
            <img src={feed.thumbnailUrl} className='slider-image' alt="Thumbnail Url" />  
            <div className='slider-cont'>
              <p className='slider-name'>{feed.thumbnailTitle}</p> 
              <p className='slider-time'>{feed.videoDuration} : 00</p>
              <p className='slider-name-2'>Products Attached : 5</p>
            </div>
            <div className='check'>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="16" height="16" rx="4" stroke="white" stroke-opacity="0.8" stroke-width="2"/>
              </svg>
            </div>
          </li>
        ))}
      </ul>
      <div className='down-btn'><IoSyncSharp className='sync-icon' />Update Playlist</div>
    </div>
  )
}

export default Slider