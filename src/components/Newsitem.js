import React from 'react'

const Newsitem = (props) => {
  let {title,description,imageUrl,newsUrl,author,date,source}=props;

    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex',justifyContent:'flex-end', position: 'absolute', right: '0'}}><span className='badge rounded-pill bg-danger' style={{left: '90%', zIndex: '1'}}>{source}</span></div>
            <img src={imageUrl?imageUrl:"https://www.reuters.com/resizer/tJwMNMhXIoDyRGvVOwSRLJHJEl4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GLXTBCJK7NIGHC4PFYHL6AQ5HE.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
}

export default Newsitem


