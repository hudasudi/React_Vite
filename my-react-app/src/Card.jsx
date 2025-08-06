
function Card({name,image,description1,description2}){

  return(
      <div className="card">
           <img  src={image} alt="profile-pic" className='icon'/>
        <div className='card-content'>
           <h2 className='card-title'>{name}</h2>
           <p className='card-text'>{description1}</p>
           <p className='card-text'>{description2}</p>

        </div>

      </div>
  );

}
export default Card