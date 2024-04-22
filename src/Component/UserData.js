import React, { useState, useEffect } from "react";

const UserData = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
    });
    const [unsavedChanges, setUnsavedChanges] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (unsavedChanges) {
                event.preventDefault();
                event.returnValue = "";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [unsavedChanges]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        setUnsavedChanges(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = generateUserId();
        saveToLocalStorage(userId, formData);
        setUnsavedChanges(false);
    };

    const generateUserId = () => {
        // Simple random string generator for user ID
        return Math.random().toString(36).substr(2, 9);
    };

    const saveToLocalStorage = (userId, data) => {
        // Save data to local storage with user ID as key
        localStorage.setItem(userId, JSON.stringify(data));
    };

    return (
        <div>
            <h2>User Data Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {/* {unsavedChanges && <p>There are unsaved changes in the form.</p>} */}
        </div>
    );
}


export default UserData