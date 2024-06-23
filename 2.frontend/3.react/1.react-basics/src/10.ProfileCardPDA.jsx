import "./10.ProfilecardPDA.css" 

export default function ProfileCardPDA (props){
    return (
        <div>
            <img src={props.image} alt={props.title + "logo"} />
            <h3>{props.title}</h3> 
            <h5>{props.twitter}</h5> 
        </div>
    )
}