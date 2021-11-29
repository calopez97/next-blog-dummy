import React from 'react'
import Header from './Header';
import Post from './Posts/Post';

const Layout = ( {userData, error, posts, keyword = '' } ) => {

    const data = userData.length > 0 ? JSON.parse(userData) : [];
    const Posts = posts ?  posts : [];

  

    return (
        <>{
            !error ? (
                <div className="layout">
                    <Header profile={data}/>
                    <div className="container">
                        <h1 className="title-posts">{`POSTS ${keyword}`}</h1>
                        <div className="posts-grid-layout">
                        {
                            Posts.map((post, i) => {
                                return <Post {...post} key={post.id} />
                            })
                        }
                        </div>
                    </div>
                   
                </div>    
            ) : (
                <p>Nada</p>
            )
            
        }
        
        </>
        
    )
}

export default Layout;
