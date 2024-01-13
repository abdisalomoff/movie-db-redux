import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/fetchData";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc";
  useEffect(() => {
    dispatch(fetchData(url));
  }, [dispatch]);

  const data = useSelector((state) => state.data)
  console.log(data);

  const imgURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container">
      <h1 className="text-center">All Movies</h1>
      <div className="row my-5">
        {data?.data?.results.map((movie, key) => (
          <div className="col-4" key={key}>
            <Link to={`/movie/${movie?.id}`} className="text-decoration-none" style={{outline:'none'}}>
              <div className="card card-1" style={{ width: "350px" }}>
                <img
                  src={`${imgURL}${movie?.poster_path}`}
                  className="card-img-top"
                  alt={movie?.original_title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie?.original_title}</h5>
                  <p className="card-text">{movie?.overview}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
