// import './index.css';

// const Playlist = ({ playlist }) => {
//   return (
//     <div>
//       <ul>
//         {playlist.map((play, index) => (
//           <li key={index}>
//             <h1>{play.name}</h1>
//             <h1>{play.description}</h1>
//             <h1>{play.postId}</h1>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Playlist;

import './index.css';
import image1 from '../../assets/image 49.png'
import image2 from '../../assets/image 49 (1).png'
import image3 from '../../assets/image 49 (2).png'
import image4 from '../../assets/image 46.png'
import image5 from '../../assets/image 49 (3).png'
import image6 from '../../assets/image 50.png'
import { BsCollectionPlayFill } from "react-icons/bs";


import { BsThreeDots } from "react-icons/bs";

const images = {
    100170: image1,
    100230: image2,
    100246 : image3,
    100240 :image4,
    100281: image5,
    100352:image6,
    // Map more IDs to images
}
  

const Playlist = ({ playList, onPlaylistClick }) => {
    
  return (
    <div className='playlist-bg-container'>
      <ul className='playlist-container'>
        {playList.map(play => (    
          <li key={play.id} onClick={() => onPlaylistClick(play.postIds)} className='playlist-item'>
            <img src={images[play.id]}  alt={play.name} className="cover-image"/>
            <h1 className='playlist-name'>{play.name}</h1>
            {/* <h1>{play.description}</h1> */}
            <div className='playlist-content'>
                <BsCollectionPlayFill className='play-icon' />
                <p className='playlist-length'>{play.postIds.length} Videos</p>
            </div>
            <BsThreeDots className='dot-icon' />
           
            
            
            
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
