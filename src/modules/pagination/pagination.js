import './pagination.scss';
import $ from 'jquery';

export class Pagination{
    constructor(elem){
        this.container=elem;
        this.buttonNext=$(this.container).find('.pagination__control_next');
        this.buttonPrev=$(this.container).find('.pagination__control_prev');
        this.pages=$(this.container).find('.pagination__item').not('.pagination__control').not('.pagination__item_dots');
        console.log(this.pages);
        this.currentPage=$(this.pages).find('.pagination__item_current');
        this.attachEventHandler(this.pages,this.buttonNext,this.buttonPrev);
    }
disableControlButton(currentPage){
        if($(currentPage).text()==1){
            $(currentPage).siblings('.pagination__control_prev').addClass('.pagination__control_disabled');
        }else if($(currentPage).text()==15){
            $(currentPage).siblings('.pagination__control_next').addClass('.pagination__control_disabled');
        }
    
    }
togglePage(e){
        let self = $(this);
        self.siblings('.pagination__item_current').removeClass('pagination__item_current');
        console.log($(this));
        self.addClass('pagination__item_current');
        this.disableControlButton(self);
    }
attachEventHandler(pages,buttonNext,buttonPrev){
    $(pages).on('click',this.togglePage);
    $(buttonNext).on('click',this.nextPage);
    $(buttonPrev).on('click',this.prevPage);
}
nextPage(e){
    disableControlButton(self);
}
prevPage(e){
    disableControlButton(self);
}



}

$(function(){
    $('.pagination').each(function(idx,elem){
        new Pagination(elem);
    })
});