import React, {useState } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App =(props)=> {
  const NewsApiKey = process.env.New_Api_key_env;

 const [progress, setProgress] = useState(0)


    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          color='#f11946'
          progress={progress}
         
        />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} NewsApiKey={NewsApiKey}  key={'general'} pageSize={10} contry={"in"} category={"general"} />} />
            <Route path="/business" element={<News setProgress={setProgress} NewsApiKey={NewsApiKey}  key={'business'} pageSize={10} contry={"in"} category={"business"} />} />
            <Route path="/entertainment"  element={<News setProgress={setProgress} NewsApiKey={NewsApiKey} key={'entertainment'} pageSize={10} contry={"in"} category={"entertainment"} />} />
            <Route path="/health" element={<News setProgress={setProgress} NewsApiKey={NewsApiKey}  key={'health'} pageSize={10} contry={"in"} category={"health"} />} />
            <Route path="/science" element={<News setProgress={setProgress} NewsApiKey={NewsApiKey}  key={'science'} pageSize={10} contry={"in"} category={"science"} />} />
            <Route path="/sports" element={<News setProgress={setProgress} NewsApiKey={NewsApiKey}  key={'sports'} pageSize={10} contry={"in"} category={"sports"} />} />
            <Route path="/technology" element={<News setProgress={setProgress} NewsApiKey={NewsApiKey}  key={'technology'} pageSize={10} contry={"in"} category={"technology"} />} />
          </Routes>
        </Router>


      </>
    )
  
}

export default App