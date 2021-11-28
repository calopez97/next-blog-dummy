import React,{ useState, useEffect } from 'react';
import CommentModal from '../Modals/CommentModal';
import UserModal from '../Modals/UserModal';
import Link from 'next/link';

const Post = (post) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalComments, setShowModalComments] = useState(false);
    const { owner, tags } = post;

    let options = {
        year: "numeric", 
        month: "long", 
        day: "numeric"
    };

    let getDate = new Date(post.publishDate);
    let creationDate = getDate.toLocaleDateString("en-US", options);  

   
    
    return (
        <>
        <>   
            <div className="brand-post">
                        <div className="image-profile">
                            <img title={post.text} 
                                alt={post.text}
                                src={post.image}/>
                            <div className="image-description">
                                <p>{post.text}</p>
                            </div>    
                        </div>
                        <div className="info-profile">
                            <a href="#" 
                                onClick={()=>setShowModal(true)}>
                                <div className="brand-user">
                                    <div className="image-profile-user">
                                        <img title={owner.title} 
                                            alt={owner.title}
                                            src={owner.picture} />
                                    </div>
                                    <div className="info-profile">
                                        <p>{`${owner.firstName} ${owner.lastName}`}</p>
                                    </div>
                                </div>
                            </a>
                            <span className="publishDate">{creationDate}</span>
                            <div className="tags">
                                <ul className="tags-list">
                                    { 
                                        tags.map((tag) => <li className="tag" key={tag}><Link href={`/tags?as_q=${tag}`}><a className="tag-link">{tag}</a></Link></li> )
                                    }
                                </ul>
                            </div>
                            <div className="likes-commets">
                                <strong className="likes">{post.likes}</strong>
                                <div className="commets">
                                    <a href="#" onClick={ () => setShowModalComments(true) } className="btn-comments">Comments</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
        </>  
        {showModal && <UserModal
            onClose={setShowModal}
            userId={owner.id}
        />}
        {showModalComments && <CommentModal 
            onClose={setShowModalComments}
            postId={post.id}
        />}
        </>
    )
}

export default Post;
