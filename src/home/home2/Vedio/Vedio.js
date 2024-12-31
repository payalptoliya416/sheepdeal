import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import './Vedio.css';

function Vedio() {
  return (
    <>
      <div className="mb-[75px] mt-[80px] vedio-home2">
        <div className="container">
          <Player
      playsInline
      poster={require('../../../image/video.png')}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
        </div>
      </div>
    </>
  )
}

export default Vedio
