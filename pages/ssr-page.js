import React from 'react';
import Nav from '../components/Nav';

const SSRPage = (props) => {
    return(
        <div>
            <Nav />
            <h1>Next stars: {props.stars}</h1>
        </div>
    )
};

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()

    //return { stars: json.stargazers_count }
    return { props: { stars: json.stargazers_count } }
}

export default SSRPage;