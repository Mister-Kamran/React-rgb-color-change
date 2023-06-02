import React, { useRef, useState,useEffect  } from 'react';

function Test() {
  const color_bg = useRef(null);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const [bg_color] = useState(['red', 'green', 'blue']); 


  useEffect(() => {

    color_bg.current.style.backgroundColor = bg_color[currentColorIndex]; 

  },);


  const handleClick = () => {
    
    color_bg.current.style.backgroundColor = bg_color[currentColorIndex]; 

    setCurrentColorIndex((currentColorIndex + 1));

  if(currentColorIndex===2){
    setCurrentColorIndex(0);
  }
     
  };

  return (
    <div>
      <div className='game_container'>
        <button ref={color_bg} onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default Test;
