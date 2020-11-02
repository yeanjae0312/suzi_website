$(function(){
    
    //영상크기 변수
    let wHeight = $(window).height();
    let bgmHeight = $('.bgMovie').height();
    
    //브라우저의 높이가 영상의 높이보다 작으면
    if(wHeight < bgmHeight){
        //영상의 높이는 == 윈도우 창의 높이
        $('.bgMovie').height(wHeight+'px');
    }
    
    $(window).resize(function(){
        if($(window).height() < $('.bgMovie').height()){
            $('.bgMovie').height($(window).height()+'px');
        }else{
            $('.bgMovie').height('1920px');
        }
    });
    
    //윈도우 가로크기 변수
    let wSize = $(window).width();
    
    if(wSize >= 1024){
        //패럴렉스 효과
        jQuery('.parallax-layer').parallax({
            mouseport:jQuery('#port'),
            xparallax:0.1,
            yparallax:0,
            xorigin:0.5 //기본 위치값
        });
    }
    
    var popup = '<div class="popup"><p class="m_txt">본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 일부 내용 및 이미지 등은 출처가 따로 있음을 밝힙니다.</p><i class="fas fa-times"></i></div>'
    
    $('body').append(popup);
    
    var popup = $('.popup i.fas');
    popup.click(function(){
//        $('.popup').fadeOut();
        $('.popup').animate({'top':'280px'},300).delay(100).animate({'top':'-100%','opacity':'0'},500);
    });
    
});






















