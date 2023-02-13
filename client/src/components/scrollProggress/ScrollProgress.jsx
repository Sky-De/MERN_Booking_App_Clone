import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';
import "./scrollProgress.scss"

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  setProgress(scrollPercentRounded);
});
  return (
    <div className="scrollProgress">
      <LinearProgress variant="determinate" value={progress} />
    </div>
  )
}

export default ScrollProgress