import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import"./assets/vendor-10cb7c31.js";let e={email:"",message:""};const t=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))},o=()=>{const a=localStorage.getItem("feedback-form-state");a&&(e=JSON.parse(a),document.querySelector('.feedback-form [name="email"]').value=e.email,document.querySelector('.feedback-form [name="message"]').value=e.message)},r=a=>{e[a.target.name]=a.target.value,t()},m=()=>{localStorage.removeItem("feedback-form-state"),e={email:"",message:""},document.querySelector(".feedback-form").reset()};document.querySelector(".feedback-form").addEventListener("input",r);document.querySelector(".feedback-form").addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),m()});document.addEventListener("DOMContentLoaded",o);
//# sourceMappingURL=commonHelpers2.js.map
