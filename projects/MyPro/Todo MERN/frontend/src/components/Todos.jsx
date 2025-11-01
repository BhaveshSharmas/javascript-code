export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button onClick={function() {
                    fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers:{
                                "Content-Type":"application/json"
                            }
                    })
                    .then(async function(res){
                        const val = await res.json();
                        alert("done");
                    })
                }}>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
}