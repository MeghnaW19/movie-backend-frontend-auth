webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: "\n    <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['/movie']\">Dashboard</a></li>\n                    <li><a [routerLink]=\"['/trending']\">Popular Movies</a></li>\n                    <li><a [routerLink]=\"['/forthcoming']\">UpComing Movies</a></li>\n                    <li><a [routerLink]=\"['/recommended']\">My Recommendations</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n    "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_movies_movie_list_component__ = __webpack_require__("../../../../../src/movies/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_movies_movie_service__ = __webpack_require__("../../../../../src/movies/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_movies_trending_list_component__ = __webpack_require__("../../../../../src/movies/trending-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_movies_upcoming_list_component__ = __webpack_require__("../../../../../src/movies/upcoming-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recommended_movies_recommended_movies_component__ = __webpack_require__("../../../../../src/app/recommended-movies/recommended-movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_register_service_service__ = __webpack_require__("../../../../../src/app/register-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { RecommendedListComponent } from 'movies/recommendation-list.component';





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6_movies_movie_list_component__["a" /* MovieListComponent */],
            __WEBPACK_IMPORTED_MODULE_8_movies_trending_list_component__["a" /* TrendingListComponent */],
            __WEBPACK_IMPORTED_MODULE_9_movies_upcoming_list_component__["a" /* UpcomingListComponent */],
            //RecommendedListComponent,
            __WEBPACK_IMPORTED_MODULE_10__recommended_movies_recommended_movies_component__["a" /* RecommendedMoviesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'movie', component: __WEBPACK_IMPORTED_MODULE_6_movies_movie_list_component__["a" /* MovieListComponent */] },
                { path: 'trending', component: __WEBPACK_IMPORTED_MODULE_8_movies_trending_list_component__["a" /* TrendingListComponent */] },
                { path: 'forthcoming', component: __WEBPACK_IMPORTED_MODULE_9_movies_upcoming_list_component__["a" /* UpcomingListComponent */] },
                { path: 'recommended', component: __WEBPACK_IMPORTED_MODULE_10__recommended_movies_recommended_movies_component__["a" /* RecommendedMoviesComponent */] },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */] },
                { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */] },
                { path: '**', redirectTo: 'login', pathMatch: 'full' }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7_movies_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_13_app_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_14_app_register_service_service__["a" /* RegisterServiceService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = "http://localhost:8082/user/login";
    }
    LoginService.prototype.login = function (user) {
        return this.http.post(this.loginUrl, user);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"jumbotron\">\r\n<form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\t\r\n\r\n  <h2>Login</h2>\r\n \r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\"> \r\n   <input type=\"text\" placeholder=\"UserName\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.userId\" #username=\"ngModel\" required >\r\n   <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div> \r\n   </div>\r\n   <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n   <input type=\"password\" placeholder=\"Password\"  class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\r\n   <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n   </div>\r\n   <button class=\"btn btn-primary\">Log In</button> \r\n   <a [routerLink]=\"['/register']\" >Register</a>\r\n   \r\n          </form>\r\n        </div>\r\n        </div>\r\n          \r\n    "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, loginService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.user = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.loginService.login(this.user)
            .subscribe(function (data) {
            _this.router.navigate(['movie']);
        }, function (error) {
            //this.alertService.error(error.error.message);
            alert("Invalid Credentials");
            _this.loading = false;
        });
    };
    LoginComponent.prototype.link = function () {
        this.router.navigate(['register']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/recommended-movies/recommended-movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recommended-movies/recommended-movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n\r\n  <div class=\"panel-heading\">\r\n        {{pageTitle}}\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">Filter by Name:</div>\r\n            <div class=\"col-md-4\"><input type='text' [(ngModel)]='listFilter' /></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\"><h3>Filtered by: {{listFilter}} </h3></div>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n            <table class='table'\r\n                    *ngIf='movieCruisers && movieCruisers.length'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            <button class='btn btn-primary'\r\n                                (click)='toggleImage()'>\r\n                                {{showImage ? 'Hide' : 'Show'}} Image\r\n                            </button>\r\n                        </th>\r\n                        <th>Name</th>\r\n                        <th>Comments</th>\r\n                        <th>Release Date</th>\r\n                        <th>Vote Count</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let movie of filteredMovies; let i = index'>\r\n                        <td>\r\n                            <img *ngIf='showImage'\r\n                                src='http://image.tmdb.org/t/p/w185{{movie.posterPath}}'\r\n                                [title]='movie.Name'\r\n                                [style.width.px]='imageWidth'\r\n                                [style.margin.px]='imageMargin'>\r\n                        </td>\r\n                        <td>  {{ movie.name }}\r\n                        </td>\r\n                        <td><input type=\"input\" [(ngModel)]=\"movie.comments\" value=\"{{movie.comments }}\"/></td>\r\n                        <td>{{ movie.releaseDate }}</td>\r\n                        <td>{{ movie.voteCount }}</td>\r\n                      <td> <button (click)='editMovieCruiser($event,i,movie)'> save Comment </button></td>\r\n\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/recommended-movies/recommended-movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_movie_service__ = __webpack_require__("../../../../../src/movies/movie.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendedMoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecommendedMoviesComponent = (function () {
    function RecommendedMoviesComponent(_movieService) {
        this._movieService = _movieService;
        this.pageTitle = 'Recommended Movie List';
        this.imageWidth = 80;
        this.imageMargin = 2;
        this.showImage = true;
        this.movieCruisers = [];
    }
    Object.defineProperty(RecommendedMoviesComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movieCruisers;
        },
        enumerable: true,
        configurable: true
    });
    RecommendedMoviesComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movieCruisers.filter(function (movieCruiser) {
            return movieCruiser.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    RecommendedMoviesComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    RecommendedMoviesComponent.prototype.editMovieCruiser = function (event, index, selectedMovie) {
        this._movieService.editMovie(selectedMovie)
            .subscribe(function (data) {
            console.log(selectedMovie);
        }, function (error) {
            console.log("Boom");
        });
    };
    RecommendedMoviesComponent.prototype.recommendMovie = function (event, index, selectedMovie) {
        var _this = this;
        var text = event.target.outerText;
        var currVal = (text == "Recommend") ? "Unrecommend" : "Recommend";
        this._movieService.recommendMovies(selectedMovie).subscribe(function (data) {
            event.target.innerHTML = currVal;
            _this.initRecommendRequest();
        });
    };
    RecommendedMoviesComponent.prototype.initRecommendRequest = function () {
        var _this = this;
        this._movieService.getRecommendedMovies()
            .subscribe(function (movieCruisers) {
            _this.movieCruisers = movieCruisers;
            _this.filteredMovies = _this.movieCruisers;
        }, function (error) { return _this.errorMessage = error; });
    };
    RecommendedMoviesComponent.prototype.ngOnInit = function () {
        this.initRecommendRequest();
    };
    return RecommendedMoviesComponent;
}());
RecommendedMoviesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recommended-movies',
        template: __webpack_require__("../../../../../src/app/recommended-movies/recommended-movies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recommended-movies/recommended-movies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movies_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__movies_movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], RecommendedMoviesComponent);

var _a;
//# sourceMappingURL=recommended-movies.component.js.map

/***/ }),

