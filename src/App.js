import { useState, useEffect } from 'react';
import CardList from './Components/CardList';
import './App.css';

function App() {
  
  const [users,setUsers] = useState([]);
  const [posts,setPosts] = useState([]);
  const [currenrUserId,setCurrentUserId] = useState(-1);


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

  function onPostClick(id){
    setCurrentUserId(id);
  }

  function onPostDelete(id){
    setPosts(posts => posts.filter((item) => item.id !== id));
  }

  
  return (
    <div className="tc">
      { currenrUserId < 0 ?
        <CardList list={users} onClick={onUserClick} onDelete={onUserDelete}/>
        : 
        <CardList list={posts} user={currenrUserId} onClick={onPostClick} onDelete={onPostDelete} />        
      }
    </div>
  );
}

export default App;
