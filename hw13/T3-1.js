function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
 }

 Unit.prototype.isReadyToMove ((distance) => this.maxDistance > distance);
 Unit.prototype.isReadyToFight (() => this.health >= this.maxHealth);
 Unit.prototype.restore (() => {if(this.health < this.maxHealth) this.health = this.maxHealth});
 Unit.prototype.clone (() => new unitClone(this.type, this.health, this.maxHealth, this.maxDistance));
 
 function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
 }
 
 Army.prototype.isReadyToMove ((distance) => this.units.every(unit => unit.isReadyToMove(distance)));
 Army.prototype.isReadyToFight (() => this.units.every(unit => unit.isReadyToFight()));
 Army.prototype.restore (() => this.units.filter(unit => unit.restore()));
 Army.prototype.getReadyToMoveUnits ((distance) => this.units.filter(unit => unit.getReadyToMoveUnits(distance)));
 Army.prototype.combineUnits (() => this.units.forEach(unit => unit.push.combineUnits()));
 Army.prototype.cloneUnit = function (numOfUnit){
     const unitNumber = numOfUnit - 1;
     const unitCopied = new Unit(this.type[unitNumber], this.health[unitNumber], this.maxHealth[unitNumber], this.maxDistance[unitNumber]);
     return unitCopied;
 }