/***/ "../../../../../src/app/register-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterServiceService = (function () {
    function RegisterServiceService(http) {
        this.http = http;
        this.registerUrl = "http://localhost:8082/user/register";
    }
    RegisterServiceService.prototype.register = function (user) {
        return this.http.post(this.registerUrl, user);
    };
    return RegisterServiceService;
}());
RegisterServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], RegisterServiceService);

var _a;
//# sourceMappingURL=register-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\t\r\n  \r\n  <h2>Register</h2>\r\n \r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\"> \r\n   <input type=\"text\" placeholder=\"UserName\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.userId\" #username=\"ngModel\" required />\r\n   <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div> \r\n   </div>\r\n  \r\n   <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n   <input type=\"password\" placeholder=\"Password\"  class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\r\n   <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n   </div>\r\n\r\n   <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstname.valid }\">\r\n    <input type=\"text\" placeholder=\"FirstName\"  class=\"form-control\" name=\"firstname\" [(ngModel)]=\"user.firstName\" #firstname=\"ngModel\" required />\r\n    <div *ngIf=\"f.submitted && !firstname.valid\" class=\"help-block\">First Name is required</div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastname.valid }\">\r\n      <input type=\"text\" placeholder=\"LastName\"  class=\"form-control\" name=\"lastname\" [(ngModel)]=\"user.lastName\" #lastname=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !lastname.valid\" class=\"help-block\">Last Name is required</div>\r\n      </div>\r\n  \r\n   <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button> \r\n   <a [routerLink]=\"['/login']\">Cancel</a>\r\n    \r\n    </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_service_service__ = __webpack_require__("../../../../../src/app/register-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(route, router, registerService) {
        this.route = route;
        this.router = router;
        this.registerService = registerService;
        this.user = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.registerService.register(this.user)
            .subscribe(function (data) {
            console.log("Im in");
            //this.alertService.success('Registration successful', true);
            _this.router.navigate(['login']);
        }, function (error) {
            console.log("error");
            //this.alertService.error(error.error.message);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__register_service_service__["a" /* RegisterServiceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__register_service_service__["a" /* RegisterServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__register_service_service__["a" /* RegisterServiceService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/movies/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n\r\n  <div class=\"panel-heading\">\r\n        {{pageTitle}}\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">Filter by Name:</div>\r\n            <div class=\"col-md-4\"><input type='text' [(ngModel)]='listFilter' /></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\"><h3>Filtered by: {{listFilter}} </h3></div>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n            <table class='table'\r\n                    *ngIf='movies && movies.length'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            <button class='btn btn-primary'\r\n                                (click)='toggleImage()'>\r\n                                {{showImage ? 'Hide' : 'Show'}} Image\r\n                            </button>\r\n                        </th>\r\n                        <th>Name</th>\r\n                        <th>Release Date</th>\r\n                        <th>Overview</th>\r\n                        <th>Vote Average</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let movie of filteredMovies; let i = index'>\r\n\r\n                        <td>\r\n                            <img *ngIf='showImage'\r\n                                src='http://image.tmdb.org/t/p/w185{{movie.poster_path}}'\r\n                                [title]='movie.title'\r\n                                [style.width.px]='imageWidth'\r\n                                [style.margin.px]='imageMargin'>\r\n                        </td>\r\n                        <td>    {{ movie.title }}\r\n                        </td>\r\n                        <td>{{ movie.release_date }}</td>\r\n                        <td>{{ movie.overview }}</td>\r\n                        <td>{{ movie.vote_average }}</td>\r\n                      <td> <button (click)='recommendMovie($event,i,movie)'> {{recommendMovieOK(movie.id)}} </button></td>\r\n                      \r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/movies/movie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__("../../../../../src/movies/movie.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = (function () {
    function MovieListComponent(_movieService) {
        this._movieService = _movieService;
        this.pageTitle = 'Movie List';
        this.imageWidth = 80;
        this.imageMargin = 2;
        this.showImage = true;
        this.AlreadyRecommended = [];
        this.movies = [];
        this.movieCruiser = {};
        this.disableButton = false;
    }
    Object.defineProperty(MovieListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
        },
        enumerable: true,
        configurable: true
    });
    MovieListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Movie List: ' + message;
    };
    MovieListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter(function (movie) {
            return movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    MovieListComponent.prototype.recommendMovie = function (event, index, selectedMovie) {
        var text = event.target.outerText;
        this.disableButton = true;
        var currVal = (text == "Recommend") ? "Unrecommend" : "Recommend";
        this.movieCruiser['id'] = selectedMovie.id;
        this.movieCruiser['name'] = selectedMovie.title;
        this.movieCruiser['posterPath'] = selectedMovie.poster_path;
        this.movieCruiser['releaseDate'] = selectedMovie.release_date;
        this.movieCruiser['voteCount'] = selectedMovie.vote_count;
        console.log("Movie Cruiser" + JSON.stringify(this.movieCruiser));
        this._movieService.recommendMovies(this.movieCruiser).subscribe(function (data) {
            event.target.innerHTML = currVal;
        });
    };
    MovieListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    MovieListComponent.prototype.recommendMovieOK = function (movieid) {
        console.log("tttttyyyyyyyyyy" + movieid);
        console.log("this.AlreadyRecommended.length" + this.AlreadyRecommended.length);
        var buttonText = "Recommend";
        for (var i = 0; i < this.AlreadyRecommended.length; i++) {
            console.log("ttttt" + this.AlreadyRecommended[i].id);
            if (this.AlreadyRecommended[i].id == movieid) {
                buttonText = "Unrecommend";
            }
        }
        return buttonText;
    };
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._movieService.getUpcomingMovies()
            .subscribe(function (movies) {
            _this.movies = movies.results;
            _this.filteredMovies = _this.movies;
        }, function (error) { return _this.errorMessage = error; });
        this._movieService.getRecommendedMovies()
            .subscribe(function (movieCruisers) {
            _this.AlreadyRecommended = movieCruisers;
            console.log("pistae: " + JSON.stringify(_this.AlreadyRecommended));
        }, function (error) { return _this.errorMessage = error; });
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/movies/movie-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], MovieListComponent);

