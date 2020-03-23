import React from "react";
import "./Thumbnail.css";

const Thumbnail = props => {
  const date = props.Date;
  const id = props.Id;
  const className =  date === undefined ? 'ArticleWrapper SmallThumbnail' : id === undefined ?'ArticleWrapper' :
  'ArticleWrapper ' + id ;
  const titleClassName = date === undefined ? "ArticleHeader SmallFont" : 'ArticleHeader';
  return(
    <article className={className} style={{backgroundImage: `url(${props.Img})`
  }}>
    <div className="PicturesAllInfoWrapper">
    <header className={titleClassName}>{props.Title}</header>
      <div className="PicturesInfoWrapper" > 
          
      <p className="LikesInfo">{props.Likes} Likes</p>
      {date === undefined ? null : <p className="DateInfo">{props.Date}</p>}
      
      </div>
    </div>
      
    </article>
  )
 
}
     
 


export default Thumbnail;

