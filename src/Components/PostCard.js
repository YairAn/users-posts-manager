
const PostCard = (props) => {
    return (
      <div className='tc bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 pointer' >
        <button className='tc fr pointer' onClick={() => props.onDelete(props.id)}>X</button>
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
      </div>
    );
}

export default PostCard;