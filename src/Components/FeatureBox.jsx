import React from 'react';

function FeatureBox(props) {
  return (
   <div className='a-box'>
        <div className='a-b-img'>
            
            <img src={props.image} alt="" />
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem hic voluptates minus eum, mollitia optio maxime placeat molestias quibusdam error perspiciatis, voluptate ratione, aliquam ducimus adipisci numquam esse accusamus?</p>
            </div>
        </div>
   </div>
  

  )
}

export default FeatureBox;