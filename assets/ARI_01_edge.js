/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'A8',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A8.png",'0px','0px']
            },
            {
                id: 'A7',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A7.png",'0px','0px']
            },
            {
                id: 'A6',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A6.png",'0px','0px']
            },
            {
                id: 'A5',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A5.png",'0px','0px']
            },
            {
                id: 'A4',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A4.png",'0px','0px']
            },
            {
                id: 'A3',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A3.png",'0px','0px']
            },
            {
                id: 'A2',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A2.png",'0px','0px']
            },
            {
                id: 'A1',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A1.png",'0px','0px']
            },
            {
                id: 'A9',
                type: 'image',
                rect: ['0px', '169px','980px','1040px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A9.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_A8}": [
                ["style", "top", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_A1}": [
                ["style", "left", '0px'],
                ["style", "top", '169px']
            ],
            "${_A5}": [
                ["style", "top", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_A7}": [
                ["style", "top", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_A6}": [
                ["style", "top", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_A9}": [
                ["style", "top", '169px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_A3}": [
                ["style", "top", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '980px'],
                ["style", "height", '1344px'],
                ["style", "overflow", 'hidden']
            ],
            "${_A2}": [
                ["style", "top", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_A4}": [
                ["style", "top", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_A9}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 3000 },
                { id: "eid4", tween: [ "style", "${_A2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500 },
                { id: "eid10", tween: [ "style", "${_A8}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 500 },
                { id: "eid9", tween: [ "style", "${_A7}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500 },
                { id: "eid5", tween: [ "style", "${_A3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500 },
                { id: "eid6", tween: [ "style", "${_A4}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
                { id: "eid7", tween: [ "style", "${_A5}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500 },
                { id: "eid8", tween: [ "style", "${_A6}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-30004876");
