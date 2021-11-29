var text = '"We ensure the results of our cooperation will not only satisfy, but also amaze you! You will reach more people and boost your sales to the moon!"';

const field = $('#typedtext');
var i = 0
var output = '';

function write() {
    if (i < text.length) {
        output += text.charAt(i);
        field.html(output + '|');
        setTimeout("write()", 30);
        i++;
    } else {
        field.html(output);
    }
}

setTimeout("write()", 1500);

const controller = new ScrollMagic.Controller();

var tl1 = new TimelineMax();

tl1.from('#s2_title', 0.75, {y: 150, opacity: 0})
    .from('#icon1', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#grid_p1', 0.5, {y: 50, opacity: 0}, "-=0.5")
    .from('#icon2', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#grid_p2', 0.5, {y: 50, opacity: 0}, "-=0.5")
    .from('#icon3', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#grid_p3', 0.5, {y: 50, opacity: 0}, "-=0.5")
    .from('#icon4', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#grid_p4', 0.5, {y: 50, opacity: 0}, "-=0.5")
    .from('#icon5', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#grid_p5', 0.5, {y: 50, opacity: 0}, "-=0.5")

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#s2_grid"
})
    .setTween(tl1)
        .addTo(controller);


var tl2 = new TimelineMax();

tl2.from('#s3_title',  0.75,{y: 100, opacity: 0})
    .from('#s3_subtitle', 0.75, {y: 50, opacity: 0}, '-=0.5')
    .from('#s3_box1', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box2', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box3', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box4', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box5', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box6', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box7', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box8', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box9', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box10', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box11', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box12', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box13', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box14', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')
    .from('#s3_box15', 0.5, {rotation: 180, opacity: 0, scale: 0}, '-=0.4')

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#s3_grid"
})
    .setTween(tl2)
        .addTo(controller);


var tl3 = new TimelineMax();

tl3.to('#curve', 1, {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
    .to('#bg', 1, {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, "-=1")
    .from('#s4_title', 0.75, {x: -50, opacity: 0}, '-=0.5')
    .from('#button2', 0.5, {scale: 0}, '-=0.5')
    .from('#circle1', 0.5, {rotation: 180, scale: 0}, '-=0.4')
    .from('#circle2', 0.5, {rotation: 180, scale: 0}, '-=0.4')
    .from('#circle3', 0.5, {rotation: 180, scale: 0}, '-=0.4')

const scene3 = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    triggerElement: "#fourth"
})
    .setTween(tl3)
        .addTo(controller);