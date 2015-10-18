!function(){var a=angular.module("mainApp",["ui.router","slick"]);a.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("home"),a.state("home",{url:"/home",templateUrl:"templates/home.html"}).state("team",{url:"/team",templateUrl:"templates/team.html"}).state("kontakt",{url:"/kontakt",templateUrl:"templates/kontakt.html"}).state("karten",{url:"/karten",templateUrl:"templates/karten.html"}).state("kartendetails",{url:"/kartendetails/:karte",templateUrl:"templates/kartendetails.html",controller:"KartenDetailsController"}).state("kartendetailsmandala",{url:"/kartendetailsmandala/:karte",templateUrl:"templates/kartendetailsmandala.html",controller:"KartenDetailsController"})}])}(),function(){"use strict";function a(a,c,d){b(a,d.karte)}function b(a,b){switch(b){case"Dotti_Style_1":c(a,"Dotti_Style_1","Dotti_Style","CHF 4.50",101,"Stoffkarte Dotti Style");break;case"Dotti_Style_2":c(a,"Dotti_Style_2","Dotti_Style","CHF 4.50",102,"Stoffkarte Dotti Style");break;case"Dotti_Style_3":c(a,"Dotti_Style_3","Dotti_Style","CHF 4.50",103,"Stoffkarte Dotti Style");break;case"Dotti_Style_4":c(a,"Dotti_Style_4","Dotti_Style","CHF 4.50",104,"Stoffkarte Dotti Style");break;case"Dotti_Style_5":c(a,"Dotti_Style_5","Dotti_Style","CHF 4.50",105,"Stoffkarte Dotti Style");break;case"Mandala_Style_1":c(a,"Mandala_Style_1","Mandala_Style","Set CHF 3.80",201,"Mandalakarten");break;case"Mandala_Style_2":c(a,"Mandala_Style_2","Mandala_Style","Set CHF 3.80",202,"Mandalakarten");break;case"Mandala_Style_3":c(a,"Mandala_Style_3","Mandala_Style","Set CHF 3.80",203,"Mandalakarten");break;case"Mandala_Style_4":c(a,"Mandala_Style_4","Mandala_Style","Set CHF 3.80",204,"Mandalakarten");break;case"Mandala_Style_5":c(a,"Mandala_Style_5","Mandala_Style","Set CHF 3.80",205,"Mandalakarten");break;case"Mandala_Style_6":c(a,"Mandala_Style_6","Mandala_Style","Set CHF 3.80",206,"Mandalakarten");break;case"Mandala_Style_7":c(a,"Mandala_Style_7","Mandala_Style","Set CHF 3.80",207,"Mandalakarten");break;case"Mandala_Style_8":c(a,"Mandala_Style_8","Mandala_Style","Set CHF 3.80",208,"Mandalakarten");break;case"India_Style_1":c(a,"India_Style_1","India_Style","CHF 4.50",301,"Stoffkarte Grün-Blau mit Bordüre");break;case"India_Style_2":c(a,"India_Style_2","India_Style","CHF 4.50",302,"Stoffkarte Blümchen mit Glitzersteinchen");break;case"India_Style_3":c(a,"India_Style_3","India_Style","CHF 4.50",303,"Stoffkarte Braun mit Bordüre");break;case"India_Style_4":c(a,"India_Style_4","India_Style","CHF 4.50",304,"Stoffkarte Gelb mit Glitzersteinchen");break;case"India_Style_5":c(a,"India_Style_5","India_Style","CHF 4.50",305,"Stoffkarte Pink mit Bordüre");break;case"India_Style_6":c(a,"India_Style_6","India_Style","CHF 4.50",306,"Stoffkarte Blümchen Blau-Pink");break;case"India_Style_7":c(a,"India_Style_7","India_Style","CHF 4.50",307,"Stoffkarte Orange mit Glitzersteinchen");break;case"India_Style_8":c(a,"India_Style_8","India_Style","CHF 4.50",308,"Stoffkarte Grün mit Glitzersteinchen");break;case"India_Style_9":c(a,"India_Style_9","India_Style","CHF 4.50",309,"Stoffkarte Blaue Punkte mit Glitzersteinchen");break;case"India_Style_10":c(a,"India_Style_10","India_Style","CHF 4.50",310,"Stoffkarte Rosa Punkte mit Glitzersteinchen");break;case"India_Style_11":c(a,"India_Style_11","India_Style","CHF 4.50",311,"Stoffkarte Pink-Orange mit Glitzersteinchen");break;case"India_Style_12":c(a,"India_Style_12","India_Style","CHF 4.50",312,"Stoffkarte Blau mit Bordüre");break;case"India_Style_13":c(a,"India_Style_13","India_Style","CHF 4.50",313,"Stoffkarte Blümchen Pink mit Glitzersteinchen");break;case"India_Style_14":c(a,"India_Style_14","India_Style","CHF 4.50",314,"Stoffkarte Blümchen Blau mit Glitzersteinchen")}}function c(a,b,c,e,f,g){a.karte=b,a.kartenstyle=c,a.price=e,d(a,b,c),a.kartenArticleDesplay=f,a.title=g}function d(a,b,c){"Mandala_Style"==c?a.setprice="Ab 10 Sets 2.80 | Ab 100 Sets 1.80":"Dotti_Style"==c?a.setprice="Ab 10 Karten 3.50 | Ab 100 Karten 2.50":"India_Style"==c&&(a.setprice="Ab 10 Karten 3.50 | Ab 100 Karten 2.50",a.detailsTwo="(Verschiedene Karten-Sujets gemischt auch möglich)")}var e=angular.module("mainApp");e.controller("KartenDetailsController",["$scope","$log","$stateParams",a])}();