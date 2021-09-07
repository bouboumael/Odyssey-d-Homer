import React, {useState} from "react";

export default function SignUp() {

    const [fields, setFields] = useState({
        email: "",
        password: "",
        name: "",
        lastName: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
    };

    return (
        <>
            <div className={"container d-flex flex-column justify-content-center align-items-center mt-5"}>
                <h1 className={"text-center"}>Login</h1>
                <form
                    className={"d-flex flex-column justify-content-between col-4 mt-5"}
                    onSubmit={event => handleSubmit(event)}
                >
                    <div className="mb-3">
                        <label className={"form-label"} htmlFor="email">Email</label>
                        <input
                            className={"form-control"}
                            id={"email"}
                            type="email"
                            name="email"
                            value={fields.email}
                            onChange={(e) => {
                                setFields({...fields, [e.target.name]: e.target.value})
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className={"form-label"} htmlFor="password">Password</label>
                        <input
                            className={"form-control"}
                            id={"password"}
                            type="password"
                            name="password"
                            value={fields.password}
                            onChange={(e) => {
                                setFields({...fields, [e.target.name]: e.target.value})
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className={"form-label"} htmlFor="name">Firstname</label>
                        <input
                            className={"form-control"}
                            id={"name"}
                            type="text"
                            name="name"
                            value={fields.name}
                            onChange={(e) => {
                                setFields({...fields, [e.target.name]: e.target.value})
                            }}
                        />
                    </div>
                    <div className={"mb-3"}>
                        <label className={"form-label"} htmlFor="lastName">Lastname</label>
                        <input
                            className={"form-control"}
                            id={"lastName"}
                            type="text"
                            name="lastName"
                            value={fields.lastName}
                            onChange={(e) => {
                                setFields({...fields, [e.target.name]: e.target.value})
                            }}
                        />
                    </div>
                    <button className={"btn btn-primary btn-sm"}>Send</button>
                </form>
            </div>
        </>
    );
}