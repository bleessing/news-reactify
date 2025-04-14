import React, {useEffect, useState} from 'react';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../../api/apiNews.js";
import styles from './styles.module.css'
import NewsList from "../../components/NewsList/NewsList.jsx";

const Main = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, []);
    return (
        <main className={styles.main}>

            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}
            <NewsList news={news}/>

        </main>
    );
};

export default Main;