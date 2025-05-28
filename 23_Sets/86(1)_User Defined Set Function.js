/*
1. subset
2. union
3. difference
4. intersection
 */

Set.prototype.subset = function(otherset){
    if(this.size > otherset.size){
        return false;
    }else{
        for (var element of this){
            if (!otherset.has(element)) return false;
        }
        return true;
    }
};

Set.prototype.union = function(otherset){
    const unionSet = new Set();
    for (let element of this){
        unionSet.add(element);
    }
    for (let element of otherset){
        unionSet.add(element);
    }
    return unionSet;
};

Set.prototype.intersection = function(otherset){
    const intersectionSet = new Set();
    for (let element of otherset){
        if(this.has(element)){
            intersectionSet.add(element);
        }
    }
    return intersectionSet;
};

Set.prototype.difference = function(otherset){
    const differenceSet = new Set();
    for (let element of otherset){
        if(!this.has(element)){
            differenceSet.add(element);
        }
    }
    return differenceSet;
};

const setA = new Set([1,2,3]);
const setB = new Set([5,6,1,2,3,4]);
const setC = new Set([1,3,4,5]);

console.log(setA.subset(setB));
console.log(setA.subset(setC));
console.log(setC.subset(setB));

console.log(setA.union(setB));

console.log(setA.intersection(setB));

console.log(setA.difference(setB));