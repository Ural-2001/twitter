// // import React from 'react';
// // import './App.css';
// import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";
// import Profile from "./components/Profile/Profile";
// import Feed from "./components/Feed/Feed";
// import Dialogs from "./components/Dialogs/Dialogs";
// // import {BrowserRouter, Route} from "react-router-dom";
// import Settings from "./components/Settings/Settings";
// import Music from "./components/Music/Music";
//
// class Hello extends React.Component {
//     render() {
//         return <h1>Привет, React.JS</h1>;
//     }
//     // render() {
//     //     return (
//     //         <div className="app-wrapper">
//     //             <Header/>
//     //             <Navbar/>
//     //             <div className='app-wrapper-content'>
//     //                 <Route path='/feed' component={Feed}/>
//     //                 <Route path='/profile' component={Profile}/>
//     //                 <Route path='/dialogs' component={Dialogs}/>
//     //                 <Route path='/settings' component={Settings}/>
//     //                 <Route path='/music' component={Music}/>
//     //             </div>
//     //         </div>
//     //     )
//     // };
// }
// ReactDOM.render(
//     <Hello />,
//     document.getElementById("content")
// );

class Hello extends React.Component {
    render() {
        return <h1>Привет, React.JS</h1>;
    }
}
ReactDOM.render(
    <Hello />,
    document.getElementById("content")
);
