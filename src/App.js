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
    isSliderOpen: false,
    isMenuCollapsed: true 
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

      this.setState({ playList: updatedData });
      this.getFeedlist();
    }
  };

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

    this.setState({ filteredFeedlist , isSliderOpen : true })
  };

  closeSlider = () => {
    this.setState({isSliderOpen: false})
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuCollapsed: !prevState.isMenuCollapsed
    }));
  }


  render() {
    const { playList, filteredFeedlist, isSliderOpen , isMenuCollapsed} = this.state;

    return (
      <div className='App'>
        <Menu isCollapsed={isMenuCollapsed} toggleMenu={this.toggleMenu} />
        <div className={`App-2 ${isMenuCollapsed ? '' : 'collapsed'}`}>
          <Header />
          <div className='div-container'>
            <h1 className='heading'>Product Playlists</h1>
            <div className='button'><MdOutlineLink className='icony' /> Generate Code</div>
          </div>
          <div className='App-3'>
            <Playlist playList={playList} onPlaylistClick={this.handlePlaylistClick} />
            {isSliderOpen && <Slider feedlist={filteredFeedlist} closeSlider={this.closeSlider} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
