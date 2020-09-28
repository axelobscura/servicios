import React from 'react';
import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/Nav';

const SSRPage = (props) => {
    return(
        <Layout>
            <div>
                <ul>
                    {props.posts.map((dato, index) => <li key={index}><p>{dato.userId}</p><h2>{dato.title}</h2><p>{dato.body}</p></li>)}
                </ul>
            </div>
        </Layout>
    )
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()

    //return { stars: json.stargazers_count }
    return { props: { posts: json } }
}

export default SSRPage;