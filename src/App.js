// import './App.css';
// import Header from './components/Header';
// import Menu from './components/Menu';
// import Playlist from './components/Playlist';
// import Slider from './components/Slider';
// import { MdOutlineLink } from "react-icons/md";
// import { Component } from 'react';

// class App extends Component {

//   state = {
//     playlist: [],
//     postlist: []
//   }

//   componentDidMount() {
//     this.getPlaylist()
    
    
//   }

//   getPlaylist = async () => {
//     const apiUrl = "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList"
//     const options = {
//       headers: {
//        'Content-Type': 'application/json',
//         'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
//         'X-Tenant-Key': 'TYKE070323',
//       },
//       method: 'POST',
//       body: JSON.stringify({
//         Content_Type: 2
//       })
      
//     }
//     const response = await fetch(apiUrl, options)
//     if (response.ok) {
//       const fetchedData = await response.json()
//       console.log(fetchedData)
//       const updatedData = fetchedData.data.map(datay => ({
//         id : datay.playListId,
//         name: datay.Name,
//         description: datay.Description,
//         postIds: datay.Post_Ids
//       }))
      
       
//       this.setState({playlist: updatedData})
//       this.getPostlist(updatedData.map(item => item.postIds))
//     }
    
    
//   }


//   getPostlist = async (postIds) => {
//     const apiUrl1 = "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1"
//     const options1 = {
//       headers: {
//         'Content-Type': 'application/json',
//             'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
//             'X-Tenant-Key': 'TYKE070323',
//       },
//       method: 'POST',
//       body: JSON.stringify({
//         Index: 1,
//             ContentType: [2],
//             IsTagged: false,
//             URL: "",
//       })
      
//     }
//     const response1 = await fetch(apiUrl1, options1)
//     if (response1.ok) {
//       const fetchedData1 = await response1.json()
//       console.log(fetchedData1)
//       const updatedData1 = fetchedData1.data.Feeds.map(feedy => ({
//         productId : feedy.productId,
//         thumbnailTitle: feedy.Thumbnail_Title,
//         thumbnailUrl: feedy.Thumbnail_URL,
//         videoDuration: feedy.Video_duration
//       }))
//       this.setState({postlist: updatedData1})
//     }
//   }

//   render() {

//     const {playlist, postlist} = this.state
//     return (
//       <div className='App'>
//         <Menu />
//         <div className='App-2'>
//         <Header />
//         <div className='div-container'>
//             <h1 className='heading'>Produt Playlists</h1>
//             <div className='button'><MdOutlineLink className='icony' /> Generate Code</div>
//           </div>
//         <div className='App-3'>
//           <Playlist playlist={playlist} />
//           <Slider postlist={postlist} />
//         </div>
//         </div>
        
//       </div>
//     )
//   }
// }

// export default App;



import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Playlist from './components/Playlist';
import Slider from './components/Slider';
import { MdOutlineLink } from "react-icons/md";
import { Component } from 'react';

class App extends Component {
  state = {
    playList: [],
    feedlist: [],
    filteredFeedlist: [],
    isSliderOpen: false
  };

  componentDidMount() {
    this.getPlaylist();
  }

  getPlaylist = async () => {
    const apiUrl = "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList";
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'TYKE070323',
      },
      method: 'POST',
      body: JSON.stringify({
        Content_Type: 2
      })
    };

    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      console.log(fetchedData);

      const updatedData = fetchedData.data.map(datay => ({
        id: datay.PlayListId,
        name: datay.Name,
        description: datay.Description,
        postIds: datay.Post_Ids
      }));

      // const firstPostId = updatedData.length > 0 ? updatedData[0].postIds[0] : null;
      // const coverImage = firstPostId ? await this.getCoverImage(firstPostId) : null;
      
      // updatedData[0].coverImage = coverImage;

      this.setState({ playList: updatedData });

      this.getFeedlist();
    }
  };


  // getCoverImage = async (postId) => {
  //   const apiUrl1 = "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1";
  //   const options1 = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
  //       'X-Tenant-Key': 'TYKE070323',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({ Index: 1, ContentType: [2], IsTagged: false, URL: "" })
  //   };
  //   const response1 = await fetch(apiUrl1, options1);
  //   if (response1.ok) {
  //     const fetchedData1 = await response1.json();
  //     const feed = fetchedData1.Feeds.find(feedy => feedy.EngagementPostId === postId);
  //     return feed ? feed.Thumbnail_URL : null;
  //   }
  //   return null;
  // }


  getFeedlist = async () => {
    this.setState({isSliderOpen : false})
    const apiUrl1 = "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1";
    const options1 = {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'TYKE070323',
      },
      method: 'POST',
      body: JSON.stringify({
        Index: 1,
        ContentType: [2],
        IsTagged: false,
        URL: "",
      })
    };

    const response1 = await fetch(apiUrl1, options1);
    if (response1.ok) {
      const fetchedData1 = await response1.json();
      console.log(fetchedData1);

      const updatedData1 = (fetchedData1.data.Feeds || []).map(feedy => ({
        engagementPostId: feedy.EngagementPostId,
        thumbnailTitle: feedy.Thumbnail_Title,
        thumbnailUrl: feedy.Thumbnail_URL,
        videoDuration: feedy.Video_duration
      }));

      this.setState({ feedlist: updatedData1 });
    }
  };

  handlePlaylistClick = (postIds) => {
    const { feedlist } = this.state;
    const filteredFeedlist = feedlist.filter(post => postIds.includes(post.engagementPostId));

    this.setState({ filteredFeedlist });
    this.setState(prevState => ({
      isSliderOpen: !prevState.isSliderOpen,
    }));
  };

  closeSlider = () => {
    this.setState({isSliderOpen: false})
  }

  render() {
    const { playList, filteredFeedlist, isSliderOpen } = this.state;

    return (
      <div className='App'>
        <Menu />
        <div className='App-2'>
          <Header />
          <div className='div-container'>
            <h1 className='heading'>Product Playlists</h1>
            <div className='button'><MdOutlineLink className='icony' /> Generate Code</div>
          </div>
          <div className='App-3'>
            <Playlist playList={playList} onPlaylistClick={this.handlePlaylistClick} />
            {isSliderOpen && <Slider feedlist={filteredFeedlist} closeSlider={this.closeSlider} playList={playList}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
