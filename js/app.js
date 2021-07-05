// let btns = document.querySelectorAll(".nav-item") 
// btns.forEach(btn => {

//     btn.addEventListener("click",(e)=> {
//        btn ? btn.classList.add("active-link") : ""
//     })
// })

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    center:true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


var place = [-96.718959, 17.0789115];

var point = new ol.geom.Point(place);

var map = new ol.Map({
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat(place),
    zoom: 16,
  }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature(point)],
      }),
      style: new ol.style.Style({
        image: new ol.style.Circle({
          radius: 10,
          fill: new ol.style.Fill({color: 'orange'}),
        }),
    }),
}) ],

});
ol.proj.useGeographic();


options = {
  // root:,
  rootMargin:" 0px 0px 0px 0px ",
  threshold: 0
}
const sectios = document.querySelectorAll(".col")

function callback(entries, observer){

  entries.forEach(element => {
    if(element.isIntersecting){
      console.log(element)
      let tag = document.getElementById(element.target.getAttribute("id"))
      sectios.forEach(sec => {
        if(sec == element.target ){
          sec.style.animation = "fadeIn"
          sec.style.animationDuration = "5s"
        }else{
          sec.style.animation = "fadeOut"
          // sec.style.animationDuration = "4s" 

        }
        
      })
        
    }
  })
    
    
  // });

  console.log()
  

}

const observer = new IntersectionObserver(callback, options)
sectios.forEach(elemnt =>  observer.observe(elemnt))


