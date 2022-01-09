
const UserCard = (props) => {
    return (
      <div className='tc bg-light-blue dib br3 pa3 ma2 bw2 shadow-5'>
       <button className='tc fr' onClick={() => props.onDelete(props.id)}>X</button>
       <img src={`https://robohash.org/${props.id}?size=100x100`}
       onClick = {() => props.onClick(props.id)} />
        <div>
            <h3>{`${props.name}(${props.userName})`}</h3>
            <p>{props.email}</p>
            <p>{`${props.coordinates.lat}/${props.coordinates.lng}`}</p>
            <p>{props.company}</p>
        </div>
      </div>
    );
}

export default UserCard;