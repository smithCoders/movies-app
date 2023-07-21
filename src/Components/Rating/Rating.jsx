
import { useState } from 'react';
import './Rating.css';
import Stars from './Stars/Stars';
const styles={
  display:'flex',
  alignItems:'center',
  gap:'30px',
  fontSize:'20px'
}
const startStyles={
  display:'flex',

}


// maxRating=5 specifies 5 even if we don't speficy the value.
const Rating = ({maxRating=5,color='#fcc419',size=30,defaultRating=0}) => {

 const[rating,setRating]=useState(defaultRating);
 const[tempRating,setTempRating]=useState(0);

 const handleRating=(rating)=>{
  setRating(rating)
  
 }
 const textStyle={
  lineHeight:'1',
  margin:'0',
  color:color,
  fontSize:`${size/1.2}px`

}
  return (
    <div style={styles}>
       <div style={startStyles}>
        {Array.from({length:maxRating},(_,i)=>(
        <Stars  key={i} 
        onRate={()=>handleRating(i+1)}  
        onHoverIn={()=>{setTempRating(i+1)}}
        onHoverOut={()=>{setTempRating(0)}}
        full={ tempRating?tempRating>=i+1: rating>=i+1}
        />
       ))}</div>
        <p style={textStyle}>{tempRating|| rating||''}</p>
    </div>
  )
}

export default Rating


