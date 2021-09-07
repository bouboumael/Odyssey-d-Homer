import React, {useState} from "react";

export default function SignUp()
{
    const [email, setEmail] = useState("Votre Email")
    return (
        <>
            <h1>{email}</h1>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
            />
        </>
    );
}