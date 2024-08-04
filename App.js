import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// React.createElement => object => HTMLELEMENT(render)

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Namaste React"
// );
// console.log(heading);

// JSX React
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
// console.log(jsxHeading);

//React Element
// const heading = (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX
//     </h1>
// );

//React Functional Component
// const Title = () => (
//         <h1 className="head" tabIndex="5">
//             Namaste React using JSX
//         </h1>
// );

// Component  composition
// const HeadingComponent = () => (
//     <div id="container">
//          <h1 className="heading">Namaste React Functional Component</h1>
//         <Title />
//     </div>
// );


//Q. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const header = React.createElement(
//     "div",
//     {
//         className:"Title",
//         // key: "title",
//     },
    // [
    //     React.createElement(
    //         "h1",
    //         {
    //             //key: "h1",
    //         },
    //         "This is h1 Tag"
    //     ),
    //     React.createElement(
    //         "h2",
    //         {
               // key: "h2",
//             },
//             "This is h2 tag"
//         ),
//         React.createElement(
//             "h3",
//             {
//                // key: "h3",
//             },
//             "This is h3 tag"
//         )
//     ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header); 
 

;//Q. Create the same element using JSX
// const header = (
//     <div className="Title" >
//         <h1 >This is h1</h1>
//         <h1 >This is h2</h1>
//         <h1 >This is h3</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header); 



//Q. Create a functional component of the same with JSX And pass attributes into the tag in JSX
// const Header = () =>{
//     return (
//         <div className="Title" >
//             <h1 style={{color:"rebeccapurple"}}>This is h1</h1>
//             <h2 style={{backgroundColor:"springgreen"}}>This is h2</h2>
//             <h3 style={{color:"blue", backgroundColor:"yellowgreen"}}>This is h3</h3>
//         </div>
//     );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />); 


//Q.  Composition of Component(Add a component inside another)
// const Title = () => <h4 style={{color: "steelblue"}}>This is h4 tag</h4>

const Header = () =>{
    return (
        <div className="Title" >
            <h1 style={{color:"rebeccapurple"}}>This is h1</h1>
            <h2 style={{backgroundColor:"springgreen"}}>This is h2</h2>
            <h3 style={{color:"blue", backgroundColor:"yellowgreen"}}>This is h3</h3>
            <Title />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);



//Q. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

// This is React element or {TitleComponent}
// const element = <h1>This is React Element</h1>;

// This is Title Component
// const TitleElement = () => {
  // return <h2 style={{ color: "red" }}>This Title Element</h2>;
// };

// const Header = () => {
  // return (
    // <div className="Title" key="title">
      // {/* This is {TitleComponent} */}
      // {element}
      // {/* <h1 style={{ color: "blue" }} key="h1">
        // This is h1 tag
      // </h1>
      // {/* This is {<TitleComponent/>} */}
      // <TitleElement/>
      //  <h2 style={{ color: "palevioletred" }} key="h2">
        //  This is h2 tag
      // </h2>
      //  {/* This is {<TitleComponent></TitleComponent>}*/}
      //  <TitleElement></TitleElement>      
      //  <h3 style={{ color: "green" }} key="h3">This is h3 tag</h3>
    //  </div>
  //  );
//  };

//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);
