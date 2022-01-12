import { Outlet, Link } from "react-router-dom";


const UserCard = (props) => {
    return (
      <div
       className='tc bg-dark-gray dib br3 pa3 ma2 bw2 shadow-5 pointer'
       name='main'
       onClick = {(e) => props.onClick(e, props.id)}>
       <span className='tc fr pointer bg-transparent f3' id='delete' onClick={() => props.onDelete(props.id)}>&times;</span>
       <img
        src={`https://robohash.org/${props.id}?size=100x100`}
        style={{backgroundColor: "LightSkyBlue", borderColor: "black", borderStyle: "solid", borderRadius: "50%"}}
        alt=''
        />
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