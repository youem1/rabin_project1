import React from 'react'
import './Login.css';

const Login =()=>{
    return(
        <div className="Login">
            <div className="blur">
                <div className="header-Login">
                    <div className="logo-Login">
                        <div className="icon-Login">
                            

                        </div>
                        <div className="text-Login">
                            <p style={{fontWeight:'500',fontSize:'large',color:'white',fontWeight:'600'}}>anywhere app.</p>
                        </div>

                    </div>
                    <span style={{color:'#747786',fontSize:'larger'}}><p>Home</p></span>
                    <span style={{color:'#747786',fontSize:'larger'}}><p>Join</p></span>

                </div>
                <div className="inputs-Login">
                    <div className="titl-Login">
                        <p style={{fontSize:'larger',color:'#747786'}}>start for free</p>
                        <p style={{fontSize:'50px',fontWeight:'500' ,color:'#ffff'}}>Create new account<span style={{color:'#1a8ff8'}}>.</span></p>
                        <div className="ask-Login" style={{fontSize:'larger',color:'#747786'}}>
                            <span>َalready A member? </span>
                            <span><a href="" style={{color:'#1a8ff8',textDecoration:'none'}}> Login</a></span>
                        </div>

                    </div>
                    <div className="inputPart-Login">
                        <div className="part1-Login">
                            <span className='firstName'>
                                <p style={{color:'#747786'}}>first name</p>
                                <input type="text" /> 
                                <span className='icon-Input'></span>
                            </span>
                            <span className='LastName'>
                                <p style={{color:'#747786'}}>LastName</p>
                                <input type="text" />
                                 <span className='icon-Input'></span>
                            </span>
                        </div>
                        <div className="part2-Login">
                            <div className='titlInfo-Login'>
                                <p style={{color:'#747786'}}>Email</p>
                            </div>

                            <input type="text" />
                            <span className='emailIcon-Login'></span>
                        </div>
                        <div className="part3-Login">
                            <div className='titlInfo-Login'>
                                <p style={{color:'#747786'}}>password</p>
                            </div>

                            <input type="text" />
                            <span className='emailIcon-Login'></span>
 
                        </div>

                    </div>
                    <div className="controler-Login">
                        <span><button>change methode</button></span>
                        <span><button className='createBtn-Login'>Create acount</button></span>


                    </div>


                </div>
            </div>

        </div>
    )
}

export default Login;