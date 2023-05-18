import React from "react";
import ReactDOM from "react-dom/client";

// const title=React.createElement('h1',{id:'title'},'Hello React')

// const app=(
//   <div> 
//     <h1 id="text">Hello App</h1>
//     <p>
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dicta ipsam officia. Tempora maiores sed harum obcaecati. Hic ipsa officia, fugiat asperiores placeat eum, voluptate laboriosam consectetur, fuga quaerat rem.
//     </p>
// </div>
// )

const App=()=>{
  return(
     <div> 
       <h1>Hello App Component</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi et excepturi repudiandae, recusandae obcaecati tempore suscipit facilis mollitia sapiente vitae a molestias placeat repellat ipsa dolore rem, dolor sit. Provident.</p>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi et excepturi repudiandae, recusandae obcaecati tempore suscipit facilis mollitia sapiente vitae a molestias placeat repellat ipsa dolore rem, dolor sit. Provident.</p>
     </div>
    )
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode>
  <App/>
</React.StrictMode>);
