export function TodoComp({todos}){
    return <div>
        {todos.map(function(sodo){
            return <div>
                <h1>{sodo.title}</h1>
                <h1>{sodo.description}</h1>
            </div>
        })}
        
    </div>
}