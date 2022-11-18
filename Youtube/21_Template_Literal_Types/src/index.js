//! Google.com da Ts playground yazip gelen editör sayfasinda bu videonun icerini calisabilirsin!
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var eventName = "onferhat";
console.log(eventName);
var beispielName = "onUpdate";
console.log(beispielName);
var beispielName2 = "onFERO";
console.log(beispielName2);
var beispielName3 = "on1";
console.log(beispielName3);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var obj = {
    name: "Dursun",
    surname: "Ferhat"
};
function createListenableObject(obj, listeners) {
    return new Proxy(obj, {
        set: function (target, property, newValue, receiver) {
            if (listeners) {
                if (typeof property === "string") {
                    var capitalizedPropertyName = property[0].toUpperCase() + property.slice(1);
                    // @ts-ignore
                    if (listeners["on".concat(capitalizedPropertyName, "Update")]) {
                        // @ts-ignore
                        listeners["on".concat(capitalizedPropertyName, "Update")](newValue);
                    }
                }
            }
            console.log({
                arguments: __spreadArray([], arguments, true)
            });
            return Reflect.set(target, property, newValue, receiver); //! Reflectin yansitma özelligi var!!!
        }
    });
}
var newObject = createListenableObject(obj, {
    onNameUpdate: function (newValue) { }
});
setTimeout(function () {
    newObject.name = "Ahmet";
}, 3000);
