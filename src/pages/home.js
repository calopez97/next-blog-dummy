import React,{useEffect, useState} from 'react'
import Layout from '../components/Layout';
import { getClientPosts } from '../actions/home-posts.actions';

const Home = ({postData}) => {
    const { posts , errorPosts } = postData;
    const [loginData, setLoginData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        document.querySelector('body').classList.add('home-page');
        const logdata = localStorage.getItem('loginData') ? localStorage.getItem('loginData') : setLoading(true);
        setLoginData(logdata);
    }, []);


    return (
        <>
          {
              !loading ? ( 
                  <>
                    <Layout userData={loginData} error={errorPosts} posts={posts}  />
                    
                    </>
              ) : (
                <p>Somethings wrong</p>
              )
          }
        </>
    )
}

export async function getServerSideProps() {
    return await getClientPosts();
}


export default Home;
