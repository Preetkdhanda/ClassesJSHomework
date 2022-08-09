const Room = function(areaBySquareMetres){
    this.areaBySquareMetres = areaBySquareMetres;
    this.painted = false;
}


Room.prototype.roompainted = function(){
    this.painted = true;
};


module.exports = Room;