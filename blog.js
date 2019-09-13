function Child(props) {
  return (
    <article id={props.name}>
      <h2>Article {props.name}</h2>
      <h4>By {props.author}</h4>
      <p>{props.date}</p>
      <p>Content Here</p>
    </article>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child name="1" author="noob" date="Sept 10" />
        <Child name="2" author="nooblet" date="Sept 11" />
        <Child name="3" author="noobie" date="Sept 12" />
      </div>
    );
  }
}

const root = document.querySelector("#app");
ReactDOM.render(<Parent />, root);

// function App() {
//     return (
//       <div>
//         <article id="1">
//           <h2>Article </h2>
//           <h3>By Carl</h3>
//           <p>Date</p>
//           <p>Content Here</p>
//         </article>
//         <article id="2">
//           <h2>Article 2</h2>
//           <h4>By Carl</h4>
//           <p>Date</p>
//           <p>Content Here</p>
//         </article>
//         <article id="3">
//           <h2>Article 3</h2>
//           <h4>By Carl</h4>
//           <p>Date</p>
//           <p>Content Here</p>
//         </article>
//       </div>
//     );
//   }
