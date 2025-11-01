import { useState } from "react";

export function CreateTodo(){
    const [titel,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input type="text" placeholder="Title" onChange={function(e) {
            const value = e.target.value;
            console.log(value)
            setTitle(value);
        }}/> <br />
        <input type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            console.log(value)
            setDescription(value);
        }}/> <br />
        <button onClick={() => {
            fetch("http://localhost:3000/todos",{
                            method: "POST",
                            body: JSON.stringify({
                                title: titel,
                                description: description    
                            }),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        })
                            .then(async function(res){
                                const json = await res.json();
                                alert("Todo added")
                            })
        }}>add a todo</button>
    </div>
}
