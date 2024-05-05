import css from "./reviewsList.module.css"
export default function ReviewsList({ info  }) {
  return  <div>
        {info.map(({ author, content, created_at,id, author_details: avatar_path, rating }) => { 
          return  <div  key={id}>
            <h2 >{author}</h2>
                <img src={`https://image.tmdb.org/t/p/w300${avatar_path}`} />
                <p>{rating}</p>
                <p>{content}</p>
                <p>{ created_at}</p>
            </div> 
        })}
    </div>
}