import{d,T as u,c,w as l,o as i,a,u as s,Z as p,g as f,t as _,h as w,b as t,e as g,n as y,f as b}from"./app-CpJd1nsk.js";import{_ as k}from"./GuestLayout.vue_vue_type_script_setup_true_lang-BPceAmOv.js";import{_ as x,a as h,b as V}from"./TextInput.vue_vue_type_script_setup_true_lang-4bUYI_NG.js";import{P as v}from"./PrimaryButton-_pLa0U8Z.js";import"./ApplicationLogo-C0p7pn87.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B=t("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},P={class:"flex items-center justify-end mt-4"},q=d({__name:"ForgotPassword",props:{status:{}},setup(C){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(o,r)=>(i(),c(k,null,{default:l(()=>[a(s(p),{title:"Forgot Password"}),B,o.status?(i(),f("div",N,_(o.status),1)):w("",!0),t("form",{onSubmit:b(m,["prevent"])},[t("div",null,[a(x,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(V,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",P,[a(v,{class:y({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:l(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}});export{q as default};
