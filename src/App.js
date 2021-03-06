import { useState, useEffect } from 'react';
import CardList from './Components/CardList';
import Navigation from './Components/Navigation';


import './App.css';

function App() {
  
  const [users,setUsers] = useState([]);
  const [posts,setPosts] = useState([]);
  const [currenrUserId,setCurrentUserId] = useState(-1);

  useEffect(() => {
   if(window.sessionStorage.getItem('users')){
    setUsers(JSON.parse(window.sessionStorage.getItem('users')));
   } else {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
   }

   if(window.sessionStorage.getItem('posts')){
    setPosts(JSON.parse(window.sessionStorage.getItem('posts')));
   } else {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => setPosts(data))
   }
   if(window.sessionStorage.getItem('currentUser')){
    setCurrentUserId(parseInt(window.sessionStorage.getItem('currentUser')));
   }
  },[]);

  useEffect(() => {
    window.sessionStorage.setItem('users', JSON.stringify(users));
    window.sessionStorage.setItem('posts', JSON.stringify(posts));
    window.sessionStorage.setItem('currentUser', String(currenrUserId));
  }, [users, posts, currenrUserId]);

  
  function onUserClick(e, id){
    if(e.target.id === "delete"){ 
      e.preventDefault();
      e.stopPropagation();
    } else {
    setCurrentUserId(id);
    }
  }

  function onUserDelete(id){
    setUsers(users => users.filter((item) => item.id !== id));
    setPosts(posts => posts.filter((item) => item.userId !== id));
  }

  function onPostDelete(id){
    setPosts(posts => posts.filter((item) => item.id !== id));
  }

  function onPostChange(id, title, body){
    let temp_posts = [...posts];
    console.log(temp_posts);
    let post = temp_posts.find(item => item.id === id);
    let index = temp_posts.findIndex(item => item.id === id);

    post.title = title;
    post.body = body;

    temp_posts[index] = post;
    console.log(temp_posts);
    setPosts(temp_posts);
  }

  function onRouteChange(id){
    setCurrentUserId(id);
  }

  return (
    <div className="tc">
      { currenrUserId < 0 ?
        <div>
         <h1>Users</h1>
         <hr></hr>
         <CardList list={users} onClick={onUserClick} onDelete={onUserDelete}/>
        </div>
        : 
        <div>
         <Navigation onRouteChange={onRouteChange} />

         <img src={`https://robohash.org/${currenrUserId}?size=100x100`}
          style={{backgroundColor: "white", borderColor: "black", borderStyle: "solid", borderRadius: "50%"}}
          alt=''
          />

         <h1>{`${users.find(item => item.id === currenrUserId).name}'s posts`}</h1>
         <hr></hr>     
         <CardList
          list={posts}
          user={currenrUserId}
          onDelete={onPostDelete}
          onUpdate={onPostChange}
           /> 
        </div>
      }
    </div>
  );
}

export default App;
