import React, {Component} from 'react';
import {connect} from'react-redux';
import {Image,Transformation} from 'cloudinary-react'
import {imageCategory}from '../action/imageCategory'

class Model extends Component {

    onHandleChange =(event)=>{
        this.props.onHandleChange(event.target.value)
    }

    changeCat =()=>{
        let cat = this.props.category
        if (cat === 'Catalogue'){
            return (this.props.imagesCat.map(image=>{
                return(
                    <div key={image.public_id} className='img'>
                        <Image cloudName="monchan"
                               secure="true"

                               publicId={image.public_id}
                               className="img-content">
                            <Transformation width="1648" crop="fill" />
                        </Image>
                    </div>
                )}))
        }
        else if (cat === 'Magazine') {
            return (this.props.imageMag.map(image=>{
                return(
                    <div key={image.public_id} className='img'>
                        <Image cloudName="monchan"
                               secure="true"
                               publicId={image.public_id}
                               className="img-content">
                            <Transformation width="1648" crop="fill" />
                        </Image>
                    </div>
                )}))
        }
        else if (cat === 'Promotion') {
            return (this.props.imagesPromo.map(image=>{
                return(
                    <div key={image.public_id} className='img'>
                        <Image cloudName="monchan"
                               secure="true"
                               publicId={image.public_id}
                               className="img-content">
                            <Transformation width="1648" crop="fill" />
                        </Image>
                    </div>
                )}))
        }
        else {
            return (<div>Choice a categorie</div>)
        }
    }

    render() {
        return (
            <div className="section">

                <select className="select-cat" onChange={this.onHandleChange}>
                    <option id="def">choice</option>
                    <option id="cat">Catalogue</option>
                    <option id="mag">Magazine</option>
                    <option id="prom">Promotion</option>
                </select>
                <div className="image-container">
                    {this.changeCat()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        imagesCat : state.userReducer.imageCatalogue,
        imagesPromo : state.userReducer.imagePromotion,
        imageMag : state.userReducer.imageMagazine,
        category: state.userReducer.catSelect
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        onHandleChange : (event)=>{dispatch(imageCategory(event))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Model);