import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import "./series.scss";
import Navbar from "../../components/navbar/navbar";
import List from "../../components/list/list";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Series({ type }) {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                }
                );
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomLists();
    }, [type]);
    return (
        <>
            <Navbar />
            <div className="featured">
                {type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )}
                <img
                    src="https://www.greenscene.co.id/wp-content/uploads/2020/10/Justice-League-1.jpg"
                    alt=""
                />
                <div className="info">
                    <img
                        src="https://www.pngall.com/wp-content/uploads/13/Justice-League-Logo.png"
                        alt=""
                    />
                    <span className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                        adipisci repellendus eum quasi illo, velit numquam, maxime tempora
                        sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
                        temporibus eum earum?
                    </span>
                    <div className="buttons">
                        <Link to="/watch" className="play">
                            <PlayArrowIcon />
                            <span>Play</span>
                        </Link>
                        <Link to="/" className="more">
                            <InfoOutlinedIcon />
                            <span>Info</span>
                        </Link>
                    </div>
                </div>
            </div>
            {lists.map((list) => (
                <List list={list} />
            ))}
        </>
    );
};