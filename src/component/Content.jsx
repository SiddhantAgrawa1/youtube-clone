import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import InfiniteScroll from 'react-infinite-scroll-component';

import '../css/Content.css';

const Content = () => {

    const [videoList, setVideoList] = useState([]);
    const [video_limit,setVideoLimit] = useState(30);
    const [hover,setHover] = useState();

    const fetchMoreData = () => {
        setVideoLimit(Math.round(Math.random() * 100));
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${video_limit}&regionCode=In&key=AIzaSyB9VhpvToOA-a5Ua798MtkGldhWMGtu2rQ`;

        fetch(url)
        .then((data) => data.json())
        .then((data) => setVideoList(data.items))
    }

    useEffect(() => {
        fetchMoreData();
    }, [])

    const opts = {
        height: '200',
        width: '293',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    function videoChange(e) {
        let id = e.currentTarget.id
        console.log(id);
        setTimeout(() => {
            setHover(parseInt(id));
        },500)
    }
    console.log(videoList);
    return (
        <div className="content">
             <InfiniteScroll
                className="infi-content"
                style={{ "height": "calc(100vh - 100px)", "overflow": "auto"}}
                dataLength={videoList.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}>

            {  (videoList.length > 1) ? videoList.map((data,index) => 
                <div className="videos" key={index}>
                
                    {hover == index ? 
                         <YouTube opts={opts}  videoId={data.id}/> :
                        <img className="video" id={index} src={data.snippet.thumbnails.medium.url} onClick={(e) => videoChange(e)}></img>
                    }
                    <h3>{(data.snippet.title.length > 100) ? data.snippet.title : data.snippet.title.substring(0,50)+"..."}</h3>
                    <div id="profile-cont">
                        <div id="profile">
                            <img src={require('../images/profile.png')} width="33px"></img>
                        </div>
                        <div id="channel">
                            {data.snippet.channelTitle} <br/>
                            {data.statistics.viewCount > 1000 ? (Math.round(data.statistics.viewCount / 10000) + "k") :  data.statistics.viewCount} views 
                            &nbsp; {Math.round((new Date().getDate() - new Date(data.snippet.publishedAt).getDate()))} days ago
                        </div>
                    </div>
                    
                </div>) : null}
            </InfiniteScroll> 
        </div>
    )
}

export default Content;