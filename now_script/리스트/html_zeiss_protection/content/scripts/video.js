document.addEventListener("DOMContentLoaded", function(){
    var player = videojs("my-video", {
        // sources : [
        //     { src : "http://www.동영상주소", type : "video/mp4"}
        // ],
        // autoplay: "muted",
        poster: "../../content/images/video-image.png",
        preload: "auto",
        controls: true,
        loop: true,
        // fluid: true,
        // fill:true,
        // aspectRatio: '16:9',
        responsive: true,
        width:1170,
        height:658,
        // controlBar : { 
        //     playToggle : true, // 재생/일시정지
        //     pictureInPictureToggle : true, // pip모드
        //     remainingTimeDisplay : true, // 남은 시간
        //     progressControl : true, // 재생 바
        // }
    });
});