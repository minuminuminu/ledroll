import{j as u,U as f,s as r,C as h,r as l,W as g,R as y,a as b}from"./vendor.44d74151.js";const x=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(o){if(o.ep)return;o.ep=!0;const e=c(o);fetch(o.href,e)}};x();const n=u.exports.jsx,d=u.exports.jsxs,v=f`
  0%{opacity:0}
  60% {opacity:0.1}
  85%{opacity:0}
`,w=f`
  0%{opacity:0;}
  100%{
    opacity:1
  }
`,k=r.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${w} ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`,j=r.div`
  width: 100vw;
  height: 100vh;
  background-image: url("images/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
  opacity: 0;
  animation: ${t=>t.show?h`
          ${v} 0.5s
        `:"none"};
`,M=r.h1`
  margin-bottom: 45vh;
  font-size: 4em;
  font-weight: 300;
`,z=r.div`
  margin-top: 15vh;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,p=r.button`
  background-color: #69da69;
  border: none;
  width: 150px;
  height: 80px;
  margin: 10px;
  font-size: 1em;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #62c062;
  }
`,A=r(p)`
  background-color: #ff0000;
  transform: ${t=>`translateX(${t.positionX}vw) translateY(${t.positionY}vh)`};

  &:hover {
    background-color: #e62020;
  }
`;function L(){const[t,i]=l.exports.useState(0),[c,a]=l.exports.useState(0),[o,e]=l.exports.useState(!1),s=new Audio("audio/sound.mp3"),m=()=>{i(Math.floor(Math.random()*1*40)),a(Math.floor(Math.random()*81)-40)};return d(k,{children:[n(j,{show:o}),n(M,{children:"Are you dumb?"}),d(z,{children:[n(p,{onClick:()=>{e(!0),setTimeout(()=>e(!1),500)},children:"Yes"}),n(A,{positionX:t,positionY:c,onClick:()=>{m(),s.play()},children:"No"})]})]})}const S=g`
  *{
    box-sizing: border-box;
    margin: 0;
    font-family:"Roboto", sans-serif;
    overflow: hidden;
    user-select: none;
  }
`;y.render(d(b.StrictMode,{children:[n(L,{}),n(S,{})]}),document.getElementById("root"));
