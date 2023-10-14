const Login = () => {
    return ( 
        <div className="login">
            <form action="">
                <label>Name</label>
                <br />
                <input type="text" placeholder="Enter username" />
                <br />
                <label>Password</label>
                <br />
                <input type="password" placeholder="Enter Password" />
                <br />
                <input type="submit" className="submit" />
            </form>
        </div>
     );
}
 
export default Login;
