import React, { useState, } from 'react'
import dribbble from '../assets/dribbble.svg'
import image from '../assets/image.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    };
    const handleCreateAccount = () => {
        navigate("/upload");
    }
    return (
        <div className='w-[100vw] h-[100vh]  flex'>
            <div className='w-[40%] bg-[#F2D184]'>
                <div className='px-12 h-[18%] flex flex-col justify-around mt-[5%]'>
                    <img src={dribbble} className='w-[27%]' />
                    <h1 className='text-3xl text-[#846014] font-bold overflow-hidden' >Discover the world's top <br /> Designers & Creatives</h1>
                </div>

                <div className='image-container p-8'>
                    <img src={image} />
                </div>


            </div>
            <div className='w-[60%] bg-white flex flex-col' >

                <div className='flex justify-end py-3 font-semibold max-w-[98%]'>
                    <p className='overflow-hidden'>Already a member ? <span className='text-[#5c4ce7]  '><a href='#'>Sign in</a></span></p></div>

                <div className="container max-w-[100%] overflow-hidden">


                    <form onSubmit={handleSubmit} className='signupform mb-10'>
                        <h2 className='mb-5 text-3xl font-semibold ml-2'>Sign up to Dribbble</h2>

                        <div className="form-group">
                            <div className="input-container flex flex-col px-2">
                                <label htmlFor="name" className='mb-2 font-semibold text-xl'>Name:</label>
                                <input type="text" id="name" name="name" placeholder='Example' value={formData.name} onChange={handleChange} required className='py-4 px-2 rounded-lg bg-[#F3F3F3]' />
                            </div>
                            <div className="input-container flex flex-col px-2 ">
                                <label htmlFor="username" className='mb-2 font-semibold text-xl'>Username:</label>
                                <input type="text" id="username" name="username" placeholder='Username should be unique' value={formData.username} onChange={handleChange} required className='py-4 px-2 rounded-lg bg-[#F3F3F3]' />
                            </div>
                        </div>
                        <div className="form-group flex flex-col px-2">
                            <label htmlFor="email" className='mb-2 font-semibold text-xl'>Email:</label>
                            <input type="email" id="email" name="email" placeholder='example@xyz.com' value={formData.email} onChange={handleChange} required className='py-4 px-2 rounded-lg bg-[#F3F3F3]' />
                        </div>
                        <div className="form-group flex flex-col px-2">
                            <label htmlFor="password" className='mb-2 font-semibold text-xl'>Password:</label>
                            <input type="password" id="password" name="password" placeholder='6 + characters' value={formData.password} onChange={handleChange} required className='py-4 px-2 rounded-lg bg-[#F3F3F3]' />
                        </div>
                        <div className="form-group items-top">
                            <input type="checkbox" id="agreeToTerms" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} required className='w-[1rem] h-[2rem] ml-3' />
                            <label htmlFor="agreeToTerms" className='checkbox-label mb-2 font-medium text-xl text-[#8B8A8E]'>Creating an account means you're okay with out <span><a href='#' className='text-[#6a56ba]'>Terms of <br /> Service,Privacy Policy ,</a></span> and our default <span><a href='#' className='text-[#6a56ba]'>Notification <br /> Settings</a></span></label>
                        </div>
                        <button type="submit" className='button' onClick={handleCreateAccount}>Create Account</button>

                        <p className='mt-2 font-medium  text-[#8B8A8E] text-xs'> This site is protected by reCAPTCHA and the Google <br /><span><a href='#' className='text-[#6a56ba]'>Privacy Policy </a>and <a href='#' className='text-[#6a56ba]'> Terms of Service</a>apply </span> </p>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Home