import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function FormReviews({ setMovie }) {
    const initialForm = {
        name: "",
        vote: "",
        recensione: ""
    }
    let { id } = useParams()
    const [form, setForm] = useState(initialForm)
    const { setLoading } = useGlobalContext();

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true);
        axios.post(`http://localhost:3000/movies/${id}/tags`, form)
            .then(res => {
                setForm(initialForm)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false);
                getApi();
            })
    }

    function getApi() {
        setLoading(true);
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false);
            })
    }


    useEffect(() => {
        getApi()
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <label htmlFor="vote" className="form-label">Vote</label>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" id="vote" name="vote" value={form.vote} onChange={(e) => setForm({ ...form, vote: e.target.value })}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div className="mb-3">
                <label htmlFor="recensione" className="form-label">Recensione</label>
                <textarea className="form-control" id="recensione" name="recensione" rows="3" placeholder="Recensione" value={form.recensione} onChange={(e) => setForm({ ...form, recensione: e.target.value })} required></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    )
}