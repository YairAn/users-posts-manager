
const PostCard = (props) => {
    return (
      <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
      </div>
    );
}

export default PostCard;