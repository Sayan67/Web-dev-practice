import React from 'react'

function Card(props) {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full mx-auto items-center" src={props.pic} alt="Sunset in the mountains" />
        <div className="px-6 py-4 mx-auto items-center">
        <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            {props.para}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 mx-auto">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.region}</span>
          
        </div>
      </div>
    </>
  )
}

export default Card