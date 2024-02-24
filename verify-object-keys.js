const verifyObjectKeys = (arrayObj) => {
    const dontHaveaANeededKey = arrayObj.filter(el => !el.hasOwnProperty('user') || !el.hasOwnProperty('email') || !el.hasOwnProperty('wishesToReceive') || !el.hasOwnProperty('daysSinceLastVisit'));
    return dontHaveaANeededKey.length === 0;
}

const teste = [{mail:'teste', wishesToReceive: 'teste', daysSinceLastVisit: 1}];
console.log(verifyObjectKeys(teste));

module.exports = verifyObjectKeys;
