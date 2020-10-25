import React, { useState, useEffect } from "react";
import noImage from "../imgs/no-image.jpg";
import axios from "axios";
import { navigate } from "hookrouter";

const ViewPost = (id) => {
    let initvalue = {
        title: " ",
        description: " ",
        body: " ",
        author: " ",
        photos: ""
    }
    const [data, setData] = useState(initvalue);

    useEffect(() => {
        axios.get(`https://blogtestwebinar.herokuapp.com/blog/${id.id}`)
            .then(res => {
                setData(res.data);
            })
    }, [id.id]);
    const deletePost = (e) => {
        e.preventDefault();

        axios.delete(`https://blogtestwebinar.herokuapp.com/blog/${id.id}`)
            .then(res => {
                if (res.status === 200) {
                    console.log("deleted successfully");
                    navigate("/view");
                }
            })

    }
    return (
        <div className="App">
            <header className="App-header">
                <div>View single post Page</div>
                <div className="py-10 h-full">
                    <div className="max-w-5xl mx-auto bg-white shadow overflow-hidden  sm:rounded-lg">
                        <div className="bg-white lg:mx-8 lg:my-4 lg:flex lg:max-w-5xl">

                            <img
                                src={noImage}
                                alt=" "
                            />
                        </div>
                        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Title: {data.title}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                                Description: {data.description}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Hashtags:
                            </dt>
                            <dd className="mt-1 text-sm leading-5 text-gray-900 capitalize">
                                {data.body}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Author
                            </dt>
                            <dd className="mt-1 text-sm leading-5 text-gray-900">
                                {data.author}
                            </dd>
                        </div>
                        <div className="mt-2 ">
                            <a
                                className={`w-1/8 px-1 py-0 text-black outline bg-blue-400 rounded mr-10`}
                                href={`/edit/${data.id}`}>
                                Update
                            </a>
                            <button
                                onClick={deletePost}
                                className={`w-1/8 px-1 py-0 text-black outline bg-red-600 rounded mr-10`}
                            >
                                Delete
                            </button>

                        </div>
                        <a
                            className={`w-1/4 px-8 py-2 text-black outline bg-blue-400 rounded ml-10 float-right`}
                            href="/view">
                            Back
                            </a>
                    </div>
                </div>

            </header>
        </div>

    );
}

export default ViewPost;