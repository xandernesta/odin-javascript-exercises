const ftoc = function(fnum) {
  cresult = (fnum - 32) * (5/9)
  roundedc = Number(cresult.toFixed(1));
  return roundedc;
};

const ctof = function(cnum) {
  fresult = cnum * (9/5) + 32
  roundedf = Number(fresult.toFixed(1));
  return roundedf;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
