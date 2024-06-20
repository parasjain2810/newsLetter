import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {StarFill} from 'react-bootstrap-icons'
import toast, { Toaster } from 'react-hot-toast';

const Detail = () => {
  // this is the detail part of any news
const {source,author,title,description,url,urlToImage,content}=useSelector(state=>state.news)
// this is news state 
  return (
   <>
   <header>
    <div><Toaster/></div>
  <div className="p-3 text-center bg-white border-bottom">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-2 col-sm-4 col-4">
          <a href={url} target="_blank" className="float-start">
            <img src='https://cdn-icons-png.freepik.com/512/7108/7108096.png' height="35"/>
          </a>
        </div>
        <div className="order-lg-last col-lg-5 col-sm-8 col-8">
        </div>
        <div class="col-lg-5 col-md-12 col-12">
        </div>
     </div>
    </div>
  </div>
  <div className="bg-primary">
    <div className="container py-4">
      <nav className="d-flex">
        <h6 className="mb-0">
          <span className="text-white-50 mx-2">Source-{source}</span>
        </h6>
      </nav>
    </div>
  </div>
</header>

<section className="py-5">
  <div className="container">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href={url}>
            <img className="rounded-4 fit" src={urlToImage?urlToImage:'No Image found'} height={300} alt='No Image Found'/>
          </a>
        </div>
          <div class="d-flex justify-content-center mb-3">
          </div>
      </aside>
      <main className="col-lg-6">
        <div className="ps-lg-3">
          <h4 className="title text-dark">
            {title}
          </h4>
          <div className="d-flex flex-row my-3">
            
          </div>

          <div className="mb-3">
            <span className="h5">Author - </span>
            <span className="text-muted">{author?author:'No author found'}</span>
          </div>

          <p>
            {description}
          </p>
          <p>
            {content}
          </p>
        </div>
      </main>
    </div>
  </div>
</section>
   </>
  )
}

export default Detail
