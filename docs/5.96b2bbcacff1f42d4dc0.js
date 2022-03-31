(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zrcO:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",(function(){return J}));var s=r("3Pt+"),i=r("ofXK"),n=r("tyNb"),b=r("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Cb({type:e,selectors:[["ng-component"]],decls:4,vars:0,consts:[[1,"p-4"],[1,"container"],["http-equiv","Content-Security-Policy","content","upgrade-insecure-requests"]],template:function(e,t){1&e&&(b.Lb(0,"div",0),b.Lb(1,"div",1),b.Jb(2,"router-outlet"),b.Jb(3,"meta",2),b.Kb(),b.Kb())},directives:[n.g],encapsulation:2}),e})();var c=r("SxV6"),a=r("J9tS");function d(e,t){1&e&&b.Jb(0,"span",10)}function u(e,t){1&e&&(b.Lb(0,"span"),b.fc(1,"Delete"),b.Kb())}function f(e,t){if(1&e){const e=b.Mb();b.Lb(0,"tr"),b.Lb(1,"td"),b.fc(2),b.Kb(),b.Lb(3,"td"),b.fc(4),b.Kb(),b.Lb(5,"td"),b.fc(6),b.Kb(),b.Lb(7,"td",6),b.Lb(8,"a",7),b.fc(9,"Edit"),b.Kb(),b.Lb(10,"button",8),b.Sb("click",(function(){b.ac(e);const r=t.$implicit;return b.Ub().deleteUser(r.id)})),b.ec(11,d,1,0,"span",9),b.ec(12,u,2,0,"span",5),b.Kb(),b.Kb(),b.Kb()}if(2&e){const e=t.$implicit;b.xb(2),b.gc(e.firstName),b.xb(2),b.gc(e.lastName),b.xb(2),b.gc(e.username),b.xb(2),b.Wb("routerLink","edit/",e.id,""),b.xb(2),b.Vb("disabled",e.isDeleting),b.xb(1),b.Vb("ngIf",e.isDeleting),b.xb(1),b.Vb("ngIf",!e.isDeleting)}}function l(e,t){1&e&&(b.Lb(0,"tr"),b.Lb(1,"td",11),b.Jb(2,"span",12),b.Kb(),b.Kb())}let m=(()=>{class e{constructor(e){this.accountService=e,this.users=null}ngOnInit(){this.accountService.getAll().pipe(Object(c.a)()).subscribe(e=>this.users=e)}deleteUser(e){this.users.find(t=>t.id===e).isDeleting=!0,this.accountService.delete(e).pipe(Object(c.a)()).subscribe(()=>{this.users=this.users.filter(t=>t.id!==e)})}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(a.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["ng-component"]],decls:17,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,t){1&e&&(b.Lb(0,"h1"),b.fc(1,"Users"),b.Kb(),b.Lb(2,"a",0),b.fc(3,"Add User"),b.Kb(),b.Lb(4,"table",1),b.Lb(5,"thead"),b.Lb(6,"tr"),b.Lb(7,"th",2),b.fc(8,"First Name"),b.Kb(),b.Lb(9,"th",2),b.fc(10,"Last Name"),b.Kb(),b.Lb(11,"th",2),b.fc(12,"Username"),b.Kb(),b.Jb(13,"th",3),b.Kb(),b.Kb(),b.Lb(14,"tbody"),b.ec(15,f,13,7,"tr",4),b.ec(16,l,3,0,"tr",5),b.Kb(),b.Kb()),2&e&&(b.xb(15),b.Vb("ngForOf",t.users),b.xb(1),b.Vb("ngIf",!t.users))},directives:[n.e,i.i,i.j],encapsulation:2}),e})();function p(e,t){1&e&&(b.Lb(0,"h1"),b.fc(1,"Add User"),b.Kb())}function h(e,t){1&e&&(b.Lb(0,"h1"),b.fc(1,"Edit User"),b.Kb())}function g(e,t){1&e&&(b.Lb(0,"div"),b.fc(1,"First Name is required"),b.Kb())}function v(e,t){if(1&e&&(b.Lb(0,"div",17),b.ec(1,g,2,0,"div",0),b.Kb()),2&e){const e=b.Ub();b.xb(1),b.Vb("ngIf",e.f.firstName.errors.required)}}function L(e,t){1&e&&(b.Lb(0,"div"),b.fc(1,"Last Name is required"),b.Kb())}function K(e,t){if(1&e&&(b.Lb(0,"div",17),b.ec(1,L,2,0,"div",0),b.Kb()),2&e){const e=b.Ub();b.xb(1),b.Vb("ngIf",e.f.lastName.errors.required)}}function x(e,t){1&e&&(b.Lb(0,"div"),b.fc(1,"Username is required"),b.Kb())}function I(e,t){if(1&e&&(b.Lb(0,"div",17),b.ec(1,x,2,0,"div",0),b.Kb()),2&e){const e=b.Ub();b.xb(1),b.Vb("ngIf",e.f.username.errors.required)}}function N(e,t){1&e&&(b.Lb(0,"em"),b.fc(1,"(Leave blank to keep the same password)"),b.Kb())}function w(e,t){1&e&&(b.Lb(0,"div"),b.fc(1,"Password is required"),b.Kb())}function V(e,t){1&e&&(b.Lb(0,"div"),b.fc(1,"Password must be at least 6 characters"),b.Kb())}function S(e,t){if(1&e&&(b.Lb(0,"div",17),b.ec(1,w,2,0,"div",0),b.ec(2,V,2,0,"div",0),b.Kb()),2&e){const e=b.Ub();b.xb(1),b.Vb("ngIf",e.f.password.errors.required),b.xb(1),b.Vb("ngIf",e.f.password.errors.minlength)}}function U(e,t){1&e&&b.Jb(0,"span",18)}const C=function(e){return{"is-invalid":e}};let y=(()=>{class e{constructor(e,t,r,s,i){this.formBuilder=e,this.route=t,this.router=r,this.accountService=s,this.alertService=i,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const e=[s.i.minLength(6)];this.isAddMode&&e.push(s.i.required),this.form=this.formBuilder.group({firstName:["",s.i.required],lastName:["",s.i.required],username:["",s.i.required],password:["",e]}),this.isAddMode||this.accountService.getById(this.id).pipe(Object(c.a)()).subscribe(e=>{this.f.firstName.setValue(e.firstName),this.f.lastName.setValue(e.lastName),this.f.username.setValue(e.username)})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.accountService.register(this.form.value).pipe(Object(c.a)()).subscribe(e=>{this.alertService.success("User added successfully",{keepAfterRouteChange:!0}),this.router.navigate([".",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}updateUser(){this.accountService.update(this.id,this.form.value).pipe(Object(c.a)()).subscribe(e=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["..",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(s.c),b.Ib(n.a),b.Ib(n.c),b.Ib(a.a),b.Ib(a.b))},e.\u0275cmp=b.Cb({type:e,selectors:[["ng-component"]],decls:32,vars:22,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(b.ec(0,p,2,0,"h1",0),b.ec(1,h,2,0,"h1",0),b.Lb(2,"form",1),b.Sb("ngSubmit",(function(){return t.onSubmit()})),b.Lb(3,"div",2),b.Lb(4,"div",3),b.Lb(5,"label",4),b.fc(6,"First Name"),b.Kb(),b.Jb(7,"input",5),b.ec(8,v,2,1,"div",6),b.Kb(),b.Lb(9,"div",3),b.Lb(10,"label",7),b.fc(11,"Last Name"),b.Kb(),b.Jb(12,"input",8),b.ec(13,K,2,1,"div",6),b.Kb(),b.Kb(),b.Lb(14,"div",2),b.Lb(15,"div",3),b.Lb(16,"label",9),b.fc(17,"Username"),b.Kb(),b.Jb(18,"input",10),b.ec(19,I,2,1,"div",6),b.Kb(),b.Lb(20,"div",3),b.Lb(21,"label",11),b.fc(22," Password "),b.ec(23,N,2,0,"em",0),b.Kb(),b.Jb(24,"input",12),b.ec(25,S,3,2,"div",6),b.Kb(),b.Kb(),b.Lb(26,"div",13),b.Lb(27,"button",14),b.ec(28,U,1,0,"span",15),b.fc(29," Save "),b.Kb(),b.Lb(30,"a",16),b.fc(31,"Cancel"),b.Kb(),b.Kb(),b.Kb()),2&e&&(b.Vb("ngIf",t.isAddMode),b.xb(1),b.Vb("ngIf",!t.isAddMode),b.xb(1),b.Vb("formGroup",t.form),b.xb(5),b.Vb("ngClass",b.Yb(14,C,t.submitted&&t.f.firstName.errors)),b.xb(1),b.Vb("ngIf",t.submitted&&t.f.firstName.errors),b.xb(4),b.Vb("ngClass",b.Yb(16,C,t.submitted&&t.f.lastName.errors)),b.xb(1),b.Vb("ngIf",t.submitted&&t.f.lastName.errors),b.xb(5),b.Vb("ngClass",b.Yb(18,C,t.submitted&&t.f.username.errors)),b.xb(1),b.Vb("ngIf",t.submitted&&t.f.username.errors),b.xb(4),b.Vb("ngIf",!t.isAddMode),b.xb(1),b.Vb("ngClass",b.Yb(20,C,t.submitted&&t.f.password.errors)),b.xb(1),b.Vb("ngIf",t.submitted&&t.f.password.errors),b.xb(2),b.Vb("disabled",t.loading),b.xb(1),b.Vb("ngIf",t.loading))},directives:[i.j,s.j,s.g,s.e,s.a,s.f,s.d,i.h,n.e],encapsulation:2}),e})();const k=[{path:"",component:o,children:[{path:"",component:m},{path:"add",component:y},{path:"edit/:id",component:y}]}];let q=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(k)],n.f]}),e})(),J=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(t){return new(t||e)},imports:[[i.b,s.h,q]]}),e})()}}]);