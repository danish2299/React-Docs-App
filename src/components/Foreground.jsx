import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);

    const props = [
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quidem.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download now" , tagColor: "green"  },
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quidem.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Download now" , tagColor: "green"  },
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quidem.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Upload" , tagColor: "green"  },
        },
    ];
  return (

    <div ref={ref} className='fixed z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
        {props.map((item , index) =>(
            <Card props={item} referance={ref}/>
        ))}

    </div>
    
  )
}

export default Foreground
