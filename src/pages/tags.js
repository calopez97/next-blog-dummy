import React, {useEffect, useState} from 'react'
import { getPostByTag } from '../actions/tags.actions';
import Layout from '../components/Layout';
import { useRouter } from 'next/router'

const Tags = ({filteredPosts}) => {
    const { posts , errorPosts } = filteredPosts;
    const {  data } = posts;
    const [loginData, setLoginData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.querySelector('body').classList.add('home-page');
        const logdata = localStorage.getItem('loginData') ? localStorage.getItem('loginData') : setLoading(true);
        setLoginData(logdata);
    }, []);

    const {query: { as_q }} = useRouter();

    return (
        <>
          {
              !loading ? ( 
                  <>
                    <Layout userData={loginData} error={errorPosts} posts={data} keyword={as_q}  />
                    
                    </>
              ) : (
                <p>Somethings wrong</p>
              )
          }
        </>
    )
}

export async function getServerSideProps(context) {
    const { query } = context;
    return await getPostByTag(query.as_q);
}


export default Tags;
