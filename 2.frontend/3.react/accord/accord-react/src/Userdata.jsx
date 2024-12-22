import beach1 from './pictures/img1.avif';
import beach2 from './pictures/img2.avif';
import beach3 from './pictures/img3.avif';

export function UserData1(){
    const name = "Bharath";
    const age = 29;
    const phno = "9677395396";
    const loc = "Chennai";
    return(
        <div className = "Userdata">
            <h1>User Information: </h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Phone Number: {phno}</p>
            <p>Location: {loc}</p>
        </div>
    )
}

export function UserData2(){
    const userInfo = [
        {id:1, name:"Abi", age:21, loc:"Chennai"},
        {id:2, name:"Anu", age:25, loc:"Madurai"},
        {id:3, name:"Sai", age:26, loc:"Chennai"},
    ];
    const userList = userInfo.map((ud) => <li key={ud.id}>{ud.name}: {ud.age}, {ud.loc}</li>);
    return (
        <div className="userData">
            <ul>{userList}</ul>
        </div>
    )
        
}

export function ImageData(){
    return(
        <div>
            <img src={beach1} alt="" />
            <img src={beach2} alt="" />
            <img src={beach3} alt="" />
        </div>
    )
}