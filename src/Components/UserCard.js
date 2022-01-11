import { Outlet, Link } from "react-router-dom";


const UserCard = (props) => {
    return (
      <div className='tc bg-light-blue dib br3 pa3 ma2 bw2 shadow-5'>
       <span className='tc fr pointer bg-transparent' onClick={() => props.onDelete(props.id)}>&times;</span>
       <img className='pointer' src={`https://robohash.org/${props.id}?size=100x100`}
       onClick = {() => props.onClick(props.id)} />
        <div>
            <h4>{`${props.name}`}</h4>
            <h4>{`(${props.userName})`}</h4>
            <p>{props.email}</p>
            <Link to={`/map/${props.coordinates.lat}/${props.coordinates.lng}/${props.id}`}>
              {`${props.coordinates.lat}/${props.coordinates.lng}`}
            </Link>
            <p>{props.company}</p>
            <Outlet />
        </div>
      </div>
    );
}

export default UserCard;