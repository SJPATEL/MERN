import React, { useEffect, useState } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = ` ${props.category}  NewsLive`



  const newsUpdate = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.contry}&category=${props.category}&apiKey=${props.NewsApiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true })
    // props.setProgress(50);      
    setloading(true);
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      setArticles(data.articles);
      setloading(false);
      settotalResults(data.totalResults / props.pageSize);

    })
    props.setProgress(100);

  }
  // const priviousClik = async () => {

  //   newsUpdate();
  //   setpage(page - 1 )
  // }
  // const nextClik = async () => {
    
  //   newsUpdate();
  //   setpage(page + 1 )

  // }

  useEffect(() => {
    newsUpdate();
  }, [])
  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.contry}&category=${props.category}&apiKey=6b18e29758f945d6ad37b0d6bb1010d2&pageSize=${props.pageSize}&pageSize=${props.pageSize}`;
  //   // setState({loading: true})
  //   // fetch(url).then((response) => {
  //   //   return response.json();
  //   // }).then((data) => {
  //   //   setState({ articles: data.articles,totalResults: data.totalResults/props.pageSize,loading: false })
  //   // })
  //   newsUpdate();
  // }


  const fetchMoreData = async () => {
    // setState({ page: page + 1 });
    setpage(page + 1 )
    let url = `https://newsapi.org/v2/top-headlines?country=${props.contry}&category=${props.category}&apiKey=${props.NewsApiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true })
    setloading(true );
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      setArticles(articles.concat(data.articles));
      setloading(false);
      settotalResults(data.totalResults / props.pageSize);
     
    })
  };


  return (
    <>
      <div className='  my-5'>
        <h2 className='text-center'> Day to Day Update News from {props.category}  </h2>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="d-flex flex-wrap ">

            {articles.map((element) => {

              return <div className="col-md-3" key={element
                .url}>

                <NewItems title={element.title} description={element.description === null ? "" : element.description.substring(0, 80)} imageUrl={element.urlToImage === null ? "https://www.hindustantimes.com/ht-img/img/2023/05/15/1600x900/The-FIR-revealed-that-Wankhede-s-team-had-changed-_1684139638097.jpg" : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />

              </div>
            })}

          </div>
        </InfiniteScroll>


      </div>
    </>
  )

}
News.defaultProps = {
  contry: "in",
  pageSize: 8,
  category: "genaral"
}
News.propTypes = {
  contry: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
