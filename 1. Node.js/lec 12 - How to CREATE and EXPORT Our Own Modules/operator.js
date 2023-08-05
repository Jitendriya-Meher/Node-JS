
const add = (a, b) => {
    return a+b;
};

const sub = (a, b) => {
    return a-b;
};

const name = "Jitendriya Meher";

// export custom module

// module.exports = add;


// multiple export
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;

module.exports = {add,sub,name};