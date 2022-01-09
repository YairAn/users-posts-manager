import UserCard from "./UserCard";
import PostCard from "./PostCard";

const CardList = ({ list, user, onClick, onDelete}) =>
{      
    if(user) {
        return(
            <div>
                 {
                  list.filter(item => item.userId === user)
                  .map((post, i) => {
                  return (
                     <PostCard key={i}
                      id={list[i].id}
                      title={list[i].title}
                      body = {list[i].body}
                      onClick ={onClick}
                      onDelete={onDelete}
                      />
                  );
              })   
            }
            </div>
        ); 
    } else return(
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
        ); 
 }


export default CardList;
