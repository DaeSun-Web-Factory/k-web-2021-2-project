(this["webpackJsonpreact-aws-front-master"]=this["webpackJsonpreact-aws-front-master"]||[]).push([[23],{487:function(t,e,a){"use strict";a.r(e),a.d(e,"amplify_federated_sign_in",(function(){return f}));var i=a(19),n=a(39),s=a(50),d=a(108),o=a(32),r=new n.a("amplify-federated-sign-in"),f=function(){function t(t){Object(i.k)(this,t),this.authState=s.a.SignIn,this.federated={}}return t.prototype.componentWillLoad=function(){if(!d.a||"function"!==typeof d.a.configure)throw new Error(o.d);var t=d.a.configure().oauth,e=void 0===t?{}:t;e.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e):e.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e.awsCognito)),e.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),e.auth0))},t.prototype.render=function(){return this.federated?Object.values(s.a).includes(this.authState)?(r.debug("federated Config is",this.federated),Object(i.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(i.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(i.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(r.debug("federated prop is empty. show nothing"),r.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},t}()}}]);
//# sourceMappingURL=23.ef3223d9.chunk.js.map