import React ,{useState} from 'react'
import Profile_Pic from '../assets/profile.png'
import { useNavigate } from 'react-router-dom'



const Profile = () => {

  const nevigate =useNavigate()
  const [profile,setProfile] =useState({
    name:"",
    email:"",
    bio: "",
    ProfilePicture:"",
  })
  return (
    <div className='max-w-lg mx-auto p-6 border border-grey-300 rounded-lg bg-gray-50'>
        <h2 className='text-center text-2xl font-semibold mb-6'>Profile</h2>

        {/*profile section*/}
        <div className="flex flex-col items-center mb-6">
  <img src={Profile_Pic} alt="Profile" className="mb-4" />
  <input
    type="file"
    accept="image/*"
    className="w-auto bg-transparent mb-4 text-center"
    onChange={(e) => console.log(e.target.files[0])}
  />
</div>

        
    {/*Form fields*/}
    <div className='flex flex-col gap-4 '>
      <div>
        <label className='block text-sm font-medium text-gray-700'>Name</label>
        <input
        type='text'
        name='name'
        placeholder='Enter your name'
        className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500  sm: text-sm'
        >
        </input>
      </div>
      <div>
        <label className='block text-sm font-medium text-grey-700'>Email</label>
        <input
        type='email'

        name='email'
        readOnly
        className='mt-1 p-2 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm sm:text-sm '>
        
        </input>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>Bio</label>
        <textarea 
        name='bio'
        className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        placeholder='Tell us about yourself '></textarea>

      </div>
      </div>  
      <button
      className='mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow'
       onClick={()=> {console.log(profile)
        navigate('/Home_Page')
       }}>Save Changes
      </button>
    </div>
  )
}

export default Profile
