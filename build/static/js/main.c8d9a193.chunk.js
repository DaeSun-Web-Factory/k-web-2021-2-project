(this["webpackJsonpreact-aws-front-master"]=this["webpackJsonpreact-aws-front-master"]||[]).push([[0],{300:function(e,t,n){},301:function(e,t,n){},330:function(e,t){},332:function(e,t){},342:function(e,t){},344:function(e,t){},371:function(e,t){},372:function(e,t){},377:function(e,t){},379:function(e,t){},386:function(e,t){},405:function(e,t){},470:function(e,t,n){var a={"./amplify-amazon-button_5.entry.js":[477,16],"./amplify-auth-container.entry.js":[478,17],"./amplify-auth-fields_9.entry.js":[479,18],"./amplify-authenticator.entry.js":[480,5],"./amplify-button_3.entry.js":[481,19],"./amplify-chatbot.entry.js":[482,4],"./amplify-checkbox.entry.js":[483,20],"./amplify-confirm-sign-in_7.entry.js":[484,6],"./amplify-container.entry.js":[485,21],"./amplify-federated-buttons_2.entry.js":[486,22],"./amplify-federated-sign-in.entry.js":[487,23],"./amplify-form-field_4.entry.js":[488,24],"./amplify-greetings.entry.js":[489,25],"./amplify-icon-button.entry.js":[490,26],"./amplify-icon.entry.js":[491,7],"./amplify-link.entry.js":[492,27],"./amplify-nav_2.entry.js":[493,28],"./amplify-photo-picker.entry.js":[494,29],"./amplify-picker.entry.js":[495,30],"./amplify-radio-button_3.entry.js":[496,8],"./amplify-s3-album.entry.js":[497,9],"./amplify-s3-image-picker.entry.js":[498,10],"./amplify-s3-image.entry.js":[499,11],"./amplify-s3-text-picker.entry.js":[500,12],"./amplify-s3-text.entry.js":[501,13],"./amplify-select-mfa-type.entry.js":[502,31],"./amplify-sign-in-button.entry.js":[503,14],"./amplify-tooltip.entry.js":[504,32]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=470,e.exports=r},472:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(21),c=n.n(i),s=(n(300),n(301),n(82)),o={aws_project_region:"ap-northeast-2",aws_cognito_identity_pool_id:"ap-northeast-2:e0661694-72dd-43ee-b27c-9a9c4839176c",aws_cognito_region:"ap-northeast-2",aws_user_pools_id:"ap-northeast-2_4toxsCrSw",aws_user_pools_web_client_id:"34i17eu8ej408pu7u9ld0unthm",oauth:{},aws_appsync_graphqlEndpoint:"https://4fzn46rfwzfyxivupbr7pdztky.appsync-api.ap-northeast-2.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_user_files_s3_bucket:"song-storage170441-dev",aws_user_files_s3_bucket_region:"ap-northeast-2"},l=n(559),u=n(561),p=n(279),j=n(40),f=n.n(j),d=n(90),b=n(64),y=n(259),h=n(471),O=n(144),m=n(557),g=n(560),x=n(276),v=n.n(x),_=n(277),k=n.n(_),w=n(275),S=n.n(w),C=n(278),A=n.n(C),$=n(260),N=n.n($),T=n(72),I=n(56),P=n(558),U=n(274),q=n.n(U),E=n(11);s.default.configure(o);var L=function(e){var t=e.onUpload,n=Object(a.useState)({}),r=Object(b.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(),o=Object(b.a)(s,2),l=o[0],u=o[1],p=function(){var e=Object(d.a)(f.a.mark((function e(){var n,a,r,c,s,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.title,a=i.description,r=i.owner,e.next=3,O.a.put("".concat(Object(I.v4)(),".mp3"),l,{contentType:"audio/mp3"});case 3:return c=e.sent,s=c.key,o={id:Object(I.v4)(),title:n,description:a,owner:r,filePath:s,like:0},e.next=8,y.a.graphql(Object(h.b)("\n  mutation CreateSong(\n    $input: CreateSongInput!\n    $condition: ModelSongConditionInput\n  ) {\n    createSong(input: $input, condition: $condition) {\n      id\n      title\n      description\n      filePath\n      like\n      owner\n      createdAt\n      updatedAt\n    }\n  }\n",{input:o}));case 8:t();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)("div",{className:"newSong",children:[Object(E.jsx)(P.a,{label:"Title",value:i.title,onChange:function(e){return c(Object(T.a)(Object(T.a)({},i),{},{title:e.target.value}))}}),Object(E.jsx)(P.a,{label:"Artist",value:i.owner,onChange:function(e){return c(Object(T.a)(Object(T.a)({},i),{},{owner:e.target.value}))}}),Object(E.jsx)(P.a,{label:"Description",value:i.description,onChange:function(e){return c(Object(T.a)(Object(T.a)({},i),{},{description:e.target.value}))}}),Object(E.jsx)("input",{type:"file",accept:"audio/mp3",onChange:function(e){return u(e.target.files[0])}}),Object(E.jsx)(g.a,{onClick:p,children:Object(E.jsx)(q.a,{})})]})};s.default.configure(o);var M=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(b.a)(i,2),s=c[0],o=c[1],l=Object(a.useState)(""),u=Object(b.a)(l,2),j=u[0],x=u[1],_=Object(a.useState)(!1),w=Object(b.a)(_,2),C=w[0],$=w[1];Object(a.useEffect)((function(){T()}),[]);var T=function(){var e=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.graphql(Object(h.b)("\n  query ListSongs(\n    $filter: ModelSongFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        title\n        description\n        filePath\n        like\n        owner\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n"));case 3:t=e.sent,n=t.data.listSongs.items,console.log("song list",n),r(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error on fetching songs",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(f.a.mark((function e(t){var a,i,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=n[t]).like=a.like+1,delete a.createdAt,delete a.updatedAt,e.next=7,y.a.graphql(Object(h.b)("\n  mutation UpdateSong(\n    $input: UpdateSongInput!\n    $condition: ModelSongConditionInput\n  ) {\n    updateSong(input: $input, condition: $condition) {\n      id\n      title\n      description\n      filePath\n      like\n      owner\n      createdAt\n      updatedAt\n    }\n  }\n",{input:a}));case 7:i=e.sent,(c=Object(p.a)(n))[t]=i.data.updateSong,r(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error on adding Like to song",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s!==t){e.next=5;break}return o(""),e.abrupt("return");case 5:return a=n[t].filePath,e.prev=6,e.next=9,O.a.get(a,{expires:60});case 9:r=e.sent,console.log("access URL",r),o(t),x(r),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(6),console.log("error accessing the file from S3",e.t0),o(""),x("");case 20:return e.abrupt("return");case 21:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)("div",{className:"songList",children:[n.map((function(e,t){return Object(E.jsxs)(m.a,{variant:"outlined",elevation:2,children:[Object(E.jsxs)("div",{className:"songCard",children:[Object(E.jsx)(g.a,{"aria-label":"play",onClick:function(){return P(t)},children:s===t?Object(E.jsx)(S.a,{}):Object(E.jsx)(v.a,{})}),Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"songTitle",children:e.title}),Object(E.jsx)("div",{className:"songOwner",children:e.owner})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)(g.a,{"aria-label":"like",onClick:function(){return I(t)},children:Object(E.jsx)(k.a,{})}),e.like]}),Object(E.jsx)("div",{className:"songDescription",children:e.description})]}),s===t?Object(E.jsx)("div",{className:"ourAudioPlayer",children:Object(E.jsx)(N.a,{url:j,controls:!0,playing:!0,height:"50px"})}):null]},"song".concat(t))})),C?Object(E.jsx)(L,{onUpload:function(){$(!1),T()}}):Object(E.jsx)(g.a,{onClick:function(){return $(!0)},children:Object(E.jsx)(A.a,{})})]})};s.default.configure(o);var z=Object(u.a)((function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsxs)("header",{className:"App-header",children:[Object(E.jsx)(l.d,{}),Object(E.jsx)("h2",{children:"Game Sounds"})]}),Object(E.jsx)(M,{})]})}));c.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(z,{})}),document.getElementById("root"))}},[[472,2,3]]]);
//# sourceMappingURL=main.c8d9a193.chunk.js.map