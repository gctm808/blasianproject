import React, {Component} from 'react';
import '../../css/styles.css';
import ToutList from '../../components/organisms/toutList';

class Products extends Component {

    render(){
        return (
            <div className='l productsContainer'>
                <h2>MEDIA</h2>
                <h3>Description of Different Types of Media</h3><br /><br />
                <ToutList />
            </div>
        )
    }
};

export default Products;