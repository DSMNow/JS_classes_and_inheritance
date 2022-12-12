function sum(old_value, given_array) {
  let summa = 0;
  for (let i = 0; i < given_array.length; i++) {
    summa += given_array[i];
  }  
  return summa;
}

class Builder {
  constructor(num) {
    this.num = num;
  }

  plus(...nums) {
    this.num += sum(0, nums);
    return this;
  }
  
  minus(...nums) {
    this.num -= sum(0, nums);
    return this;
  }

  multiply(n) {
    this.num *= n;
    return this;
  }

  divide(n) {
    this.num = Math.floor(this.num/n);
    return this;
  }

  get() {
    return this.num;
  }
}

class IntBuilder extends Builder {
  constructor(int = 0) {
    super(int); 
  }

  mod(n) {
    this.num %= n;
    return this;
  }

  static random(start, end) {
    const random_result = Math.floor(Math.random()*(end - start + 1)) + end;
    return random_result;
  }
}

function StringBuilder(str = "") {
	this.str = str;
}

StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.plus = function (...strings) {
  this.str += sum("", strings);
  return this.str;
};
StringBuilder.prototype.minus = function (n) {
  this.str = this.str.slice(0, -n);
  return this.str;
};

StringBuilder.prototype.multiply = function (n) {
  this.str = this.str.repeat(n);
  return this.str;
};

StringBuilder.prototype.divide = function (n) {
  this.str = this.str.slice(0, Math.floor(this.str.length / n));
  return this.str;
};

StringBuilder.prototype.remove = function (str) {
  this.str = this.str.split(str).join("");
  return this.str;
};

StringBuilder.prototype.sub = function (start, n) {
  this.str = this.str.slice(start, start + n);
  return this.str;
};
