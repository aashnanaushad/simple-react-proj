import React, { useEffect, useState } from "react";
import "../tailwind.min.css";
import axios from "axios";
import noImage from "../imgs/no-image.jpg";

const View = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://blogtestwebinar.herokuapp.com/blog/fetch/all-posts')
            .then(res => {
                setData(res.data);
            })
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <div>View Post Page </div>
                <br />
                <a
                    href="/create"
                    className="w-20 text-black outline bg-blue-400 rounded float-right mr-10">
                    Add Post
                </a>
                <br />
                <div className="center max-w-6xl mx-auto">
                    <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 md:grid-cols-3 md:max-w-none sm:mx-8">
                        {data.map((e) => {
                            return (
                                <a
                                    className="flex flex-col rounded-lg shadow-sm border overflow-hidden max-w-xs mx-auto hover:shadow-xl bg-white"
                                    href={`/view/${e.id}`}>
                                    <div className="max-w-sm rounded overflow-hidden  ">
                                        <img className="w-full" src={noImage} alt=" " />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2 text-black">{e.title}</div>
                                            <p className="text-gray-700 text-base">{e.description}</p>
                                        </div>
                                        <div className="px-6 py-4">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 float-left">{e.body}</span>
                                        </div>
                                        <div className="px-6 py-4">
                                            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 float-right">{e.author}</span>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                    <a
                        className={`w-1/8 px-8 py-2 text-black outline bg-blue-400 rounded ml-10 float-right mt-2`}
                        href="/">
                        Back
                    </a>
                </div>

            </header>
        </div >
    );
}

export default View;