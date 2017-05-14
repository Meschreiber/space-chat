import React from 'react'
import AssetLoader from './AssetLoader'

const Blossoms = (props) => {
  console.log('props are', props)
  /* -----
    props {
      primaryEmotion
      secondaryEmotion
      primaryIntensity
      secondaryIntensity
    }
  ----- */
  return (
    <div>
      <a-scene>
        <AssetLoader />
        <a-box id="avatar" position="-1 1.25 -5" rotation="45 76 100" depth="3" height="3" width="3" material="src: #gh" normal-texture-repeat="50" color="white" />
        <a-box id="avatar" position="4 3.25 -10" rotation="45 76 100" depth="1.5" height="1.5" width="1.5" material="src: #cliff" color="white" />
        <a-box id="avatar" position="8 1.25 -6" rotation="45 100 68" depth="2" height="2" width="2" material="src: #deer" normal-texture-repeat="50" color="white" />
        <a-sky
          id="sky"
          src="#fractal">
        {/*<a-animation
            begin="sentiment-change"
            attribute="material.color"
            from={prevSkyColor}
            to="#000000"
            ease="ease" />*/}
        </a-sky>
      </a-scene>
    </div>
  )
}

export default Blossoms
