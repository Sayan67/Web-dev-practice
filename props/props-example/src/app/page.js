import Image from 'next/image'
import Card from './components/card'
export default function Home() {
  let title = ['Hello','Hi','Namaskar']
  let para = ['Have a very nice day sir/maam!','Your day may get brighter as the sun.','Suprobhat']
  let region = ['#england','#usa','#bengali']
  let pic = ['https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/205410/pexels-photo-205410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
  return (
    <>
      <div className='flex gap-5'>
        <Card title={title[0]} para={para[0]} region={region[0] } pic={pic[0]}/>
        <Card title={title[1]} para={para[1]} region={region[1] } pic={pic[1]}/>
        <Card title={title[2]} para={para[2]} region={region[2] } pic={pic[2]}/>

      </div>
    </>
  )
}
