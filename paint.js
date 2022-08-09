const Paint = function(litres){
    this.litres = litres

}

Paint.prototype.checkIfPaintIsEmpty = function(){
    if (this.litres === 0){
        return true
    } else {
        return false
    }
}

Paint.prototype.emptyPaint = function(){

    litres = 0
    return litres
}



module.exports = Paint