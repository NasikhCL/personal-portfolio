import React from "react";


export default function Blog(){
    return(
        <div id="blogs-section" className='section'>
        <h2>Blogs</h2> 
        <div className='blogs'>

            <div className='blog-card'>
                <h2>How Javascript works?</h2>
                <img className="blog-image" src="https://cdn.hashnode.com/res/hashnode/image/unsplash/qaedPly-Uro/upload/v1667807546929/X4KNuh8_S.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="blog-main-img" />
                <a className="blog-link" href="https://nasikhcl.hashnode.dev/how-javascript-works" ><img src="https://img.icons8.com/color/30/null/hashnode.png" alt="hashnode" /> <span> Read The Blog</span></a>
            </div>
           

        </div>

    </div>
    )
}