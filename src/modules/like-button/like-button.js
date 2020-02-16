import './like-button.scss';
import $ from 'jquery';
$(document).ready(function(){
    $('.like-button').on('click',like);
    function like(e){
        let self = $(this);
        let likeCount = self.find('.like-button__count');
        let likeCountVal =parseInt(likeCount.attr('data-value'));
        if(self.hasClass('like-button_clicked')){
            likeCountVal--;
        }else{
            likeCountVal++;
        }
        self.toggleClass('like-button_clicked');
        likeCount.attr('data-value',likeCountVal);
        likeCount.text(likeCountVal);
    }
});