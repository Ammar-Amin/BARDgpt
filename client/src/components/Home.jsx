import React from 'react'
import Card from './Card'

export default function Home() {
    return (
        <>
            {/* Banner  */}
            <div className='w-full min-h-[600px] bg-[url(https://png.pngtree.com/background/20230618/original/pngtree-lots-of-different-types-of-potted-plants-picture-image_3712499.jpg)] bg-cover flex justify-center items-center'>
                <div>
                    <h1 className='text-5xl font-bold'>Welcome to GreenSwap</h1>
                    <p className='text-xl font-semibold my-4 text-center'>Buy, Sell and Swap Plants with Ease</p>
                    <div className='w-5/6 mx-auto flex gap-2'>
                        <input type='text' className='flex-1 px-3 py-2 rounded-md bg-slate-800' placeholder='What are you looking for...' />
                        <button className='px-6 py-2 font-bold rounded-md bg-green-600'>Search</button>
                    </div>
                </div>
            </div>

            {/* Features  */}
            <div className='max-w-7xl mx-auto my-16'>
                <h2 className='mb-8 text-3xl font-medium'>Explore Our Features</h2>
                <div className='flex gap-7 justify-between'>
                    <Card
                        link="/buy"
                        title='But Plants'
                        imgUrl='https://www.shutterstock.com/image-photo/woman-choosing-which-peppers-plant-600nw-2303790087.jpg'
                        desc='Discover a wide variety of plants from different nurseries. Browse our extensive collection and find the perfect plant for your home or garden.'
                    />
                    <Card
                        link="/sell"
                        title='Sell Plants'
                        imgUrl='https://media.istockphoto.com/id/1459110174/photo/woman-at-a-garden-center-talking-with-an-employee-about-what-plant-to-buy.webp?b=1&s=170667a&w=0&k=20&c=599hgfZuQB08asYbVc_lhcP2YzjSKoYLYqYmh_rE-J8='
                        desc='Have extra plants? Sell them and share your green treasures with others. Join our community of plant enthusiasts'
                    />
                    <Card
                        link="/swap"
                        title='Swap Plants'
                        imgUrl='https://uploads-ssl.webflow.com/5f854ebf1a80ea53fd7df5da/6080df53a36cc426825639d5_image%20-%202021-04-22T102833.189.jpg'
                        desc='Swap your plants with others and diversify your collection. Connect with fellow plant lovers and exchange plants to grow your green space'
                    />
                </div>
            </div>
        </>
    )
}
