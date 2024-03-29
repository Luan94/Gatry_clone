import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import './List.css';
import PromotionSearch from '../Search/Search';

const PromotionList = ({ loading , promotions }) =>{
 if(loading) {
     return <div>Carregando ...</div>;
 }

 return(
 <div className='promotion-list'>
    {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />            
    ))}
 </div>
 );
}

export default PromotionList;