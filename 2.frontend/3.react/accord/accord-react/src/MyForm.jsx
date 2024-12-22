export function MyForm(){
    return(
      <div className = "MyForm">
        <form>
            <label>Username: </label>
            <input type = "text" id = "n"/>
            <br></br><br></br>
            <label>Password: </label>
            <input type = "text" id = "p"/>
            <br></br><br></br>
            <input type = "button" value = "Login"/>
        </form>
      </div>  
    );
}