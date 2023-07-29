import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Html = () => {
    const navigate = useNavigate();
    useEffect(() => {


        if (!((localStorage.getItem('adminname') === 'setu8885') && (localStorage.getItem('adminPassword') === '990499'))) {
            navigate('/adminlogin');

        }
    }, []);

    setTimeout(() => {
        localStorage.removeItem('adminname');
        localStorage.removeItem('adminPassword');
    }, (24 * 60 * 60 * 1000));


    let location = useLocation();

    let topicStoreUrl = '';
    let topicTitle = ''
    if (location.search === '?HTML') {
        topicStoreUrl = 'htmlstore';
        topicTitle = 'HTML';
    } else if (location.search === '?CSS') {

        topicStoreUrl = 'cssstore';
        topicTitle = 'CSS';
    } else if (location.search === '?JAVASCRIPT') {
        topicStoreUrl = 'javascriptlstore';
        topicTitle = 'JAVA-SCRIPT';

    } else if (location.search === '?BOOTSTRAP') {
        topicStoreUrl = 'bootsstrapstore';
        topicTitle = 'BOOTS STRAP';
    } else if (location.search === '?PHP') {
        topicStoreUrl = 'phpstore';
        topicTitle = 'PHP';
    } else {
        topicStoreUrl = 'pythonstore';
        topicTitle = 'PYTHON';
    }



    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [topics, setTopics] = useState('')
    const [descCode, setDesccode] = useState('')
    const [imageCode, setimageDesccode] = useState('')
    const [Img, setImage] = useState([])
    const [vedioCode, setVedioDesccode] = useState('')
    const [video, setVedio] = useState([])

    const handleInputInc = () => {
        setCounter(counter + 1);
    };
    const handleImgcount = () => {
        setCounter1(counter1 + 1);

    };

    const handleVedioCounter = () => {
        setCounter2(counter2 + 1);

    };

    const handledesccode = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDesccode({ ...descCode, [name]: value });

    }


    const handleimg = (e) => {
        let name = e.target.name;
        let value = e.target.value;


        var fi = document.getElementById(e.target.id);  // GET THE FILE INPUT AS VARIABLE.

        if (fi.type === 'file') {
            const file = e.target.files[0];
            const updatedImage = [...Img];
            updatedImage.push(file);
            setImage(updatedImage);

            if (fi.files.length > 0) {
                // RUN A LOOP TO CHECK EACH SELECTED FILE.
                for (var i = 0; i <= fi.files.length - 1; i++) {

                    for (let c = 0; c <= counter1; c++) {
                        if (e.target.name === `myFile${c}`) {
                            value = fi.files.item(i).name;
                           
                        }

                    }

                }
            }
        }
        setimageDesccode({ ...imageCode, [name]: value });

    }
    const handleVedios = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        var fi = document.getElementById(e.target.id);  // GET THE FILE INPUT AS VARIABLE.

        if (fi.type === 'file') {
            const file = e.target.files[0];
            const updatevedio = [...video];
            updatevedio.push(file);

            setVedio(updatevedio);

            if (fi.files.length > 0) {
                // RUN A LOOP TO CHECK EACH SELECTED FILE.
                for (var i = 0; i <= fi.files.length - 1; i++) {

                    for (let c = 0; c <= counter2; c++) {
                        if (e.target.name === `video${c}`) {
                            value = fi.files.item(i).name;
                        }

                    }

                }
            }
        }
        setVedioDesccode({ ...vedioCode, [name]: value });


    }
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setTopics({ ...topics, [name]: value });


    }


    const handleHtml = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        Img.forEach((image, index) => {

            formData.append(`myFile${index}`, image);
        })

        // let formData2 = new FormData();
        video.forEach((video, index2) => {
            formData.append(`video${index2}`, video);
        })


        const responsestoreimgvedio = await fetch('http://localhost:5000/imagevedio', {
            method: "POST",
            headers: {
                'counter1': counter1,
                'counter2': counter2
            },
            body: (formData)
        })

        const respons = await responsestoreimgvedio.json();

        if (respons.success) {

            const responseStoreuser = await fetch(`http://localhost:5000/${topicStoreUrl}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'counter': counter,
                    'counter1': counter1,
                    'counter2': counter2
                },
                body: JSON.stringify({ topics, descCode, imageCode, vedioCode })
            })

            const respons1 = await responseStoreuser.json();

            if (respons1.success) {
                alert(respons1.error)
            } else {
                alert(respons1.error)
            }


        } else {
            alert(respons.error);
        }



    }

    return (
        <div style={{ marginTop: '100px' }}>
            <div className="container my-5">
                <div>
                    <form className='my-5' encType="multipart/form-data" method="POST">

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fs-5">{topicTitle} Title</label>
                            <input type="text" className="form-control fs-5" id="title" name='title' required placeholder='Enter Topic Title' onChange={handleInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="topic" className="form-label fs-5">Topic</label>
                            <input type="text" className="form-control fs-5" id="topic" name='topic' required placeholder='Enter Topic for 10 word' onChange={handleInput} />
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className="col-md-9">
                                <div>

                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label fs-5 ">description </label>
                                        <textarea className="form-control fs-5 " id="description" name='description0' rows="2" placeholder='Enter Your Topic Description' onChange={handledesccode} ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="code" className="form-label fs-5 ">Code </label>
                                        <textarea className="form-control fs-5 " id="code" name='code0' rows="2" placeholder='Enter Your Topic Code' onChange={handledesccode} ></textarea>
                                    </div>
                                </div>

                                {Array.from(Array(counter)).map((c, index) => {
                                    return <div>

                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label fs-5 ">description {index + 1}</label>
                                            <textarea className="form-control fs-5 " id={`description${index}`} name={`description${index + 1}`} rows="2" placeholder="Enter Your Topic Description" onChange={handledesccode} ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="code" className="form-label fs-5 ">Code {index + 1}</label>
                                            <textarea className="form-control fs-5 " id={`code${index}`} name={`code${index + 1}`} rows="2" placeholder='Enter Your Topic Code' onChange={handledesccode} ></textarea>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="col-md-2 d-flex flex-col align-items-center">
                                <button type="submit" onClick={handleInputInc} className="btn btn-danger">+ Add</button>
                            </div>


                        </div>

                        <hr style={{ border: '2px solid red' }} />
                        <div className='d-flex justify-content-between'>
                            <div className="col-md-9">
                                <div >
                                    <div className="mb-3">
                                        <label htmlFor="img" className="form-label imgfile fs-5">Image</label>
                                        <input type="file" className="form-control fs-5" id="fileImg" name='myFile0' required onChange={handleimg} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="imgription" className="form-label fs-5">Image Description</label>
                                        <input type="text" className="form-control fs-5" id="imageDescription" name='imageDescription0' required placeholder='Enter Image Description' onChange={handleimg} />
                                    </div>
                                </div>

                                {Array.from(Array(counter1)).map((c, index) => {
                                    return <div>


                                        <div className="mb-3">
                                            <label htmlFor="img" className="form-label imgfile fs-5">Image {index + 1}</label>
                                            <input type="file" className="form-control fs-5" id={`fileImg${index}`} name={`myFile${index + 1}`} onChange={handleimg} required />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="imgription" className="form-label fs-5">Image{index +1} Description</label>
                                            <input type="text" className="form-control fs-5" id={`imageDescription${index}`} name={`imageDescription${index + 1}`} required placeholder='Enter Image Description' onChange={handleimg} />
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="col-md-2 d-flex flex-col align-items-center">
                                <button type="submit" onClick={handleImgcount} className="btn btn-danger">+ Add</button>
                            </div>


                        </div>
                        <hr style={{ border: '2px solid red' }} />

                        <div className='d-flex justify-content-between'>
                            <div className="col-md-9">
                                <div >
                                    <div className="mb-3">
                                        <label htmlFor="video" className="form-label fs-5">Video</label>
                                        <input type="file" className="form-control fs-5" id="video" name='video0' required onChange={handleVedios} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="videoDescription" className="form-label fs-5">Image Description</label>
                                        <input type="text" className="form-control fs-5" id="videoDescription" name='videoDescription0' required placeholder='Enter Video Description' onChange={handleVedios} />
                                    </div>
                                </div>

                                {Array.from(Array(counter2)).map((c, index) => {
                                    return <div>


                                        <div className="mb-3">
                                            <label htmlFor="video" className="form-label fs-5">video {index + 1}</label>
                                            <input type="file" className="form-control fs-5" id={`video${index}`} name={`video${index + 1}`} required onChange={handleVedios} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="videoDescription" className="form-label fs-5">video{index + 1} Description</label>
                                            <input type="text" className="form-control fs-5" id={`videoDescription${index}`} name={`videoDescription${index + 1}`} required placeholder='Enter Image Description' onChange={handleVedios} />
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="col-md-2 d-flex flex-col align-items-center">
                                <button type="submit" onClick={handleVedioCounter} className="btn btn-danger">+ Add</button>
                            </div>

                        </div>
                        <hr style={{ border: '2px solid red' }} />


                        <div className="mb-3">
                            <label htmlFor="keyword" className="form-label fs-5">Topic Keyword</label>
                            <input type="text" className="form-control fs-5" id="keyword" name='keyword' required placeholder='Enter Topic Title' onChange={handleInput} />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={handleHtml}>Add {topicTitle} TOPICS</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Html
