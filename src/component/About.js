import React ,{Component}from 'react';
import japan from '../img/japan.png'
import {connect} from 'react-redux'
import uk from '../img/uk.png'
import {handleLang} from '../action/changeLang'

class About extends Component{

    render() {
        return (
            <div className='about'>
                <img src={this.props.lang === 'JP'?(japan):(uk)} className='icon-lang' onClick={this.props.handleLang}/>
                <p className="content-about-me">{this.props.content}</p>

            </div>
        );
    }
};

const mapStateToProps = (state) =>{
    return{
        lang: state.aboutMe.lang,
        content: state.aboutMe.content
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        handleLang : ()=>{dispatch(handleLang())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About);