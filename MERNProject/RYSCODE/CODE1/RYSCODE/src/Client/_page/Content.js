import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Content = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search)
  const lag = queryParameters.get('lag')
  let topicStoreUrl = '';
  let topicStoreUrl2 = '';
  let topicTitle = '';
  if (lag === 'html') {
    topicStoreUrl = 'gethtmlcontent';
    topicStoreUrl2 = 'htmlquestion';
    topicTitle = 'HTML';
  } else if (lag === 'css') {

    topicStoreUrl = 'getcsscontent';
    topicStoreUrl2 = 'cssquestion';
    topicTitle = 'CSS';
  } else if (lag === 'javascript') {
    topicStoreUrl = 'getjavascriptcontent';
    topicStoreUrl2 = 'javascriptquestion';
    topicTitle = 'JAVA-SCRIPT';

  } else if (lag === 'bootstrap') {
    topicStoreUrl = 'getbootsstrapcontent';
    topicStoreUrl2 = 'bootsstrapquestion';
    topicTitle = 'BOOTS STRAP';
  } else if (lag === 'php') {
    topicStoreUrl = 'getphpcontent';
    topicStoreUrl2 = 'phpquestion';
    topicTitle = 'PHP';
  } else {
    topicStoreUrl = 'getpythoncontent';
    topicStoreUrl2 = 'pytonquestion';
    topicTitle = 'PYTHON';
  }

  const [state1, setState1] = useState([]);
  const [question, setQuestion] = useState('');
  const [answser, setAnswser] = useState('');
  const [qus, setqus] = useState('');
  const [search, setSearch] = useState('');


  const handleResize = ()=>{
    console.log(window.innerWidth);
    let widht = window.innerWidth;
    if(widht <= 650){
      console.log('cok')
      let mdiv1 = document.getElementById('mdiv1');
      let mdiv2 = document.getElementById('mdiv2');
      let mdiv3 = document.getElementById('mdiv3');
      let mdiv4 = document.getElementById('mdiv4');
      
      mdiv1.classList.remove('d-flex')
      mdiv1.classList.remove('justify-content-between')
      mdiv3.style.removeProperty('height');
      mdiv3.style.removeProperty('overflow-Y');
      mdiv4.style.removeProperty('height');
      mdiv4.style.removeProperty('overflow-Y');
      
      mdiv2.classList.add('d-flex')
      // mdiv2.classList.add('justify-content-between');

      mdiv2.style.overflowX = 'scroll';
      mdiv2.style.width = '100%';
    }else{
      let mdiv1 = document.getElementById('mdiv1');
      let mdiv2 = document.getElementById('mdiv2');
      let mdiv3 = document.getElementById('mdiv3');
      let mdiv4 = document.getElementById('mdiv4');

      mdiv1.classList.add('d-flex')
      mdiv1.classList.add('justify-content-between')
      mdiv3.style.height = '90vh';
      mdiv3.style.overflowY = 'scroll';
      mdiv4.style.height = '90vh';
      mdiv4.style.overflowY = 'scroll';

      mdiv2.classList.remove('d-flex')
      mdiv2.style.removeProperty('width');
      mdiv2.style.removeProperty('overflow-X');
      // mdiv2.classList.remove('justify-content-between')
    }
  }
  // console.log(widht);
  
  const handlePostQuetions = async (e) => {
    e.preventDefault();


    if (localStorage.getItem('auth-token')) {
      let id = '';
      if (queryParameters.get('id')) {
        id = queryParameters.get('id');

      } else {
        id = state1[0]._id;
      }
      const addquestionres = await fetch(`http://localhost:5000/${topicStoreUrl2}/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })

      })

      const response = await addquestionres.json();
      if (response.success) {
        alert(response.error)
      } else {
        alert(response.error)
      }

    } else {
      navigate('/Authentication?Login')

    }
  }


  const getContent = async () => {

    const responseData = await fetch(`http://localhost:5000/${topicStoreUrl}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })



    const responseContent = await responseData.json();
    setState1(responseContent);
    if (!responseContent) {
      alert("some tachnicale error")
    }

  }
  // add answser
  const addAnswer = async () => {

    let id = '';
    if (queryParameters.get('id')) {
      id = queryParameters.get('id');

    } else {
      id = state1[0]._id;
    }
    const addquestionres = await fetch(`http://localhost:5000/${topicStoreUrl2}/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answser, qus })

    })

    const response = await addquestionres.json();
    if (response.success) {
      alert(response.error)
    } else {
      alert(response.error)
    }


  }


  const handleanstag = (e) => {
    const eid = e.target.className;
    const id = document.getElementById(`${eid}`);
    id.classList.remove('d-none')

  }
  useEffect(() => {
    getContent();
    handleResize();
    window.addEventListener('resize',handleResize);
  }, [])


  return (
    <>
      <div className='contentClass ' >
        <nav className="navbar navbar-light bg-light ">
          <div className="container ">
            <form className="d-flex col-md-6 m-auto">
              <input className="form-control col-md-8 my-0 mx-2 fs-5 " type="text" placeholder={`Search aney ${topicTitle} Topics`} onChange={(e) => { setSearch(e.target.value) }} />
            </form>
          </div>
        </nav>

        <div   className='' id='mdiv1'>

          <div className="col-md-3 my-2">
            <div className="list-group text-center" id='mdiv3' style={{ height: '90vh', overflowY: 'scroll' }}>
              <button type="button" className="list-group-item  active " style={{ background: 'rgb(88 88 189)' }} aria-current="true">
                {topicTitle} BLOGS TOPICS
              </button>
              <div id='mdiv2' className='' style={{  }}>
              {
                state1 !== [] ?

                  state1.map((items) => {
                    return (
                      <>
                        <Link to={`?lag=${lag}&id=${items._id}`} className='text-decoration-none nav-link  py-2 list-group-item-action mx-1' >{items.title}</Link>
                      </>
                    )

                  }) : ''
              }
              </div>

            </div>
          </div>


          <div className="col-md-9 px-2 my-2" id='mdiv4' style={{ height: '90vh', overflowY: 'scroll' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              {
                search !== "" ?
                  state1.filter((item) => (item.title.toLowerCase()).includes(search.toLowerCase()))
                    .map(filterItems => {
                      return <>
                        <li className="nav-item">
                          <p className='fs-2 py-0 my-0 text-sedondary fw-bold'>{filterItems.topic} </p>
                          <hr className=' my-2' style={{ border: '1px solid gray' }} />
                        </li>
                        <li className="nav-item">
                          {filterItems.desccode.map((descitem) => {

                            return <>
                              <p className=' fs-5 my-2'>{descitem.description}</p>
                              <p className="" ><pre className="language-Html"><code>{descitem.code}  </code></pre></p>

                            </>
                          })}
                        </li>
                        <hr className=' my-2' style={{ border: '1px solid gray' }} />
                        <li className="nav-item">
                          {filterItems.imgdesc.map((imgdescitem) => {

                            return <>
                              <img src={`http://localhost:5000/imagesvedio/${imgdescitem.image}`} style={{ 'width': '600px', 'height': '400px', 'objectFit': 'contain' }} className='d-flex justifi-content-center m-auto' alt="" />
                              <p className=' fs-5 my-2'>{imgdescitem.imagedesc}</p>

                            </>
                          })}

                        </li>

                        <hr className=' my-2' style={{ border: '1px solid gray' }} />
                        <li className="nav-item">
                          {filterItems.vediodesc.map((vediodescitem) => {

                            return <>
                              <video width="550" height="350" controls className='d-flex justifi-content-center m-auto'>
                                <source src={`http://localhost:5000/imagesvedio/${vediodescitem.vedio}`} type="video/mp4" />

                                Your browser does not support the video tag.
                              </video>
                              <p className=' fs-5 my-2'>{vediodescitem.vediodesc}</p>
                            </>
                          })}

                        </li>
                        <hr className=' my-2' style={{ border: '1px solid gray' }} />
                        <li className="nav-item d-flex justify-content-between align-items-center col-md-10">
                          <textarea className="form-control fs-5 col-md-10 " id="code" name='postQuestion' rows="1" placeholder='Enter Your Question ' onChange={(e) => { setQuestion(e.target.value) }} ></textarea>

                          <button type="submit" onClick={handlePostQuetions} className="btn btn-primary col-md-1 mb-2 mx-2  "> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                          </svg></button>
                        </li>
                        {filterItems.qusans.map((qusansitem, index) => {
                          return <>

                            <li className="nav-item ">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item  mb-2" >
                                  <p onClick={handleanstag} style={{ cursor: 'pointer' }} className={`qusans${index}`}  >  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-question-diamond mx-2 fw-bold text-danger" viewBox="0 0 16 16">
                                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                  </svg> {qusansitem.questions}</p>

                                  <form>
                                    <div className="my-2 d-flex justify-content-between align-items-center col-md-10 d-none " id={`qusans${index}`}>
                                      <textarea className="form-control fw-bold col-md-10 " id="code" name='postAnswer' rows="1" placeholder='Enter Your Replya for this comment ' onChange={(e) => { setAnswser(e.target.value); setqus(qusansitem.questions) }} required ></textarea>

                                      {localStorage.getItem('auth-token') ?
                                        <Link to={`?lag=${lag}&qus=${qusansitem.questions}`} onClick={addAnswer} className="btn btn-primary col-md-1 mb-2 mx-2 d-noe"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                        </svg></Link>

                                        :
                                        <Link to={`/Authentication?Login`} className="btn btn-primary col-md-1 mb-2 mx-2 d-noe"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                        </svg></Link>
                                      }
                                    </div>
                                  </form>

                                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {qusansitem.answer.map((ans) => {
                                      return <>
                                        <li className="nav-item  mb-2">
                                          <p className='my-1 py-0'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" mx-2 bi bi-person-check-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                          </svg> {ans}</p>


                                        </li>
                                      </>
                                    })}
                                    <hr className=' my-2' style={{ border: '1px solid gray' }} />


                                  </ul>

                                </li>


                              </ul>
                            </li>

                          </>
                        })}

                      </>
                    })
                  :
                  (!(queryParameters.get('id'))) ?

                    state1 !== [] ?

                      state1.filter((item) => item._id === state1[0]._id)
                        .map(filterItems => {
                          return <>
                            <li className="nav-item">
                              <p className='fs-2 py-0 my-0 text-sedondary fw-bold'>{filterItems.topic} </p>
                              <hr className=' my-2' style={{ border: '1px solid gray' }} />
                            </li>
                            <li className="nav-item">
                              {filterItems.desccode.map((descitem) => {

                                return <>
                                  <p className=' fs-5 my-2'>{descitem.description}</p>
                                  <p className="" ><pre className="language-Html"><code>{descitem.code}  </code></pre></p>

                                </>
                              })}
                            </li>
                            <hr className=' my-2' style={{ border: '1px solid gray' }} />
                            <li className="nav-item">
                              {filterItems.imgdesc.map((imgdescitem) => {

                                return <>
                                  <img src={`http://localhost:5000/imagesvedio/${imgdescitem.image}`} style={{ 'width': '600px', 'height': '400px', 'objectFit': 'contain' }} className='d-flex justifi-content-center m-auto' alt="" />
                                  <p className=' fs-5 my-2'>{imgdescitem.imagedesc}</p>

                                </>
                              })}

                            </li>

                            <hr className=' my-2' style={{ border: '1px solid gray' }} />
                            <li className="nav-item">
                              {filterItems.vediodesc.map((vediodescitem) => {

                                return <>
                                  <video width="550" height="350" controls className='d-flex justifi-content-center m-auto'>
                                    <source src={`http://localhost:5000/imagesvedio/${vediodescitem.vedio}`} type="video/mp4" />

                                    Your browser does not support the video tag.
                                  </video>
                                  <p className=' fs-5 my-2'>{vediodescitem.vediodesc}</p>
                                </>
                              })}

                            </li>
                            <hr className=' my-2' style={{ border: '1px solid gray' }} />
                            <li className="nav-item d-flex justify-content-between align-items-center col-md-10">
                              <textarea className="form-control fs-5 col-md-10 " id="code" name='postQuestion' rows="1" placeholder='Enter Your Question ' onChange={(e) => { setQuestion(e.target.value) }} ></textarea>

                              <button type="submit" onClick={handlePostQuetions} className="btn btn-primary col-md-1 mb-2 mx-2  "> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                              </svg></button>
                            </li>
                            {filterItems.qusans.map((qusansitem, index) => {
                              return <>

                                <li className="nav-item ">
                                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item  mb-2" >
                                      <p onClick={handleanstag} style={{ cursor: 'pointer' }} className={`qusans${index}`}  >  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-question-diamond mx-2 fw-bold text-danger" viewBox="0 0 16 16">
                                        <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                      </svg> {qusansitem.questions}</p>

                                      <form>
                                        <div className="my-2 d-flex justify-content-between align-items-center col-md-10 d-none " id={`qusans${index}`}>
                                          <textarea className="form-control fw-bold col-md-10 " id="code" name='postAnswer' rows="1" placeholder='Enter Your Replya for this comment ' onChange={(e) => { setAnswser(e.target.value); setqus(qusansitem.questions) }} required ></textarea>

                                          {localStorage.getItem('auth-token') ?
                                            <Link to={`?lag=${lag}&qus=${qusansitem.questions}`} onClick={addAnswer} className="btn btn-primary col-md-1 mb-2 mx-2 d-noe"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                            </svg></Link>

                                            :
                                            <Link to={`/Authentication?Login`} className="btn btn-primary col-md-1 mb-2 mx-2 d-noe"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                            </svg></Link>
                                          }
                                        </div>
                                      </form>

                                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        {qusansitem.answer.map((ans) => {
                                          return <>
                                            <li className="nav-item  mb-2">
                                              <p className='my-1 py-0'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" mx-2 bi bi-person-check-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                              </svg> {ans}</p>


                                            </li>
                                          </>
                                        })}
                                        <hr className=' my-2' style={{ border: '1px solid gray' }} />


                                      </ul>

                                    </li>


                                  </ul>
                                </li>

                              </>
                            })}

                          </>
                        }) : <li className="nav-item">
                        <p className='fs-2 py-0 my-0 text-sedondary fw-bold'>not present any topics </p>
                        <hr className=' my-2' style={{ border: '1px solid gray' }} />
                      </li>

                    :
                    state1 !== [] ?

                      state1.filter((items) => items._id === queryParameters.get('id'))
                        .map((filterItems) => {
                          return <>

                            <li className="nav-item">
                              <p className='fs-2 py-0 my-0 text-sedondary fw-bold'>{filterItems.topic} </p>
                              <hr className=' my-2' style={{ border: '1px solid gray' }} />
                            </li>
                            <li className="nav-item">
                              {filterItems.desccode.map((descitem) => {

                                return <>
                                  <p className=' fs-5 my-2'>{descitem.description}</p>
                                  <p className="" ><pre className="language-Html"><code>{descitem.code}  </code></pre></p>

                                </>
                              })}
                            </li>
                            <hr className=' my-2' style={{ border: '1px solid gray' }} />
                            <li className="nav-item">
                              {filterItems.imgdesc.map((imgdescitem) => {

                                return <>
                                  <img src={`http://localhost:5000/imagesvedio/${imgdescitem.image}`} style={{ 'width': '600px', 'height': '400px', 'objectFit': 'contain' }} className='d-flex justifi-content-center m-auto' alt="" />
                                  <p className=' fs-5 my-2'>{imgdescitem.imagedesc}</p>

                                </>
                              })}

                            </li>

                            <hr className=' my-2' style={{ border: '1px solid gray' }} />
                            <li className="nav-item">
                              {filterItems.vediodesc.map((vediodescitem) => {

                                return <>
                                  <video width="550" height="350" controls className='d-flex justifi-content-center m-auto'>
                                    <source src={`http://localhost:5000/imagesvedio/${vediodescitem.vedio}`} type="video/mp4" />

                                    Your browser does not support the video tag.
                                  </video>
                                  <p className=' fs-5 my-2'>{vediodescitem.vediodesc}</p>
                                </>
                              })}

                            </li>
                            <hr className=' my-2' style={{ border: '1px solid gray' }} />
                            <li className="nav-item d-flex justify-content-between align-items-center col-md-10">
                              <textarea className="form-control fs-5 col-md-10 " id="code" name='postQuestion' rows="1" placeholder='Enter Your Question ' onChange={(e) => { setQuestion(e.target.value) }} ></textarea>

                              <button type="submit" onClick={handlePostQuetions} className="btn btn-danger col-md-1 mb-2 mx-2 "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                              </svg></button>
                            </li>
                            {filterItems.qusans.map((qusansitem, index) => {
                              return <>

                                <li className="nav-item ">
                                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item  mb-2" >
                                      <p onClick={handleanstag} style={{ cursor: 'pointer' }} className={`qusans${index}`}  >  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-question-diamond mx-2 fw-bold text-danger" viewBox="0 0 16 16">
                                        <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                      </svg> {qusansitem.questions}</p>

                                      <form>
                                        <div className="my-2 d-flex justify-content-between align-items-center col-md-10 d-none " id={`qusans${index}`}>
                                          <textarea className="form-control fw-bold col-md-10 " id="code" name='postAnswer' rows="1" placeholder='Enter Your Replya for this comment ' onChange={(e) => { setAnswser(e.target.value); setqus(qusansitem.questions) }} required ></textarea>
                                          {localStorage.getItem('auth-token') ?
                                            <Link to={`?lag=${lag}&id=${queryParameters.get('id')}&qus=${qusansitem.questions}`} onClick={addAnswer} className="btn btn-primary col-md-1 mb-2 mx-2 d-noe"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                            </svg></Link>

                                            :
                                            <Link to={`/Authentication?Login`} className="btn btn-primary col-md-1 mb-2 mx-2 d-noe"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-fill" style={{ rotate: `47deg` }} viewBox="0 0 16 16">
                                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                            </svg></Link>
                                          }

                                        </div>
                                      </form>

                                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        {qusansitem.answer.map((ans) => {
                                          return <>
                                            <li className="nav-item  mb-2">
                                              <p className='my-1 py-0'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" mx-2 bi bi-person-check-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                              </svg> {ans}</p>


                                            </li>
                                          </>
                                        })}
                                        <hr className=' my-2' style={{ border: '1px solid gray' }} />


                                      </ul>

                                    </li>


                                  </ul>
                                </li>

                              </>
                            })}

                          </>
                        })
                      : <li className="nav-item">
                        <p className='fs-2 py-0 my-0 text-sedondary fw-bold'>not present any topics </p>
                        <hr className=' my-2' style={{ border: '1px solid gray' }} />
                      </li>

              }



            </ul>

          </div >

        </div>
      </div>
    </>
  )
}

export default Content
