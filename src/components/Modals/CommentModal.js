import React,{useState, useEffect} from 'react'
import { getPackComments } from '../../actions/comments.actions';
import Comment from './Comment';

const CommentModal = ({postId, onClose}) => {
    const [comments, setComments] = useState([]);
    const [errors, setErrors] = useState(true);

    useEffect(() =>{
        getComments();
    },[ setComments ]);

    const getComments = async () =>{
        try {
            const { comments, errorComments } = await getPackComments(postId)
           
            setComments(comments);
            setErrors(errorComments)
        } catch (error) {
            console.error(`Error in getComments: ${error}`);
        }
    }


    const { data } = comments;

    return (
        <>
        {
            !errors ? ( 
                    <div className="modalBackground">        
                        <div className="modalContainer">
                            <div className="title">
                                <button  onClick={() => onClose(false)}>
                                    X
                                </button>
                            </div>
                            <h1 className="main-title-comments">COMMENTS</h1>
                            <div className="body-modal-comments">
                                {
                                    data.length > 0 ? (
                                        data.map((comment,i) => <Comment key={i} Comment={comment}/> )
                                    ):(
                                        <>
                                            <div className="icon-face"></div>
                                            <p className="no-comments">¡No comments yet!</p>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
            ) : (
                null
            )
        }
        </>
        

    )
}

export default CommentModal;
