import React from 'react'
import './collection.css'
const EssintalCollection = () => {
    const Data = [
        {
            id: 1,
            img: "https://i.ibb.co/rvgYVm6/image.png",
            collectionName: "Mens Kurta"
        },
        {
            id: 2,
            img: "https://i.ibb.co/VWPPHT5/image.png",
            collectionName: "Kids Fashion"
        },
        {
            id: 3,
            img: "https://i.ibb.co/pxVPgWm/image.png",
            collectionName: "Traditional Kurta"
        },
        {
            id: 4,
            img: "https://i.ibb.co/KwQ9jpH/image.png",
            collectionName: "Women Sarees"
        }
    ]
    return (
        <div className='w-full mt-12'>
            <div className='text-center py-2 md:py-5'>
                <h1 className='md:text-3xl text-pretty mb-2 text-2xl font-bold'>The Essential Collection</h1>
                <p className='md:tracking-wide font-meduim text-base md:text-xl	'>Shop the latest products from the most popular collections</p>
            </div>
            <div className='mt-5 p-2'>
                <div className='w-full grid grid-cols-2 md:grid-cols-4 space-x-3 gap-2'>
                    {Data.map((item, index) => (
                        <div className=' p-1 md:p-2' key={index}>
                            <div className='relative'>
                                <img src={item.img} className='w-full imgs-collections h-64 md:h-96 object-cover object-center' alt={item.collectionName} />

                                <button className=' whitespace-nowrap collectionbtns'>{item.collectionName}</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EssintalCollection