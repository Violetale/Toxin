import './like-button.scss';
import $ from 'jquery';

class LikeButton {
    constructor(node){
        this.button = node;
        this._bindEventListener();
    }  
    //функция навешивающая обработчик событий
    _bindEventListener(){
        $(this.button).on('click',this._like);
    }
    _like(e){
        let self=$(this);
        let likeCounter=self.find('.like-button__counter');
        let likeCounterVal=Number(likeCounter.attr('data-count'));

        if(self.hasClass('like-button_clicked')){
            likeCounterVal--;
        }else{
            likeCounterVal++;
        }

        self.toggleClass('like-button_clicked');
        likeCounter.attr('data-count',likeCounterVal);
        likeCounter.text(likeCounterVal);
    }

}
//инициализация
$(()=>{
    $('.js-like-button').each((index,likebutton)=>{
        new LikeButton(likebutton);
    });
});
