import React, { useState } from "react";

function AddStudent() {
  const [form, setForm] = useState({
    application_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    birthdate: "",
    gender: "",
    next_schedule: ""
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      const res = await fetch("http://localhost:5000/profile/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Failed to add student");
      setSuccess("Student added successfully!");
      setForm({
        application_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        zip: "",
        birthdate: "",
        gender: "",
        next_schedule: ""
      });
    } catch (err) {
      setError("Error adding student.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: 400, margin: "32px auto", background: "#fff", padding: 24, borderRadius: 8}}>
      <h3>Add Student</h3>
      <input name="application_id" placeholder="Application ID" value={form.application_id} onChange={handleChange} required />
      <input name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} required />
      <input name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
      <input name="province" placeholder="Province" value={form.province} onChange={handleChange} required />
      <input name="zip" placeholder="ZIP" value={form.zip} onChange={handleChange} required />
      <input name="birthdate" placeholder="Birthdate (YYYY-MM-DD)" value={form.birthdate} onChange={handleChange} required />
      <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
      <input name="next_schedule" placeholder="Next Schedule" value={form.next_schedule} onChange={handleChange} />
      <button type="submit" style={{marginTop: 12}}>Add Student</button>
      {success && <div style={{color: "green", marginTop: 8}}>{success}</div>}
      {error && <div style={{color: "red", marginTop: 8}}>{error}</div>}
    </form>
  );
}

export default AddStudent;
