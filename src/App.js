import { useState, useEffect } from "react";

import { Heading } from "./components/Heading";
import { Loader } from "./components/Loader";
import UnsplashImage from "./components/UnsplashImage";

import Search from "./components/Search";

import axios from "axios";

import { Row } from "react-bootstrap";
import Pagination from "@material-ui/lab/Pagination";

function App() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState("");
  const [page, setPage] = useState();

  const fetchImages = async (input, page) => {
    setLoading(true);
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    const response = await axios.get(
      `${apiRoot}/search/photos/?page=${page}&query=${
        !input ? "dark mountain" : input
      }&client_id=${accessKey}&per_page=47`
    );
    // .then((res) => setImages([...images, ...res.data]))
    // .catch((err) => console.log(err));

    const data = await response.data;
    setImages(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);
  const handleChange = (event) => {
    setFormData(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchImages(formData);
  };

  if (loading) {
    return (
      <h1>
        <Loader />
      </h1>
    );
  }
  const pageChange = (event, value) => {
    setPage(value);
    fetchImages(formData, value);
  };
  return (
    <>
      <div>
        {/* <Switch>
          <Route path="/" exact component={Home} />
        </Switch> */}

        <Row>
          <Search search={handleChange} submit={handleSubmit} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0rem 0",
            }}
          >
            <Pagination
              count={10}
              size="large"
              onChange={pageChange}
              page={page}
              style={{
                padding: "1rem",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            />
          </div>
          <UnsplashImage photos={images.results} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0",
            }}
          >
            <Pagination
              count={10}
              size="large"
              onChange={pageChange}
              page={page}
              style={{
                padding: "1rem",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            />
          </div>
        </Row>

        {/* <InfiniteScroll
        dataLength={images.results.length}
        next={images.results}
        hasMore={true}
        loader={}
      > */}
        {/* </InfiniteScroll> */}
        {/* </InfiniteScroll> */}

        {/* <UnsplashImage /> */}
      </div>
    </>
  );
}

export default App;
