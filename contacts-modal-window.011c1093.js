parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qnmS":[function(require,module,exports) {
const t=document.getElementById("contactsModalBbtnWrapper"),e=document.querySelectorAll(".contacts__modal-btn"),c=document.querySelectorAll(".modal-maps__content-item"),a=document.getElementById("location-btn"),n=document.querySelector(".modal-overlay"),s=document.getElementById("contactsCloseBtn"),l=t=>{for(o=0;o<e.length;o++)e[o].classList.remove("active");t.classList.add("active")};a.addEventListener("click",()=>{n.classList.add("active")}),s.addEventListener("click",()=>{n.classList.remove("active")}),t.addEventListener("click",t=>{for(currTab=t.target.dataset.contactsmodalbtn,l(t.target),i=0;i<c.length;i++)c[i].classList.remove("active"),c[i].dataset.contactsmodalcontent===currTab&&c[i].classList.add("active")});
},{}]},{},["qnmS"], null)
//# sourceMappingURL=/iceCream/contacts-modal-window.011c1093.js.map