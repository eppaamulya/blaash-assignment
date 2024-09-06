import './index.css';
import { BsCollectionPlayFill } from "react-icons/bs";
import { PiDotsThreeOutline } from "react-icons/pi";

import blue from '../../assets/image 48.png'
const images = {
  100170 : 'https://res.cloudinary.com/dq9pyd1fh/image/upload/v1725629714/sorqwnqz6zjl9t9lny92.png',
  100230 : 'https://res.cloudinary.com/dq9pyd1fh/image/upload/v1725629742/n4y1jutcny8oci1dzas7.png',
  100246 : 'https://res.cloudinary.com/dq9pyd1fh/image/upload/v1725629795/ax3wqyq0y3qfk6mpacrv.png',
  100240 : 'https://res.cloudinary.com/dq9pyd1fh/image/upload/v1725629865/dlglr9ani2jyasexiuku.png',
  100281 : 'https://res.cloudinary.com/dq9pyd1fh/image/upload/v1725629742/n4y1jutcny8oci1dzas7.png',
  100352 : 'https://res.cloudinary.com/dq9pyd1fh/image/upload/v1725629496/ng6vhyzoyvn4kpyunauh.png',
}
  
const Playlist = ({ playList, onPlaylistClick }) => {   
  return (
    <div className='playlist-bg-container'>
      <ul className='playlist-container'>
        {playList.map(play => (    
          <li key={play.id} onClick={() => onPlaylistClick(play.postIds)} className='playlist-item' style={{width: '240px', height: '180px', backgroundImage: `url(${images[play.id]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className='details-container'>
              <div className='playlist-content'>
                <img src={blue} className='blue' alt="Blue" />
                <h1 className='playlist-name'>{play.name}</h1>
              </div> 
              <div className='playlist-content-1'>
                <BsCollectionPlayFill className='play-icon' />
                <p className='playlist-length'>{play.postIds.length} {play.postIds.length === 1 ? 'Video': 'Videos'}</p>
              </div>
            </div>
            <PiDotsThreeOutline className='dot-icon' />   
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
