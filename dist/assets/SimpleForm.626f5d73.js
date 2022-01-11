var S=Object.defineProperty,C=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var y=(a,t,e)=>t in a?S(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,g=(a,t)=>{for(var e in t||(t={}))U.call(t,e)&&y(a,e,t[e]);if(b)for(var e of b(t))w.call(t,e)&&y(a,e,t[e]);return a},h=(a,t)=>C(a,N(t));import{o as u,d as s,b as o,t as c,i as _,F as v,C as $,a as q,e as k,c as R,w as F,h as d,p as j,V as A,r as f,k as D}from"./vendor.47665e28.js";import{_ as p}from"./index.9a8e056f.js";import{B as V}from"./BaseInput.19919536.js";const I={props:{label:{type:String,default:""},modelValue:{type:Boolean,default:!1}}},L=["checked"],z={key:0};function E(a,t,e,r,i,m){return u(),s(v,null,[o("input",{type:"checkbox",checked:e.modelValue,onChange:t[0]||(t[0]=l=>a.$emit("update:modelValue",l.target.checked)),class:"field"},null,40,L),e.label?(u(),s("label",z,c(e.label),1)):_("",!0)],64)}var x=p(I,[["render",E]]);const G={props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},value:{type:[String,Number],required:!0}}},P=["checked","value"],T={key:0};function M(a,t,e,r,i,m){return u(),s(v,null,[o("input",$({type:"radio",checked:e.modelValue===e.value,value:e.value},a.$attrs,{onChange:t[0]||(t[0]=l=>a.$emit("update:modelValue",e.value))}),null,16,P),e.label?(u(),s("label",T,c(e.label),1)):_("",!0)],64)}var O=p(G,[["render",M]]);const W={components:{BaseRadio:O},props:{options:{type:Array,required:!0},name:{type:String,required:!0},modelValue:{type:[String,Number],required:!0},vertical:{type:Boolean,default:!1}}};function Y(a,t,e,r,i,m){const l=q("BaseRadio");return u(!0),s(v,null,k(e.options,n=>(u(),R(A(e.vertical?"div":"span"),{key:n.value,class:j({horizontal:!e.vertical})},{default:F(()=>[d(l,{label:n.label,value:n.value,modelValue:e.modelValue,name:e.name,"onUpdate:modelValue":t[0]||(t[0]=B=>a.$emit("update:modelValue",B))},null,8,["label","value","modelValue","name"])]),_:2},1032,["class"]))),128)}var H=p(W,[["render",Y],["__scopeId","data-v-8a83189a"]]);const J={props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},options:{type:Array,required:!0}}},K={key:0},Q=["value"],X=["value","selected"];function Z(a,t,e,r,i,m){return u(),s(v,null,[e.label?(u(),s("label",K,c(e.label),1)):_("",!0),o("select",$({class:"field",value:e.modelValue},h(g({},a.$attrs),{onChange:l=>{a.$emit("update:modelValue",l.target.value)}})),[(u(!0),s(v,null,k(e.options,l=>(u(),s("option",{value:l,key:l,selected:l===e.modelValue},c(l),9,X))),128))],16,Q)],64)}var ee=p(J,[["render",Z]]);const le=o("h1",null,"Create an event",-1),te=["onSubmit"],ae=o("legend",null,"Name & describe your event",-1),oe=o("legend",null,"Where is your event?",-1),ne=o("legend",null,"Pets",-1),ue=o("p",null,"Are pets allowed?",-1),se=o("legend",null,"Extras",-1),de=o("button",{type:"submit"},"Submit",-1),ve={setup(a){const t=f(["sustainability","nature","animal welfare","housing","education","food","community"]),e=f({category:"",title:"",description:"",location:"",pets:1,extras:{catering:!1,music:!1}}),r=f([{label:"Yes",value:1},{label:"No",value:0}]);function i(m){console.log(this.event)}return(m,l)=>(u(),s("div",null,[le,o("form",{onSubmit:D(i,["prevent"])},[d(ee,{options:t.value,modelValue:e.value.category,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value.category=n),label:"Select a category"},null,8,["options","modelValue"]),o("fieldset",null,[ae,d(V,{class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",modelValue:e.value.title,"onUpdate:modelValue":l[1]||(l[1]=n=>e.value.title=n),label:"Title",type:"text",error:"This input has an error!"},null,8,["modelValue"]),d(V,{modelValue:e.value.description,"onUpdate:modelValue":l[2]||(l[2]=n=>e.value.description=n),label:"Description",type:"text"},null,8,["modelValue"])]),o("fieldset",null,[oe,d(V,{modelValue:e.value.location,"onUpdate:modelValue":l[3]||(l[3]=n=>e.value.location=n),label:"Location",type:"text"},null,8,["modelValue"])]),o("fieldset",null,[ne,ue,o("div",null,[d(H,{modelValue:e.value.pets,"onUpdate:modelValue":l[4]||(l[4]=n=>e.value.pets=n),name:"pets",options:r.value},null,8,["modelValue","options"])])]),o("fieldset",null,[se,o("div",null,[d(x,{modelValue:e.value.extras.catering,"onUpdate:modelValue":l[5]||(l[5]=n=>e.value.extras.catering=n),label:"Catering"},null,8,["modelValue"])]),o("div",null,[d(x,{modelValue:e.value.extras.music,"onUpdate:modelValue":l[6]||(l[6]=n=>e.value.extras.music=n),label:"Live music"},null,8,["modelValue"])])]),de],40,te),o("pre",null,c(e.value),1)]))}};export{ve as default};
