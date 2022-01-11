import { useState, useEffect } from 'react';
import CardList from './Components/CardList';
import Navigation from './Components/Navigation';
import EditCard from './Components/EditCard';
import Map from './Components/Map';

import './App.css';

function App() {
  
  const [users,setUsers] = useState([]);
  const [posts,setPosts] = useState([]);
  const [currenrUserId,setCurrentUserId] = useState(-1);

  useEffect(() => {
    setUsers(JSON.parse(window.localStorage.getItem('users')));
    setPosts(JSON.parse(window.localStorage.getItem('posts')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('users', users);
    window.localStorage.setItem('posts', posts);
  }, [users, posts]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  },[]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => setPosts(data))
  },[]);


  function onUserClick(id){
    setCurrentUserId(id);
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
