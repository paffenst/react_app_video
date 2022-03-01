import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        <div>Loading...</div>
    }

    return <div>{video}</div>
   // return <div>{video.snippet.title}</div>
};

export default VideoDetail;