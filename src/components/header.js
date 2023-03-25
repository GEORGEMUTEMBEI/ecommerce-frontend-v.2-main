import  React, {useContext} from 'react';
import { NavLink} from 'react-router-dom';
import { UserAuth } from '../auth/auth';
import { AuthContext } from '../auth/auth';
   

export const Navbar= ()=>{
    const auth=UserAuth()
    const { logoutUser } = useContext(AuthContext);
    
    const NavLinkStyles =({isActive})=>{
        return{
            fontWeight: isActive? 'bold':'normal',
            textDecoration: 'none',
            color: 'white',
        }
    }
   
    return(
        
        <nav  className='main'>
            <NavLink style={NavLinkStyles} to='/'>Home</NavLink>
            <NavLink style={NavLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={NavLinkStyles} to='/about'>About</NavLink>
            <NavLink style={NavLinkStyles} to='/contact'>Contact Us</NavLink>
            { /*<NavLink  style={NavLinkStyles} to ='/products'>Products</NavLink>
                
            
            
            {
                auth.user && (
                    <NavLink  style={NavLinkStyles} to ='/profile'>Profile</NavLink>
                )
            }
            {
                auth.user && (
                    <NavLink  style={NavLinkStyles} to ='/businessregistration'>Business</NavLink>
                )
            }
            {
                auth.user && (
                    <NavLink  style={NavLinkStyles} onClick={logoutUser }>logout</NavLink>
                )
            }
            
            {
                !auth.user && (
                    <NavLink  style={NavLinkStyles} to ='/register'>Register</NavLink>
                )
            }
            
            {
                !auth.user && (
                    <NavLink  style={NavLinkStyles} to= '/login'>Login</NavLink>
                )
                */}
             
        </nav>
    ); 
};