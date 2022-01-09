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
    setUsers(users.filter((item) => item.id !== id));
    setPosts(posts.filter((item) => item.userId !== id));
  }

  
  
  return (
    <div className="tc">
      {currenrUserId < 0 ?
        <CardList list={users} onClick={onUserClick} onDelete={onUserDelete}/>
        :
        <CardList list={posts} user={currenrUserId}/>
      }
    </div>
  );
}

export default App;
