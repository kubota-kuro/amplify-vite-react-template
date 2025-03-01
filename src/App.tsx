// import { useEffect, useState } from "react";
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from "@aws-amplify/ui-react-storage/browser";
import "@aws-amplify/ui-react-storage/styles.css";
// import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from '@aws-amplify/ui-react';
// import { generateClient } from "aws-amplify/data";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});
// const client = generateClient<Schema>();

// function App() {
//   const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

//   useEffect(() => {
//     client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });
//   }, []);

//   function createTodo() {
//     client.models.Todo.create({ content: window.prompt("Todo content") });
//   }
    
//   function deleteTodo(id: string) {
//     client.models.Todo.delete({ id })
//   }
function App() {
  const { signOut } = useAuthenticator();
  return (
    <>
      <button onClick={signOut}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        padding: "8px 16px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      >Sign out</button>
      <div style={{ marginTop: "50px" }}>
      <StorageBrowser />
      </div>
    </>
  );
}
export default App;

    // <main>
    //   <h1>{user?.signInDetails?.loginId}'s todos</h1>
    //   <button onClick={createTodo}>+ new</button>
    //   <ul>
    //     {todos.map((todo) => (
    //       <li 
    //       onClick={() => deleteTodo(todo.id)}
    //       key={todo.id}>{todo.content}</li>
    //     ))}
    //   </ul>
    //   <div>
    //     🥳 App successfully hosted. Try creating a new todo.
    //     <br />
    //     <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
    //       Review next step of this tutorial.
    //     </a>
    //   </div>
    //   <button onClick={signOut}>Sign out</button>
    // </main>