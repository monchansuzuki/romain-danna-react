import React ,{Component} from 'react';
import burger from '../img/burger.svg'
import {connect} from 'react-redux'
import {toogleMenu,toggleLink} from '../action/navBar'
import {Link} from 'react-router-dom'

class Nav extends Component{
    toggleMenu = () =>{
        this.props.handleBurger()
    }

   render() {
       return (
           <header className='header'>
               <Link to={"/"} className='logo'>Romain Danna</Link>

               <div className="toggle-menu">
                <span onClick={this.toggleMenu}>
                    <span className='burger'><img src={burger} alt='burger icon'/></span>
                </span>
               </div>

               <nav className={this.props.isToggle?('nav-bar nav-bar-active'):('nav-bar')}>
                   <Link to="/model" className="nav-link" ><span onClick={this.props.handleLink()}>I am model</span></Link>
                   <Link to="/actor" className="nav-link" ><span onClick={this.props.handleLink()}>I am an actor</span></Link>
                   <Link to="/music" className="nav-link" ><span onClick={this.props.handleLink()}>I compose music</span></Link>
                   <Link to="/about" className="nav-link" ><span onClick={this.props.handleLink()}>About me</span></Link>
                   <Link to="/contact" className="nav-link" ><span onClick={this.props.handleLink()}>Contact me</span></Link>
               </nav>
           </header>
       );
   }
};

const mapStateToProps = (state) =>{
    return{
        isToggle : state.navReducer.isToggle
    }

}

const mapDispatchToProps = ( dispatch ) =>{
    return{
            handleBurger : ()=>{dispatch(toogleMenu())},
            handleLink : ()=>{dispatch(toggleLink())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);