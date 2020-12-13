"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntegerNumber = getIntegerNumber;
exports.getDecimalNumber = getDecimalNumber;

function getIntegerNumber(num) {
  return Math.floor(num);
}

function getDecimalNumber(num, decimals) {
  var absNum = Math.abs(num);
  return (absNum - Math.floor(absNum)).toFixed(decimals);
}