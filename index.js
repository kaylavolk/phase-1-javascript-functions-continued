// code your solution here
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);

}
function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`);
}
function wrapAdjective(star = "*"){
    const innerFunction = function (adjective = "special"){
        return (`You are ${star}${adjective}${star}!`);
    }
    return innerFunction
}
wrapAdjective("%")("a dedicated programmer!"); 