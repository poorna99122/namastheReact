// const heading1 = React.createElement(
//     "h1",
// {
//     id : "heading1"
// },
// "Heading 1"
// )
// const heading2 = React.createElement(
//     "h2",
// {
//     id : "heading2"
// },
// "Heading 2"
// )
// //If we want to pass multiple elements in a element
// const container = React.createElement(
//     "div",{
//         id:"container",
//         hello:"world`"
//     },
//     [heading1,heading2]
// )
// //This tells root element of the App where you want to run React!!
// const root = ReactDOM.createRoot(document.getElementById('root'));  
// //Adding the heading inside the root 
// root.render(container)
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Iam a h1 tag"),
        React.createElement("h1", {}, "Iam a h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Iam a h1 tag"),
        React.createElement("h1", {}, "Iam a h2 tag")
    ])
]);
console.log(parent); //object
const root = ReactDOM.createElement(document.getElementById("header"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
