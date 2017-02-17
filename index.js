var rstats  = require('rstats');

var R  = new rstats.session();

// R.parseEvalQ("cat('\n Hello World \n')");

// var x = R.parseEval("c(1,2,3)");

// console.log(x);

R.assign('x', 17);
R.assign('y', 3);

// calculate the sum of x+y and print the result
// R.parseEvalQ("res = x + y; print(res);");

var res = R.get('x');
// var res = R.get('res');

console.log(res);

R.parseEvalQ("mat = matrix(1:4,ncol=2,nrow=2)");
var mat = R.get('mat');

console.log(mat);

R.parseEvalQ('x = rnorm(100); y = 4x + rnorm(100); lm_fit = lm(y~x);');
var lm_fit = R.get('lm_fit');
var coefs = lm_fit.coefficients;
var residuals = lm_fit.residuals;

console.log(coefs);

console.log(residuals);