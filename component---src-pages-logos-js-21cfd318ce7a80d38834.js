(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{220:function(n,t,e){"use strict";e.r(t);var a=e(28),i=e(107),o=(e(210),e(215)),r=e.n(o),c=e(232),s=e.n(c),p=e(214),l=e.n(p),d=e(211),b=e.n(d),x=e(212),f=e.n(x),m=e(213),u=e.n(m);e(209);function h(){var n=z(["\n                    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC|Bubblegum+Sans|Cinzel+Decorative:700|Cinzel:900|Cormorant:700|Old+Standard+TT:700|Playfair+Display:700|Righteous&display=swap');\n                    @import url('https://fonts.googleapis.com/css?family=Hepta+Slab:300,400,700|Lato:300,400,700&display=swap');\n                    * {\n                        transition: all .15s ease-in-out;\n                    }\n                    html {\n                        height: 100vh;\n                    }\n                    body {\n                        margin: 0;\n                        background: url('","');\n                        // background-position: center;\n                        background-size: cover;\n                        background-attachment: fixed;\n                    }\n                    .title {\n                        filter: drop-shadow(0 0 0.25rem black);\n                        color: white;\n                        text-shadow:\n                        -1px -1px 0 black,\n                        1px -1px 0 black,\n                        -1px 1px 0 black,\n                        1px 1px 0 black;\n                    }\n                    .text {\n                        color: black;\n                    }\n                    .circleimage {\n                        filter: drop-shadow(0 0 0.75rem black);\n                        &:hover {\n                            filter: drop-shadow(0 0 1rem black);\n                        }\n                    }\n                    .halfground {\n                        border: 2px solid rgba(0,0,0,1); \n                        background: rgba(255,255,255,0.85);\n                        -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n                        -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n                        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n                        &:hover {\n                            background: rgba(255,255,255,1);\n                            background-image: url('","'); \n                            -webkit-box-shadow: 10px 10px 35px 0px rgba(0,0,0,0.75);\n                            -moz-box-shadow: 10px 10px 305x 0px rgba(0,0,0,0.75);\n                            box-shadow: 10px 10px 35px 0px rgba(0,0,0,0.75);\n                        }\n                    }\n                    .newberry-transcribe {\n                        font-family: 'Lato', sans-serif;\n                        font-weight: 400;\n                        font-size: 1rem;\n                        color: black;\n                        text-decoration: none;\n                        padding: 15px 30px ;\n                        border: 1px solid rgba(0,0,0, 0.75);\n                        &:hover {\n                            border: 1px solid black;\n                            background-color: white;\n                            -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n                            -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n                            box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n                        }\n                        background: rgba(255,255,255,0.5);\n                        border-radius: 6px; \n                        flex-basis: 1rem;\n                        text-align: center;\n                        flex-shrink: 0;\n                        -webkit-box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);\n                        -moz-box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);\n                        box-shadow: 5px 5px 30px 0px rgba(0,0,0,0.75);\n                    }\n                    .textcontent {\n                        flex-grow: 1;\n                    }\n                    .strike {\n                        display: block;\n                        text-align: center;\n                        overflow: hidden;\n                        white-space: nowrap; \n                    }\n                \n                    .strike > span {\n                        position: relative;\n                        display: inline-block;\n                        font-family: 'Hepta Slab',serif;\n                        text-transform: uppercase;\n                        font-style: italic;\n                    }\n                    \n                    .strike > span:before,\n                    .strike > span:after {\n                        content: \"\";\n                        position: absolute;\n                        top: 50%;\n                        width: 9999px;\n                        height: 1px;\n                        background: black;\n                    }\n                \n                    .strike > span:before {\n                        right: 100%;\n                        margin-right: 15px;\n                    }\n                \n                    .strike > span:after {\n                        left: 100%;\n                        margin-left: 15px;\n                    }\n                "]);return h=function(){return n},n}function w(){var n=z(["\n    ","\n    font-size: 3vw;\n    margin-bottom: 50px;\n    font-weight: ",";\n    color: ",";\n    filter: drop-shadow(0 0 0.25rem #000);\n    text-shadow:\n        -1px -1px 0 black,\n        1px -1px 0 black,\n        -1px 1px 0 black,\n        1px 1px 0 black;\n    & .top {\n    line-height: 4vw;\n    font-size: 4.55vw;\n    }\n    & .bottom {\n        line-height: 4vw;\n        font-size: 6vw;\n    }\n"]);return w=function(){return n},n}function g(){var n=z(["\n    position: absolute;\n    top: -30px;\n    bottom: -20px;\n    left: -40px;\n    right: -80px;\n    z-index: -1;\n    border-radius: 3px;\n    &:hover {\n        background-attachment: fixed;\n        background-position: center;\n    }\n\n    @media (max-width: 1100px) {display: none;}\n    // width: 75%;\n    // @media (max-width: 1100px) {width: 85%;} \n    // @media (max-width: 750px) {width: 100%;} \n"]);return g=function(){return n},n}function j(){var n=z(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    @media (max-width: 1100px) {flex-direction: row; width: 85%; justify-content: space-between; margin: auto;} \n    @media (max-width: 750px) {display: none;} \n"]);return j=function(){return n},n}function O(){var n=z(["\n    position: relative;\n    align-content: space-between;\n    display: flex;\n    flex-direction: column;\n    flex-basis: 70%;\n    height: 100%;\n    @media (max-width: 1100px) {\n        flex: 1;\n        padding: 10px;\n        flex-basis: initial;\n        border: 2px solid rgba(0,0,0,1); \n        background: rgba(255,255,255,0.85);\n        -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n        -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);\n    } \n"]);return O=function(){return n},n}function k(){var n=z(["\n    width: 60%; \n    position: relative;\n    @media (max-width: 1100px) {width: 80%; display: block; padding: 0; margin: 70px auto;} \n    display: flex; \n    justify-content: center;\n    margin: 70px auto 10px auto;\n    padding: 50px;\n    padding-bottom: 20px;\n"]);return k=function(){return n},n}function v(){var n=z(["\n    flex: 1;\n    max-width: 150px;\n    max-height: 150px;\n"]);return v=function(){return n},n}function y(){var n=z(["\n    font-family: 'Hepta Slab',serif;\n    font-weight: 700;\n    // font-size: 7rem;\n    // line-height: 5rem;\n    margin: 0;\n     &.upper {\n        font-weight: 700;\n\n    // font-family: 'Lato', sans-serif;\n         font-size: 4vw;\n         line-height: 3.4vw;\n     }\n     &.lower {\n         line-height: vw;\n         font-size: 5vw;\n    margin: 0 0 10px 0;\n    line-height: 4vw;\n        }\n"]);return y=function(){return n},n}function N(){var n=z(["\n    font-family: 'Lato', sans-serif;\n    font-size: 1.5rem;\n    // text-align: justify;\n    padding: 15px 30px ;\n"]);return N=function(){return n},n}function z(n,t){return t||(t=n.slice(0)),n.raw=t,n}i.a.div(N()),i.a.p(y());var M=i.a.img(v()),T=i.a.div(k()),S=i.a.div(O()),C=i.a.div(j()),B=i.a.div(g()),D=i.a.div(w(),(function(n){return n.font}),(function(n){return n.weight}),(function(n){return n.color}));t.default=function(){var n="font-family: 'Hepta Slab',serif; ",t="font-family: 'Bowlby One SC', cursive; ",e="font-family: 'Bubblegum Sans', cursive; ",i="font-family: 'Cinzel', serif; ",o="font-family: 'Cinzel Decorative', cursive; ",c="font-family: 'Cormorant', serif; ",p="font-family: 'Old Standard TT', serif; ",d="font-family: 'Playfair Display', serif; ",x="font-family: 'Righteous', cursive; ";return Object(a.d)("div",{className:"wrapper"},Object(a.d)(a.a,{styles:Object(a.c)(h(),r.a,s.a)}),Object(a.d)(T,null,Object(a.d)(C,null),Object(a.d)(S,null,Object(a.d)(B,{className:"halfground"}),Object(a.d)("div",{className:"textcontent"},Object(a.d)(D,{color:"white",weight:900,font:n},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")),Object(a.d)(D,{color:"white",weight:400,font:t},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")),Object(a.d)(D,{color:"white",weight:400,font:e},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")),Object(a.d)(D,{color:"white",weight:900,font:i},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")),Object(a.d)(D,{color:"white",weight:700,font:o},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")),Object(a.d)(D,{color:"black",weight:700,font:c},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")),Object(a.d)(D,{color:"black",weight:700,font:p},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")),Object(a.d)(D,{color:"black",weight:700,font:d},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")),Object(a.d)(D,{color:"white",weight:400,font:x},Object(a.d)("span",{className:"top"},"Midwest"),Object(a.d)("br",null),Object(a.d)("span",{className:"bottom"}," Time Machine")))),Object(a.d)(C,null,Object(a.d)(M,{className:"circleimage",src:b.a,alt:""}),Object(a.d)(M,{className:"circleimage",src:f.a,alt:""}),Object(a.d)(M,{className:"circleimage",src:l.a,alt:""}),Object(a.d)(M,{className:"circleimage",src:u.a,alt:""}))))}},232:function(n,t,e){n.exports=e.p+"static/mtm-index-2-t-6cc9d5923d3e168f152e97aeb8cc6710.png"}}]);
//# sourceMappingURL=component---src-pages-logos-js-21cfd318ce7a80d38834.js.map