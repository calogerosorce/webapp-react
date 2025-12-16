import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormAddMovie() {

    const initialFormData = {
        title: "",
        image: "",
        abstract: "",
        director: "",
        release_year: "",
        genre: ""
    };

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const formPayload = new FormData();
        formPayload.append('title', formData.title);
        formPayload.append('image', formData.image);
        formPayload.append('abstract', formData.abstract);
        formPayload.append('director', formData.director);
        formPayload.append('release_year', formData.release_year);
        formPayload.append('genre', formData.genre);

        axios.post("http://localhost:3000/movies", formPayload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            setFormData(initialFormData);
            navigate('/');
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input className="form-control form-control-sm" id="image" name="image" type="file" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Abstract</label>
                <textarea className="form-control" id="abstract" rows="3" name="Abstract" placeholder="Abstract" value={formData.abstract} onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Director</label>
                <input type="text" className="form-control" id="director" placeholder="Director" name="director" value={formData.director} onChange={(e) => setFormData({ ...formData, director: e.target.value })} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Release Year</label>
                <input type="text" className="form-control" id="release_year" placeholder="Release Year" name="release_year" value={formData.release_year} onChange={(e) => setFormData({ ...formData, release_year: e.target.value })} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Genre</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Genre" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    )
}