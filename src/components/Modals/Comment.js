import React from 'react'

const Comment = ({Comment}) => {

    const {owner, publishDate, message} = Comment;

    let options = {
        year: "numeric", 
        month: "long", 
        day: "numeric",
        hour: '2-digit',
        minute:'2-digit',
    };
    let getDate = new Date(publishDate);
    let creationDate = getDate.toLocaleDateString("en-US", options);  
    

    return (
        <div className="Comments">
            <div className="brand-user">
                    
                    <div className="info-profile">
                        <p>{`${owner.firstName} ${owner.lastName}`}</p>
                        <small>{creationDate}</small>
                    </div>
                    <div className="image-profile">
                        <img title={owner.title} 
                            alt={owner.title}
                            src={owner.picture} />
                    </div>
            </div>
            <div className="message-container">
                <h4>Comment:</h4>
                <div className="message-content">
                    <p className="message">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
