function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  //! Burada ki extends U nun sadece objectten türeyebilecegini belirtmek icin kullaniliyor. Ama object degistirilebilir. string, number usw. auch kann schreiben.
  return {
    ...obj1,
    ...obj2,
  };
}

let person = merge(
  { name: "Can" },
  {age:29}
  // 29
);

//! Burada let person = merge function oldugu icin, let person icerisinde 2 tane object tanimlanmasi zorunludur. Merge 2 deger aldigi icin.  

console.log(person);
