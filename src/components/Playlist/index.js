import './index.css';
import { BsCollectionPlayFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";


const images = {
  100170 : "https://d33zkbf3uttm0b.cloudfront.net/i/Copy+of+why+tyke.png",
  100230 : "https://d33zkbf3uttm0b.cloudfront.net/i/ASDFS/5473e4a5-6312-46bf-8446-7b655eb9e587.png",
  100246 : "https://d33zkbf3uttm0b.cloudfront.net/i/ASDFS/7c36a2a6-ee48-4673-9465-4fd7133d9499.png",
  100240 : "https://d33zkbf3uttm0b.cloudfront.net/i/ASDFS/518b1571-975f-4b0c-86bb-64eee2651e87.png",
  100281 : "https://d33zkbf3uttm0b.cloudfront.net/i/ASDFS/15f34203-da25-4190-a546-9a7df168ad57.png",
  100352 : "https://d33zkbf3uttm0b.cloudfront.net/i/TYKE/1t.png",
  
}
  
const Playlist = ({ playList, onPlaylistClick }) => {   
  return (
    <div className='playlist-bg-container'>
      <ul className='playlist-container'>
        {playList.map(play => (    
          <li key={play.id} onClick={() => onPlaylistClick(play.postIds)} className='playlist-item'>
            <img src={images[play.id]}  alt={play.name} className="cover-image"/>
            <h1 className='playlist-name'>{play.name}</h1>
            <div className='playlist-content'>
              <BsCollectionPlayFill className='play-icon' />
              <p className='playlist-length'>{play.postIds.length} {play.postIds.length === 1 ? 'Video': 'Videos'}</p>
            </div>
            <BsThreeDots className='dot-icon' />   
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
