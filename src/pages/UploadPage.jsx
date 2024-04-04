import React, { useState, useRef } from 'react';
import SecondNavbar from '../components/SecondNavbar';
import { IoIosCamera } from "react-icons/io";

const UploadPage = () => {
    const [avatar, setAvatar] = useState(null);
    const [location, setLocation] = useState('');
    const inputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        inputRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className=' w-[100vw] h-[100vh] flex flex-col items-center'>
            <SecondNavbar />
            <div className="container mx-auto px-[6%] max-w-lg my-auto max-h-[100%] py-[3%] ">
                <h2 className="text-4xl font-bold mb-2">Welcome, let's create your profile!</h2>
                <p className="mb-4">Let others get to know you better. You can do these later.</p>
                <form onSubmit={handleSubmit}>
                    <div className="profile-section mb- flex items-start ">
                        <div className="avatar-container relative mr-4 flex justify-between items-center gap-5">
                            <div className=''>
                                <h2 className='mb-3'>Add an Avatar</h2>
                                <div className="max-h-40 max-w-50 rounded-full border-4 border-dotted border-gray-400 flex items-center justify-center text-gray-400">
                                    {avatar ? (
                                        <img src={avatar} alt="Avatar" className="h-full w-full rounded-full object-cover" />
                                    ) : (
                                        <IoIosCamera className='text-3xl' />

                                    )}
                                </div>
                            </div>
                            <div className='flex flex-col  items-start' >

                                <input type="file" id="avatar" accept="image/*" onChange={handleImageChange} className="hidden" ref={inputRef} />
                                <button type='button' id='uploadBtn' className='bg-white text-black px-2 py-1 rounded font-semibold border-2 border-[#c0c0c0]' onClick={handleButtonClick}>Choose image</button>
                                <p className='text-sm text-[#969696] mt-2'>&gt; Or select one of our defaults</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h4 className="text-lg font-semibold mb-2">Add a Location</h4>
                        <input type="text" placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} className="max-w-[100%] px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" className="bg-[#DF5288] text-white mt-4 button">Next</button>
                </form>
            </div>
        </div>
    );
};

export default UploadPage;