var _a;
//# sourceMappingURL=movie-list.component.js.map

/***/ }),

/***/ "../../../../../src/movies/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MovieService = (function () {
    function MovieService(_http) {
        this._http = _http;
        this._movieUpcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c151506a66c898dc3443d41f1636ebde&language=en-US';
        this._moviePopularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c151506a66c898dc3443d41f1636ebde&language=en-US&page=1';
        this._movieRecommendedListUrl = 'http://localhost:8089/api/movie';
        this._movieRecommendUrl = 'http://localhost:8089/api/movie';
    }
    MovieService.prototype.getTrendingMovies = function () {
        return this._http.get(this._moviePopularUrl)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.getUpcomingMovies = function () {
        return this._http.get(this._movieUpcomingUrl)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.getRecommendedMovies = function () {
        return this._http.get(this._movieRecommendedListUrl)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.recommendMovies = function (Movie) {
        return this._http.post(this._movieRecommendUrl, Movie)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.editMovie = function (Movie) {
        return this._http.put(this._movieRecommendUrl + "/" + Movie.id, Movie)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    return MovieService;
}());
MovieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], MovieService);

var _a;
//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ "../../../../../src/movies/trending-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__("../../../../../src/movies/movie.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrendingListComponent = (function () {
    function TrendingListComponent(_movieService) {
        this._movieService = _movieService;
        this.pageTitle = 'Popular Movie List';
        this.imageWidth = 80;
        this.imageMargin = 2;
        this.showImage = true;
        this.movieCruiser = {};
        this.AlreadyRecommended = [];
        this.movies = [];
    }
    Object.defineProperty(TrendingListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
        },
        enumerable: true,
        configurable: true
    });
    TrendingListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter(function (movie) {
            return movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    TrendingListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    TrendingListComponent.prototype.recommendMovieOK = function (movieid) {
        var buttonText = "Recommend";
        for (var i = 0; i < this.AlreadyRecommended.length; i++) {
            if (this.AlreadyRecommended[i].id == movieid) {
                buttonText = "Unrecommend";
            }
        }
        return buttonText;
    };
    TrendingListComponent.prototype.recommendMovie = function (event, index, selectedMovie) {
        var text = event.target.outerText;
        this.movieCruiser['id'] = selectedMovie.id;
        this.movieCruiser['name'] = selectedMovie.title;
        this.movieCruiser['posterPath'] = selectedMovie.poster_path;
        this.movieCruiser['releaseDate'] = selectedMovie.release_date;
        this.movieCruiser['voteCount'] = selectedMovie.vote_count;
        var currVal = (text == "Recommend") ? "Unrecommend" : "Recommend";
        this._movieService.recommendMovies(this.movieCruiser).subscribe(function (data) {
            event.target.innerHTML = currVal;
        });
    };
    TrendingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._movieService.getTrendingMovies()
            .subscribe(function (movies) {
            _this.movies = movies.results;
            _this.filteredMovies = _this.movies;
        }, function (error) { return _this.errorMessage = error; });
        this._movieService.getRecommendedMovies()
            .subscribe(function (movieCruisers) {
            _this.AlreadyRecommended = movieCruisers;
            console.log("pistae: " + JSON.stringify(_this.AlreadyRecommended));
        }, function (error) { return _this.errorMessage = error; });
    };
    return TrendingListComponent;
}());
TrendingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/movies/movie-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], TrendingListComponent);

