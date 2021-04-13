function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
 }

 Unit.prototype.isReadyToMove = function(distance){
     return this.maxDistance > distance
 };
 Unit.prototype.isReadyToFight = function(){
     return this.health >= this.maxHealth
 };
 Unit.prototype.restore = function(){
    if (this.health < this.maxHealth) this.health = this.maxHealth;
    return
 }
 Unit.prototype.clone = function(){
   return new unitClone(this.type, this.health, this.maxHealth, this.maxDistance);
 };
 
 function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
 };
 
 Army.prototype.isReadyToMove = function(distance){
    this.units.every(unit => unit.isReadyToMove(distance));
 };
 Army.prototype.isReadyToFight = function(){
    this.units.every(unit => unit.isReadyToFight());
 };
 Army.prototype.restore = function(){
    this.units.filter(unit => unit.restore());
 }
 Army.prototype.getReadyToMoveUnits = function(distance){
    this.units.filter(unit => unit.getReadyToMoveUnits(distance));
 };
 Army.prototype.combineUnits = function(){
    this.units.forEach(unit => this.units.push(unit));
 };
 Army.prototype.cloneUnit = function (numOfUnit){
     const unitNumber = numOfUnit - 1;
     const unitCopied = new Unit(this.type[unitNumber], this.health[unitNumber], this.maxHealth[unitNumber], this.maxDistance[unitNumber]);
     return unitCopied;
 }