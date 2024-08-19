import { useState } from "react"

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    async function handleRegister(e) {
        e.preventDefault();
        const res = await fetch("/api/register", {
            method: "post",
            body: JSON.stringify(formData),
        });
        const data = await res.json()
        console.log(data);
    }
    return (
        <div>
            <h1 className="title">Register your account</h1>

            <form onSubmit={handleRegister} className="w-1/2 mx-auto">
                <div>
                    <input type="text" name="" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} id="" />
                </div>
                <div>
                    <input type="text" name="" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="" />
                </div>
                <div>
                    <input type="text" name="" onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" id="" />
                </div>
                <div>
                    <input type="text" name="" onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })} placeholder="Confirm Password" id="" />
                </div>
                <button className="primary-btn">Register</button>
            </form>
        </div>
    )
}
