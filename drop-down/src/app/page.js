'use client'
import { useState } from "react"
export default function Home() {
  const [country, setCountry] = useState('hello')
  const countries = [
    { name : "India",
      value: "IN",
      cities : ['Mumbai','Kolkata'] 
    },

    { name : "Pakistan",
      value: "PAK",
      cities : ['Lahore','Karachi'] 
    },

    { name : "Bangladesh",
      value: "BAN",
      cities : ['Dhaka','Chittagong'] 
    }
  ]
  function selectCountry(val){
    for(const i of countries){
      if(i.name === val){
        setCountry(i.name);
      }
    }
  }
  return (
   <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-[30vw] h-[30vh] bg-slate-400 rounded-lg' >
            <form action="" id="myForm" className="">
              <select className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-80%] w-52 text-center rounded-lg h-8" name="" id="" onChange={(e)=>
                { selectCountry(e.target.value)}}>
                <option value="">Select</option>
                {countries.map((item)=>{
                  return (<option className="text-black" id={item.value} value={item.name}>{item.name}</option>)
                })}
              </select>
              <select name="" className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-5 w-52 text-center rounded-lg h-8" id="">
                { countries.filter((i)=>{return i.name===country}).map((item,i)=>{return item.cities})[0].map((item)=>{
                  return (<option>{item}</option>)
                })
                }
                
              </select>

            </form>
        </div>
      </div>
   </>
  )
}
