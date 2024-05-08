
import AccordionPage from "../Accordion/AccordionPage"
import SuccessStories from "../../assets/SuccessStories.svg"
import HomeBg from "../../assets/HomeBg.png"
import Frame from "../../assets/Frame.svg"
import Right from "../../assets/Right.svg"

const LandingPage = () => {

    return (
        <div>
            <div>

                <div className='flex justify-center'>
                    <div className='flex justify-center flex-col items-center mt-4'>
                        <div>
                            <img src={SuccessStories} alt="" />
                        </div>
                        <div className='mt-4'>
                            <p className='text-4xl text-center'>Every success journey</p>
                            <p className='text-4xl text-center'>we’ve encountered.</p>
                        </div>
                    </div>
                </div>

                <div className=' grid grid-cols-12 mt-20 gap-8 mx-40'>
                <div className='flex items-center justify-center col-span-6'>


                    <div className='px-10'>

                        <div className='flex  z-50  absolute '>
                            <div className='p-6 bg-white rounded-xl w-[170px] ml-[-100px] mt-[90%] border-[1px] border-gray-100 shadow-xl'>
                                <div className=''>
                                    <p className='text-3xl font-bold text- '>40%</p>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-[11px]  text-gray-600 '>Achieved reduction in project execution time by optimising team availability</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex  z-50  absolute '>
                            <div className='px-7 py-1.5 bg-white rounded-full  ml-[-70px] flex  items-center mt-[300px] border-[1px] border-gray-100 shadow-xl'>
                              <div>
                              <img src={Frame} alt="" className='w-[30px]' />
                              </div>
                                <div className='mt-3 ml-3'>
                                    <p className='text-[18px] font-bold text-gray-600 '>10 Days</p>
                                    <p className='text-[11px]  text-gray-600 '>Staff Deployment</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex  z-50  absolute bottom-[-70px] ml-[300px]'>
                            <div className='p-6 bgClr1 rounded-xl w-[200px]'>
                                <div className=''>
                                    <p className='text-3xl font-bold text-white '>$0.5 <span className='font-normal text-base text-gray-500'>MILLION</span></p>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-[12px]  text-gray-200 '>Reduced client expenses by saving on hiring and employee costs.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src={HomeBg} alt="" width={400} />
                        </div>


                    </div>

                  


                </div>
                <div className='ml-20 col-span-6 flex items-center justify-center'>
                        <div className='w-[80%]'>
                            <div>
                                <div>
                                    <p className='text-4xl '>Enhance fortune 50 company’s insights teams research capabilities</p>
                                </div>

                                <div className='flex mt-10 mb-6 '>
                              
                                    <div className='w-2 h-2 bg-green-700  mr-2 rounded-full'></div>
                                    <div className='w-2 h-2 bg-gray-300 mr-2 rounded-full'></div>
                                     <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
                                </div>
                            </div>
                            <div className='bg-black hover:bg-[#4E4E4E] px-9 py-6 w-fit rounded-full flex items-center  mt-20 cursor-pointer' >
                                <div className='mr-4'>
                                        <button className='text-white'>Explore More</button>
                                  
                                </div>
                                <div>
                                <img src={Right} alt="" className='w-3.5' />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div> <AccordionPage /></div>



        </div>
    )
}

export default LandingPage