import React, { useState } from "react";
import axios from "axios";
import "../tailwind.min.css";
import { navigate } from "hookrouter";

const Create = () => {
    let initform = {
        title: " ",
        description: " ",
        body: " ",
        author: " ",
        photos: ""
    }
    const [form, setForm] = useState(initform);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        axios.post("https://blogtestwebinar.herokuapp.com/blog/post", { ...form })
            .then(res => {
                console.log("successfully posted");
                navigate("/view");
            }
            );

    }
    return (
        <div className="App">
            <header className="App-header">
                <div>Create Post Page</div>

                <div className="leading-loose ">
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-xl  m-4 p-10 bg-white rounded shadow-xl ">
                        <p className="text-gray-800 font-medium text-center">
                            Create Post Here....
                        </p>
                        <div className="mt-2">
                            <label
                                className="block text-sm text-gray-600"
                                htmlFor="title">
                                Title
                            </label>
                            <input
                                className="w-full focus:shadow-outline px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="title"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter Title"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                className="block text-sm text-gray-600"
                                htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter Description"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                className="block text-sm text-gray-600"
                                htmlFor="body">
                                Hashtags
                            </label>
                            <input
                                // ref={myInput}
                                className="w-full focus:shadow-outline px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="body"
                                name="body"
                                value={form.body}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter Body"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                className="block text-sm text-gray-600"
                                htmlFor="author">
                                Author
                            </label>
                            <input
                                className="w-full focus:shadow-outline px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="author"
                                name="author"
                                value={form.author}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter Author's name"
                            />
                        </div>
                        <div className="mt-2 ">
                            <button
                                className={`w-1/4 px-1 py-0 text-black outline bg-blue-400 rounded mr-10`}
                                type="submit">
                                Save
                            </button>
                            <a
                                className={`w-1/4 px-8 py-2 text-black outline bg-blue-400 rounded ml-10`}
                                href="/view">
                                Back
                            </a>
                        </div>
                    </form>
                </div>
            </header>
        </div>

    );
}

export default Create;