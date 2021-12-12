import Google from '../images/google.jpg'
import GitHub from '../images/github.jpg'
import Facebook from '../images/facebook.jpg'

const Login = () => {

    const google = () => {
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, '_self')
    }

    const github = () => {
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/github`, '_self')
    }

    const facebook = () => {
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/facebook`, '_self')
    }
    
    return (
        <div className='login'> 
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google">
                        <img 
                            className='icon' 
                            src={Google} 
                            alt="google-img" 
                            onClick={google}
                        />
                    </div>
                    <div className="loginButton github">
                        <img 
                            className='icon' 
                            src={GitHub} 
                            alt="github-img" 
                            onClick={github}
                        />
                    </div>
                    <div className="loginButton facebook">
                        <img 
                            className='icon' 
                            src={Facebook} 
                            alt="facebook-img" 
                            onClick={facebook}
                        />
                    </div>
                </div>
                <div className="center">
                    <div className="line"></div>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <button className='submit'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login