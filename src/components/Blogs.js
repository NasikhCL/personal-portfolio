import React from "react";


export default function Blog(){
    return(
        <div id="blogs-section" className='section'>
        <h1>Blogs</h1>
        <div className='blogs'>

            <div className='blog-card'>
                <h2>How Javascript works?</h2>
                <img className="blog-image" src="https://nasikhcl.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FqaedPly-Uro%2Fupload%2Fv1667807546929%2FX4KNuh8_S.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="blog-main-img" />
                <a className="blog-link" href="https://nasikhcl.hashnode.dev/how-javascript-works" ><img src="https://img.icons8.com/color/30/null/hashnode.png"/> <span> Read The Blog</span></a>
            </div>
           

        </div>

    </div>
    )
}