import type { SigninInput, SignupInput } from "@bhasha/medium-common";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AuthCompo = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const url = type === "signup" ? 'http://localhost:8787/api/v1/user/signup' : 'http://localhost:8787/api/v1/user/signin';
            console.log(type);
            const response = await axios.post(url, postInputs);
            const jwt = response.data.token;
            console.log(jwt);
            localStorage.setItem("token", jwt);
            console.log(localStorage.getItem("token"));
            navigate("/blogs")
        } catch (e) {
            console.log(e);
            alert("Some thing is wrong")
        }
    }

    return <div className="flex justify-center flex-col items-center h-screen">
        {/* {JSON.stringify(postInputs)} */}
        <div className="bg-red-0 w-full max-w-md">
            <div className="bg-green text-center">
                <div className="font-bold text-4xl">
                    Create an Account
                </div>
                <div className="text-lg mt-2 text-slate-400">
                    {type === "signup" ? "Already have an account? " : "Don't have an account? "}
                    <Link to={type === "signin" ? "/Signup" : "/Signin"}>{type === "signin" ? "Sign up" : "Sign in"}</Link>
                </div>
            </div>
            <div className="mt-8">
                <LabbelledInput label="Email" placeholder="Enter your Email" onChange={(e: any) => {

                    console.log("PrintPrintPrintPrintPrintPrintPrint");


                    setPostInputs(prev => (
                        {
                            ...prev,
                            email: e.target.value
                        }
                    ))

                }} />

                {type === "signup" ? <LabbelledInput label="Name" placeholder="Enter your name" onChange={(e: any) => {

                    console.log("PrintPrintPrintPrintPrintPrintPrint");


                    setPostInputs(prev => (
                        {
                            ...prev,
                            name: e.target.value
                        }
                    ))

                }} /> : null}



                <LabbelledInput label="Password" placeholder="Enter your password" type="password" onChange={(e: any) => {

                    console.log("PrintPrintPrintPrintPrintPrintPrint");


                    setPostInputs(prev => (
                        {
                            ...prev,
                            password: e.target.value
                        }
                    ))

                }} />
            </div>
            <div><button onClick={sendRequest} className="bg-black text-white w-full mt-5 p-3 rounded-md">{type === "signup" ? "Sign Up" : "Sign In"}</button></div>
        </div>
    </div >
}

interface LabeledInputType {
    label: string;
    placeholder: string
    onChange: (e: any) => void
    type?: string;
}

function LabbelledInput({ label, placeholder, onChange, type }: LabeledInputType) {
    return <div className="mt-4">
        <label className="text-md font-semibold">{label}</label>
        <input onChange={onChange} placeholder={placeholder} type={type} id="large-input" className="block text-gray-700 text-md mt-2 border focus:outline-none border-slate-300 focus:ring-1 focus:ring-slate-400 focus:border-slate-400 rounded-lg py-3 px-2 w-full" />
    </div>
}

// function LabbelledInput({ label, placeholder, onchange, value }) {
//     return <div>
//         <label className="">{label}</label>
//         <input placeholder={placeholder} type="text" id="large-input" className="block w-full p-4 text-black border border-gray-300 rounded-lg" />
//     </div>
// }