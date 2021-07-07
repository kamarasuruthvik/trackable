import React, { useEffect } from 'react';
import tingle from 'tingle.js';
import './RecipeDetail.css';



const RecipeDetail =({showModal,closeModal})=>{
    
    var modal = new tingle.modal({
        footer: true,
        stickyFooter:false,
        closeMethod: ['overlay','button','escape'],
        closelabel: "Close",
        cssClass: ['custom-class-1','custom-class-2'],
        onOpen: function(){
            console.log('modal open');
        },
        onClose: function(){
            closeModal(false);
        },
        beforeClose:function(){
            
            return true;
            return false;
        }
    });

    modal.setContent('<h1>Here is some content</h1>');
    modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
        // here goes some logic
        modal.close();
    });
    
    modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
        // here goes some logic
        modal.close();
    });

    useEffect(()=>
    {
        modal.open();
    },[showModal]);


    return(
        <div className="modal-container">
        </div>
    )

}


export default RecipeDetail;