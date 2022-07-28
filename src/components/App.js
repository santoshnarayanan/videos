import SearchBar from "./searchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import React, {useState, useEffect} from "react";

const App = () =>{
  
  const [selectedVideo, setSelectedVideo] = useState(null);

  
  //setSelectedVideo(response.data.items[0]);

  

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className=" eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo}
              videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default App;