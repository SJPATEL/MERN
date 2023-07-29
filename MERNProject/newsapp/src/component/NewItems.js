import React from 'react'

const NewItems = (props)=> {
    
        let {title,description,imageUrl,newsUrl,author,date} = props;
        return (
            <>
                <div className='my-3 mx-3'>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">{title}</h6>
                                <p className="card-text">{description}...</p>
                                <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
                                <a href={newsUrl} target='_blanck' className="btn btn-primary ">Read More</a>
                            </div>
                    </div>

                </div>
            </>
        )
    
}

export default NewItems
