import React, { useEffect, useState } from 'react'
import './TimeLine.css'

function TimeLine() {
  const [active,setActive] = useState(false)
  
  const children = document.querySelectorAll('.periods > *');
  const firstChild = children[0];
  const secondChild = children[1];
  const thirdChild = children[2];
  const fourthChild = children[3];
  const fifthChild = children[4];
      const sections = [{start:1500,end:5400,child:firstChild},
    {start:5400,end:9800,child:secondChild},
    {start:9800,end:20400,child:thirdChild},
    {start:20400,end:32400,child:fourthChild},
    {start:32400,end:42000,child:fifthChild}]
    const timeShow = () =>{
      if(window.scrollY >= 1500 && window.scrollY <= 42000 ){
        setActive(true);
      }
      else{
        setActive(false)
      }
     
      sections.forEach((section) =>{ 
      
        const { start, end, child } = section;
        const inView = window.scrollY > start &&  window.scrollY <= end;
        if(inView && child){
          child.classList.add('act');
        } else if (child) {
          child.classList.remove('act');
        }
      })
      
    }
     window.addEventListener('scroll', timeShow);
 
  return (
    <div>
        <div className={active ? "time_act" : "time_act_hide" } >

        
          <div className="timeline" >
            <div className="periods">
              <div onClick={()=> window.scrollTo({ behavior: 'smooth', top: 1600 })} className="hover-underline-animation"><p className='period period-1'>  1872 - 1899</p></div>
              <div onClick={()=> window.scrollTo({ behavior: 'smooth', top: 6400 })} className='hover-underline-animation'> <p className='period period-2'> 1900-1902</p></div>
              <div onClick={()=> window.scrollTo({ behavior: 'smooth', top: 11000 })} className='hover-underline-animation'><p className='period period-3'> 1903-1913</p></div>
              <div onClick={()=> window.scrollTo({ behavior: 'smooth', top: 22300 })} className='hover-underline-animation'><p className='period period-4'>1923 - 1934</p></div>
              <div onClick={()=> window.scrollTo({ behavior: 'smooth', top: 35200 })} className='hover-underline-animation'><p className='period period-5'>1935 - 2016</p></div>
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default TimeLine