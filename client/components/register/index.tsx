import axios from 'axios';
import {useState} from 'react'
function Form() {
    const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({
        username: "",
        twofactorauth:"checked",
        avatar: ""
    });const handleFileChange = () => (e) => {
        // console.log(prevState);
        
        setQuery((prevState) => ({
            ...prevState,
            file: e.target.files[0]
        }));
    };const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };const handleTwoFa = () => (e) => {

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });axios
            .post(
                'http://0.0.0.0:3333/api/user/upload',
                formData,

            )
            .then(function (response) {
                setFormStatus(true);
                setQuery({
                    username: "",
                    twofactorauth: "",
                    avatar: ""
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <form
                acceptCharset="UTF-8"
                method="POST"
                // enctype="multipart/form-data"
                id="ajaxForm"
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="inputUsername"></label>
                    <input
                        type="text"
                        id="inputUsername"
                        placeholder="USERNAME"
                        required
                        name="username"
                        value={query.username}
                        onChange={handleChange()}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="activatTwoFactorAuth"
                        placeholder="Enter your name"
                        required
                        name="twoFact"
                        value={query.twofactorauth}
                        onChange={handleTwoFa()}
                    />
                    <label htmlFor="activatTwoFactorAuth">Activate Two-factor Authentication via email</label>
                </div>
                <div>
                    <label>Add Avatar</label>
                    <input
                    name="avatar"
                    type="file"
                    onChange={handleFileChange()}/>
                </div>
                {formStatus ? (
                    <div>
                        Your message has been sent.
                    </div>
                ) : (
                    ""
                )}
                <button type="submit">Validate</button>
            </form>
        </div>
    );
} export default Form