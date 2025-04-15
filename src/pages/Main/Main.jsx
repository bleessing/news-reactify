import React, {useEffect, useState} from 'react';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
import styles from './styles.module.css'
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skelenon.jsx";

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const response = await getNews();
                setNews(response.news);
                setIsLoading(false);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, []);
    return (
        <main className={styles.main}>

            {news.length > 0 && !isLoading ? (<NewsBanner item={news[0]}/>) : (<Skeleton type={'banner'} count={1} />)}
            {!isLoading ? (
                <NewsList news={news}/>
            ) : (
                <Skeleton type={'item'} count={10} />
            )}


        </main>
    );
};

export default Main;