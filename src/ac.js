/**
 * Created by Andrew on 14-8-8.
 */
/**
 * Created by Andrew on 14-8-8.
 */
/**
 * Everything I learn for JS.
 * @module ac
 */
var ac = {};

/**
 * Draw on canvas
 * @namespace ac
 * @class canvas
 */
ac.canvas = {
    canvasID:"canvas",
    myCanvas:null,
    canvasWidth:600,
    canvasHeight:400,
    cxt:null,
    /**
     * Run canvas before any drawing.
     * @returns {canvas}
     */
    run:function(){
        if (!this.myCanvas) this.myCanvas = window.document.getElementById(this.canvasID);
        if(!this.cxt) this.cxt = this.myCanvas.getContext("2d");
        return this;
    },
    /**
     *Draw line on canvas.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} x2
     * @param {Number} y2
     * @returns {canvas}
     */
    drawLine:function(x,y,x2,y2){
        this.cxt.beginPath();
        this.cxt.moveTo(x,y);
        this.cxt.lineTo(x2,y2);
        this.cxt.closePath();
        this.cxt.stroke();
        return this;

    },
    /**
     *Draw rectangle on canvas.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @returns {canvas}
     */
    drawRect:function(x,y,width,height){
        this.cxt.strokeRect(x,y,width,height);
        return this;
    },
    /**
     * Draw circle on canvas with center and radius.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} radius
     * @returns {canvas}
     */
    drawCircle:function(x,y,radius){
        this.cxt.beginPath();
        this.cxt.arc(x,y,radius,0,Math.PI*2);
        this.cxt.closePath();
        this.cxt.stroke();
        return this;
    },
    drawPoly:function(points){
        var x1 = arguments[0];
        var y1 = arguments[1];
        var len = arguments.length/2;

        this.cxt.beginPath();
        this.cxt.moveTo(x1,y1);

        for (var i = 1; i < len; i++){
            this.cxt.lineTo(arguments[i*2],arguments[i*2+1]);
        }

        this.cxt.closePath();
        this.cxt.stroke();
        return this;
    },
    drawText:function(text,x,y){
        this.cxt.fillText(text,x,y);
        return this;

    },
    /**
     *
     * @param {String} src Image location.
     * @param {Number} x
     * @param {Number} y
     * @returns {canvas}
     */
    drawImage:function(src,x,y){
        var image = new Image();
        image.src = src;
        if(image.complete){
            this.cxt.drawImage(image,x,y);
        }else{
            image.onload = function(){
                this.cxt.drawImage(image,x,y);
            }
        }

        return this;
    },
    fillRect:function(x,y,width,height){
        this.cxt.fillRect(x,y,width,height);
        return this;
    },
    fillCircle:function(x,y,radius){
        this.cxt.beginPath();
        this.cxt.arc(x,y,radius,0,Math.PI*2);
        this.cxt.closePath();
        this.cxt.fill();
        return this;
    },
    fillPoly:function(points){
        var x1 = arguments[0];
        var y1 = arguments[1];
        var len = arguments.length/2;

        this.cxt.beginPath();
        this.cxt.moveTo(x1,y1);

        for (var i = 1; i < len; i++){
            this.cxt.lineTo(arguments[i*2],arguments[i*2+1]);
        }

        this.cxt.closePath();
        this.cxt.fill();
        return this;
    },
    fillCircleMask:function(x,y,radius){
        this.cxt.beginPath();
        this.cxt.moveTo(0,0);
        this.cxt.lineTo(x,0);
        this.cxt.lineTo(x,y-radius);
        this.cxt.arcTo(x,y-radius,x,y+radius,radius);
        this.cxt.lineTo(x,canvasHeight);
        this.cxt.lineTo(0,canvasHeight);
        this.cxt.closePath();
        this.cxt.fill();

        return this;
    },
    /**
     *
     * @param {Number} fontSize
     * @param {String} fontFamily
     * @returns {canvas}
     */
    setFontStyle:function(fontSize, fontFamily){
        this.cxt.font = "" + fontSize + "px " + fontFamily;
        return this;
    },
    /**
     *
     * @param {String} color
     * @returns {canvas}
     */
    setFillStyle:function(color){
        this.cxt.fillStyle = color;
        return this;
    },
    setStrokeStyle:function(color){
        this.cxt.strokeStyle(color);
        return this;
    },
    setCanvas:function(canvasID){
        this.canvasID = canvasID;
        this.myCanvas = window.document.getElementById(canvasId);
        this.cxt = this.myCanvas.getContext("2d");
        return this;
    },
    /**
     *
     * @param {Number} width
     * @param {Number} height
     * @returns {canvas}
     */
    setCanvasSize:function(width, height){
        this.canvasWidth = width;
        this.canvasHeight = height;
        return this;
    },
    moveCanvas:function(x,y){
        this.cxt.translate(x,y);
        return this;
    },
    /**
     * Clean canvas
     * @returns {canvas}
     */
    clearCanvas:function(){
        this.cxt.clearRect(0,0,this.canvasWidth,this.canvasHeight);

        return this;
    },
    /**
     * Save image to a pop up window.
     * @returns {canvas}
     */
    saveImage:function(){
        try{
            window.open(this.myCanvas.toDataURL("image/png"));
        }catch(e){
            alert("Your browser do not support image saving.");
        }

        return this;
    }
};
