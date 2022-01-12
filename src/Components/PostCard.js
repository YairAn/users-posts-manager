import EditCard from "./EditCard";

const PostCard = (props) => {

    return (
      <div className='tc bg-dark-gray br3 pa3 ma2 bw2 shadow-5' >
       <span className='tc fr pointer bg-transparent f3' onClick={() => props.onDelete(props.id)}>&times;</span>
        <div>
            <EditCard
             id={props.id}
             title={props.title}
             body={props.body}
             onUpdate={props.onUpdate}/>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
      </div>
    );
}

export default PostCard;