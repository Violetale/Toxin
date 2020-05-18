import './card-room.scss';
import $ from 'jquery';
$(function(){
    let $controls= $('.card-room__controls');
    let $btnPrev=$controls.find('.button-prev');
    let $btnNext=$controls.find('.button-next');
    let $photo =$(".room-photo")
    let $photoSrc=$photo.attr('src');
    //-мы будем динамически менять по клику ссылку на изображение, "прикручивая к адресу соответствующее окончание"
    //-например,было photo88-1.png,после щелчка на next будет photo88-2.png

    $btnNext.on('click',nextImg);
    $btnPrev.on('click',prevImg);

    let $currentMarker = $('.card-room__slider-marker_active');
    let $currentMarkerIndex=$currentMarker.attr('data-value');
    console.log($currentMarkerIndex);

    function nextImg(e){
        if(!$currentMarkerIndex==4){
            $currentMarkerIndex++;
            $currentMarker.removeClass('card-room__slider-marker_active');
            $currentMarker=$('.card-room__slider-marker[data-value='+$currentMarkerIndex+']');
            $currentMarker.addClass('.card-room__slider-marker_active');
            console.log($currentMarkerIndex);
            createSrcImg($currentMarkerIndex);
        }
        disableButton(e);
    }
    
    function createSrcImg(src){
        let reg = /\d/;
        $photoSrc = $photoSrc.replace(re,src);
        $photo.attr('src',$photoSrc);
    }
    function disableButton(e){
        if($currentMarkerIndex==1){
            $btnPrev.css('cursor','default');
        }else if($currentMarkerIndex==4){
            $btnNext.css('cursor','default');
        }else{
            $btnPrev.css('cursor','pointer');
            $btnNext.css('cursor','pointer');
        }
    }

    function prevImg(e){
        if(!$currentMarkerIndex==1){
            $currentMarkerIndex--;
            $currentMarker.removeClass('.card-room__slider-marker_active');
            $currentMarker=$('.card-room__slider-marker[data-value="'+$currentMarkerIndex+'"]');
            createSrcImg($currentMarkerIndex);
            $currentMarker.addClass('.card-room__slider-marker_active');
        }
        disableButton();
    }
    
});