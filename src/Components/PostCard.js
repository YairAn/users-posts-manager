import EditCard from "./EditCard";
import { useState, useEffect } from 'react';

const PostCard = (props) => {

    return (
      <div className='tc bg-light-blue  br3 pa3 ma2 bw2 shadow-5 pointer' >
       <span className='tc fr pointer bg-transparent' onClick={() => props.onDelete(props.id)}>&times;</span>
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