const Paint = function(volume) {
    this.volume = volume;
    this.emptiness = []
};

Paint.prototype.checkIfEmpty = function(){
    if (this.volume === 0) {
        return true;
    } else {
        return false;
    };
}
Paint.prototype.emptyItself = function(){
    if  (this.volume != 0) {
            return 0;

    }
}

module.exports = Paint;