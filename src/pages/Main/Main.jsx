import React, {useEffect, useState} from 'react';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
import styles from './styles.module.css'
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skelenon.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews(currentPage, pageSize);
            setNews(response.news);
            setIsLoading(false);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage)
        }
    }
    const handlePrevPage = () => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <main className={styles.main}>

            {news.length > 0 && !isLoading ? (<NewsBanner item={news[0]}/>) : (<Skeleton type={'banner'} count={1}/>)}
            <Pagination totalPages={totalPages} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handlePageClick={handlePageClick} currentPage={currentPage}/>
            {!isLoading ? (
                <NewsList news={news}/>
            ) : (
                <Skeleton type={'item'} count={10}/>
            )}


        </main>
    );
};

export default Main;