var _a;
//# sourceMappingURL=trending-list.component.js.map

/***/ }),

/***/ "../../../../../src/movies/upcoming-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__("../../../../../src/movies/movie.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpcomingListComponent = (function () {
    function UpcomingListComponent(_movieService) {
        this._movieService = _movieService;
        this.pageTitle = 'Upcoming Movie List';
        this.imageWidth = 80;
        this.imageMargin = 2;
        this.showImage = true;
        this.movieCruiser = {};
        this.AlreadyRecommended = [];
        this.movies = [];
    }
    Object.defineProperty(UpcomingListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
        },
        enumerable: true,
        configurable: true
    });
    UpcomingListComponent.prototype.recommendMovieOK = function (movieid) {
        console.log("tttttyyyyyyyyyy" + movieid);
        console.log("this.AlreadyRecommended.length" + this.AlreadyRecommended.length);
        var buttonText = "Recommend";
        for (var i = 0; i < this.AlreadyRecommended.length; i++) {
            console.log("ttttt" + this.AlreadyRecommended[i].id);
            if (this.AlreadyRecommended[i].id == movieid) {
                buttonText = "Unrecommend";
            }
        }
        return buttonText;
    };
    UpcomingListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter(function (movie) {
            return movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    UpcomingListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    UpcomingListComponent.prototype.recommendMovie = function (event, index, selectedMovie) {
        var text = event.target.outerText;
        //let currVal = (text == "Recommend") ? "Unrecommend" : "Recommend";
        this.movieCruiser['id'] = selectedMovie.id;
        this.movieCruiser['name'] = selectedMovie.title;
        this.movieCruiser['posterPath'] = selectedMovie.poster_path;
        this.movieCruiser['releaseDate'] = selectedMovie.release_date;
        this.movieCruiser['voteCount'] = selectedMovie.vote_count;
        var currVal = (text == "Recommend") ? "Unrecommend" : "Recommend";
        this._movieService.recommendMovies(this.movieCruiser).subscribe(function (data) {
            event.target.innerHTML = currVal;
        });
    };
    UpcomingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Inside onnnnninitttttttttt");
        this._movieService.getUpcomingMovies()
            .subscribe(function (movies) {
            _this.movies = movies.results;
            _this.filteredMovies = _this.movies;
        }, function (error) { return _this.errorMessage = error; });
        this._movieService.getRecommendedMovies()
            .subscribe(function (movieCruisers) {
            _this.AlreadyRecommended = movieCruisers;
            console.log("pistae: " + JSON.stringify(_this.AlreadyRecommended));
        }, function (error) { return _this.errorMessage = error; });
    };
    return UpcomingListComponent;
}());
UpcomingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/movies/movie-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], UpcomingListComponent);

var _a;
//# sourceMappingURL=upcoming-list.component.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map