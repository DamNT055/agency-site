import{d as y,Q as v,T as _,g as l,b as s,a,u as e,e as m,w as d,j as x,q as h,h as c,s as k,f as V,o as u,k as b}from"./app-CpJd1nsk.js";import{a as f,b as p,_ as g}from"./TextInput.vue_vue_type_script_setup_true_lang-4bUYI_NG.js";import{P as w}from"./PrimaryButton-_pLa0U8Z.js";const N=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Update your account's profile information and email address. ")],-1),S={key:0},B={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},C={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},E={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},I=y({__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{},status:{}},setup(U){const n=v().props.auth.user,t=_({name:n.name,email:n.email});return(r,o)=>(u(),l("section",null,[N,s("form",{onSubmit:o[2]||(o[2]=V(i=>e(t).patch(r.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(g,{for:"name",value:"Name"}),a(f,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(p,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(g,{for:"email",value:"Email"}),a(f,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),a(p,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),r.mustVerifyEmail&&e(n).email_verified_at===null?(u(),l("div",S,[s("p",B,[m(" Your email address is unverified. "),a(e(b),{href:r.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[m(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),x(s("div",C," A new verification link has been sent to your email address. ",512),[[h,r.status==="verification-link-sent"]])])):c("",!0),s("div",E,[a(w,{disabled:e(t).processing},{default:d(()=>[m("Save")]),_:1},8,["disabled"]),a(k,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:d(()=>[e(t).recentlySuccessful?(u(),l("p",P,"Saved.")):c("",!0)]),_:1})])],32)]))}});export{I as _};
