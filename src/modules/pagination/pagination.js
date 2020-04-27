import './pagination.scss';
import $ from 'jquery';

class Pagination {
    constructor(elem) {
        this.container = elem;
        this.pages = $(this.container).find('.pagination__item').not('.pagination__control').not('.pagination__item_dots');
        this.buttonNext=$(this.container).find('.pagination__control_next');
        this.buttonPrev=$(this.container).find('.pagination__control_prev');
        this.currentPage = $(this.pages).find('.pagination__item_current');

        this.attachEventHandler(this.pages, this.buttonNext, this.buttonPrev);
    }

    disableControlButton(currentPage) {
        switch (true) {

            case ($(currentPage).text() == 1):
                $(currentPage).siblings('.pagination__control_prev').addClass('pagination__control_disabled');
                $(currentPage).siblings('.pagination__control_next').removeClass('pagination__control_disabled');
                break;

            case (($(currentPage).text() > 1) && ($(currentPage).text() < 15)):
                $(currentPage).siblings('.pagination__control_prev').removeClass('pagination__control_disabled');
                $(currentPage).siblings('.pagination__control_next').removeClass('pagination__control_disabled');
                break;

            case ($(currentPage).text() == 15):
                $(currentPage).siblings('.pagination__control_prev').removeClass('pagination__control_disabled');
                $(currentPage).siblings('.pagination__control_next').addClass('pagination__control_disabled');
                break;
        }
    }

    togglePage(e) {
        let self = $(e.currentTarget);

        self.siblings('.pagination__item_current').removeClass('pagination__item_current');
        self.addClass('pagination__item_current');

        this.disableControlButton(self);

    }
    attachEventHandler(pages, buttonNext, buttonPrev) {
        $(pages).on('click', this.togglePage.bind(this));
        $(buttonNext).on('click', this.nextPage.bind(this));
        $(buttonPrev).on('click', this.prevPage.bind(this));
    }
    nextPage(e) {
        let $currentItem = $('.pagination__item_current');
        let $nextItem = $currentItem.next('.pagination__item');

        if ($nextItem.text() == '...') {
            $nextItem = $nextItem.next('.pagination__item');
        }
        $currentItem.removeClass('pagination__item_current');
        $nextItem.addClass('pagination__item_current');

        this.disableControlButton($nextItem);

        if ($nextItem.text() == '15') {
            $(this).siblings('.pagination__control_next').addClass('pagination__control_disabled');
        } else if ($nextItem.text() == '2') {
            $(this).siblings('.pagination__control_prev').removeClass('pagination__control_disabled');
        }
    }
    prevPage(e) {
        let $currentItem = $('.pagination__item_current');
        let $prevItem = $currentItem.prev('.pagination__item');

        if ($prevItem.text() == '...') {
            $prevItem = $prevItem.prev('.pagination__item');
        }

        $currentItem.removeClass('pagination__item_current');
        $prevItem.addClass('pagination__item_current');

        this.disableControlButton($prevItem);
        
        if ($prevItem.text() == '1') {
            $(this).addClass('pagination__control_disabled');
        } else if ($prevItem.text() == '14') {
            $(this).siblings('.pagination__control_next').removeClass('pagination__control_disabled');
        }
    }

}

$(function () {

    $('.pagination').each(function (idx, elem) {
        new Pagination(elem);
    })
    
});