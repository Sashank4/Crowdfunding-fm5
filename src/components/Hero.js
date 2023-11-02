import React, {useState} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './Hero.css'
import logo from '../images/logo-mastercraft.svg'
import iconBookMark from '../images/icon-bookmark.svg'
import closeModal from '../images/icon-close-modal.svg'
import Pledjedata from './PledjeData.js'
import Thanks from '../images/icon-check.svg'
const Hero = () => {
  
  const [bookMark, setbookMark] = useState(false)
  const [project, setProject] = useState(false)
  const [pledje,setPledje] = useState(0);
  const [thankyou, setThankyou] = useState(false)

  const handleClick=(id)=>{
    setPledje(id);

  }

  const Thankyou = () => {
    setProject(false)
    setThankyou(true)
  }
  return (
    <>
    <div className='bg-slate-100'>
    <div className='w-11/12 p-4 bg-white rounded-2xl mx-auto md:w-1/2 '>
      <img className='mx-auto -mt-10'  src={logo} alt='logo' />
      <h1 className='font-bold text-3xl my-4'>Mastercraft Bamboo Monitor Riser</h1>
      <p className='text-slate-400'>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
      <div className='buttons flex justify-around mt-8 mb-4'>
        <button onClick={()=>setProject(!project)} className='button px-8 rounded-full'><p className='text-white font-semibold'>Back this Project</p></button>
        <button className='flex' onClick={()=>setbookMark(!bookMark)}> 
          <img className='' src={iconBookMark} alt='BookMarkIcon' /> 
          <p className='-ml-12 hidden md:block  font-semibold my-auto pl-14 bg-slate-200 p-4 rounded-full text-slate-800'>{bookMark?'Bookmarked':'Bookmark'}</p>
          </button>

      </div>

      
    </div>

    <div className='w-11/12 mx-auto p-4 my-4 bg-white rounded-3xl md:w-1/2'>
        <div className='flex justify-around mt-6 flex-col md:flex-row '>
              <div className='w-1/3 border-b py-2  border-grey400 mx-auto md:border-r border-b-0 '>
                <p className='font-bold text-3xl  '>$89,914</p>
                <p className='text-slate-400 py-2'>of $100,000 backed</p>
              </div>
              <div className='w-1/3 border-b py-2 border-grey400 mx-auto md:border-r border-b-0  '>
                <p className='font-bold text-3xl  '>5007</p>
                <p className='text-slate-400 py-2'>total backers</p>
              </div>
              <div className='w-1/3 mx-auto'> 
                <p className='font-bold text-3xl '>56</p>
                <p className='text-slate-400 py-2'>Days left</p>
              </div>
        </div>

        <ProgressBar 
        
        className="py-6 mx-12"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName="label"
        />

      </div>

      <div className='w-11/12 mx-auto p-4 my-4 bg-white rounded-3xl md:w-1/2'>
        <p className='font-bold text-2xl text-left m-4 '>About this project</p>
        <p className='text-sm text-slate-500 text-left mx-4 my-8 leading-6'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more
         comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and
          make you more comfortable while at work, helping you stay focused on the task at hand. </p>
        <p className='text-sm text-slate-500 text-left mx-4 my-8 leading-6'>Featuring artisan craftsmanship, 
        the simplicity of design creates extra desk space below your computer to allow notepads, 
        pens, and USB sticks to be stored under the stand.</p>

        <div>
        {Pledjedata.map((items,index)=>(
          <>
          <div key={items.id} className={items.number?'p-8 border-2 m-4 rounded-2xl':'flat p-8 border-2 m-4 rounded-2xl'}>

            <div className='flex justify-between'>
              <p className='font-bold'>{items.pledgeName}</p>
              <p className='description font-semibold'>Pledje for ${items.amount} or more</p>
            </div>

            <p className=' text-left text-slate-500 py-6'>{items.description}</p>

            <div className='flex justify-between flex-col md:flex-row '>
              <p className='text-slate-500'><span className='text-black text-3xl font-semibold'>{items.number}</span> left</p>
              <button className='button p-2 px-6 rounded-full bg-red-500'><p className='text-white font-semibold'>{items.number?'Select Reward':'Out of Stock'}</p></button>
            </div>
          </div>  
          </>
        ))}
      </div>
      </div>
    </div>

    { project && <div className='popup absolute top-0 w-11/12 left-1/4 p-4'>
      <div className='w-11/12 mx-auto mt-36 bg-white rounded-2xl md:w-1/2'>

      <div className='flex justify-between items-center'>
        <p className='text-left px-4 py-4 font-semibold'>Back This Project</p>
        <img onClick={()=>setProject(false)} className='p-4 cursor-pointer' src={closeModal} alt='closeModal'/>
      </div> 
      <p className='text-left px-4 text-slate-500'>Want to support us in bringing Mastercraft Bamboo Monitor rise out of the world</p>

      <div  className='p-8 border-2 m-4 rounded-2xl'>
          <p className='text-left font-bold'>Pledje with no reward</p>
          <p className=' text-left text-slate-500 py-2'>
             Choose to support us without a reward if you simply believe in our project. As a backer, you will be 
             signed up to recieve product updates via email 
          </p>

         
        </div> 
      {Pledjedata.map((items,index)=>(
        <>
        <div key={items.id} onClick={()=>handleClick(items.id)} className={items.number?'p-8 border-2 m-4 rounded-2xl':'flat p-8 border-2 m-4 rounded-2xl'}>
          
          <div className='flex '>
            <div className='h-6 w-6 border-4 rounded-full '></div>
            <p className='font-bold flex-grow text-left px-4'>{items.pledgeName}</p>
            <p className='description font-semibold self-end'>Pledje for ${items.amount} or more</p>
          </div>

          <p className=' text-left text-slate-500 py-6'>{items.description}</p>
          <p className='text-slate-500 text-left'><span className='text-black text-3xl font-semibold'>{items.number}</span> left</p>

          { pledje===items.id && items.number > 0 &&
            <div className=''>
                <p className='text-slate-500 p-8'>Enter you pledje</p>
                <div className='flex justify-between px-4'>
                  <p className='p-4 border-2 rounded-full font-semibold'>$ {items.amount}</p>
                  <button onClick={()=>Thankyou()} className='button p-4 rounded-full text-white font-semibold'>Continue</button>
                </div>
            </div>
          }
        </div>  
        </>
      ))}
    </div>

    
      </div>
    }
    { thankyou && <div className='thankspopup absolute top-0'>
        <div className='mx-auto p-4 rounded-2xl left-1/4 mt-36 w-80 bg-white'>
          <img className='mx-auto' src={Thanks} alt='thanks'/>
          <p className='font-bold text-3xl py-4'>Thank for your support!</p>
          <p className='text-slate-500 pb-4'>Your pledje brings us one step closeer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once campainge is completed</p>
          <button className='button text-white font-semibold p-4 rounded-full' onClick={()=>setThankyou(false)}>Got it</button>
        </div>
      </div>

    }
    </>
  )
}

export default Hero