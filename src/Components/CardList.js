import UserCard from "./UserCard";
import PostCard from "./PostCard";

const CardList = ({ list, user, onClick, onDelete, onUpdate}) =>
{      
    if(user) { 
        let filter = list.filter(item => item.userId === user)
        return(
            <div>
                 {
                  filter.map((post, i) => {
                  return (
                     <PostCard key={i}
                      id={post.id}
                      title={post.title}
                      body = {post.body}
                      onClick ={onClick}
                      onDelete={onDelete}
                      onUpdate={onUpdate}
                      />
                  );
              })   
            }
            </div>
        ); 
    } else {
        return(
        <div>
             {
              list.map((user, i) => {
              return (
                 <UserCard key={i}
                  id={list[i].id}
                  name={list[i].name}
                  userName = {list[i].username}
                  email={list[i].email}
                  coordinates = {list[i].address.geo}
                  company = {list[i].company.name}
                  onClick ={onClick}
                  onDelete={onDelete}
                  />
              );
          })   
        }
        </div> 
        ); }
 }


export default CardList;
