console.log('GTM-BASE - v1.0.0 - 270920191035');

/*GATOR LIBRARY*/
// Event Delegator Snippet - !Mandatory!
(function(){function t(a){return k?k:a.matches?k=a.matches:a.webkitMatchesSelector?k=a.webkitMatchesSelector:a.mozMatchesSelector?k=a.mozMatchesSelector:a.msMatchesSelector?k=a.msMatchesSelector:a.oMatchesSelector?k=a.oMatchesSelector:k=e.matchesSelector}function q(a,b,c){if("_root"==b)return c;if(a!==c){if(t(a).call(a,b))return a;if(a.parentNode)return m++,q(a.parentNode,b,c)}}function u(a,b,c,e){d[a.id]||(d[a.id]={});d[a.id][b]||(d[a.id][b]={});d[a.id][b][c]||(d[a.id][b][c]=[]);d[a.id][b][c].push(e)}
function v(a,b,c,e){if(d[a.id])if(!b)for(var f in d[a.id])d[a.id].hasOwnProperty(f)&&(d[a.id][f]={});else if(!e&&!c)d[a.id][b]={};else if(!e)delete d[a.id][b][c];else if(d[a.id][b][c])for(f=0;f<d[a.id][b][c].length;f++)if(d[a.id][b][c][f]===e){d[a.id][b][c].splice(f,1);break}}function w(a,b,c){if(d[a][c]){var k=b.target||b.srcElement,f,g,h={},n=g=0;m=0;for(f in d[a][c])d[a][c].hasOwnProperty(f)&&(g=q(k,f,l[a].element))&&e.matchesEvent(c,l[a].element,g,"_root"==f,b)&&(m++,d[a][c][f].match=g,h[m]=d[a][c][f]);
b.stopPropagation=function(){b.cancelBubble=!0};for(g=0;g<=m;g++)if(h[g])for(n=0;n<h[g].length;n++){if(!1===h[g][n].call(h[g].match,b)){e.cancel(b);return}if(b.cancelBubble)return}}}function r(a,b,c,k){function f(a){return function(b){w(g,b,a)}}if(this.element){a instanceof Array||(a=[a]);c||"function"!=typeof b||(c=b,b="_root");var g=this.id,h;for(h=0;h<a.length;h++)k?v(this,a[h],b,c):(d[g]&&d[g][a[h]]||e.addEvent(this,a[h],f(a[h])),u(this,a[h],b,c));return this}}function e(a,b){if(!(this instanceof
e)){for(var c in l)if(l[c].element===a)return l[c];p++;l[p]=new e(a,p);return l[p]}this.element=a;this.id=b}var k,m=0,p=0,d={},l={};e.prototype.on=function(a,b,c){return r.call(this,a,b,c)};e.prototype.off=function(a,b,c){return r.call(this,a,b,c,!0)};e.matchesSelector=function(){};e.cancel=function(a){a.preventDefault();a.stopPropagation()};e.addEvent=function(a,b,c){a.element.addEventListener(b,c,"blur"==b||"focus"==b)};e.matchesEvent=function(){return!0};"undefined"!==typeof module&&module.exports&&
(module.exports=e);window.Gator=e})();
// -- Usage: Gator(element).on('eventName', 'target', function(e) { ... } );
// -- Documentation: https://craig.is/riding/gators

// -- Special Charfacters Replace for sending clean Metrics
"function" != typeof String.prototype.replaceSpecialChars && (String.prototype.replaceSpecialChars = function () { var e = { "\u00e7": "c", "\u00e6": "ae", "\u0153": "oe", "\u00e1": "a", "\u00e9": "e", "\u00ed": "i", "\u00f3": "o", "\u00fa": "u", "\u00e0": "a", "\u00e8": "e", "\u00ec": "i", "\u00f2": "o", "\u00f9": "u", "\u00e4": "a", "\u00eb": "e", "\u00ef": "i", "\u00f6": "o", "\u00fc": "u", "\u00ff": "y", "\u00e2": "a", "\u00ea": "e", "\u00ee": "i", "\u00f4": "o", "\u00fb": "u", "\u00e5": "a", "\u00e3": "a", "\u00f8": "o", "\u00f5": "o", u: "u", "\u00c1": "A", "\u00c9": "E", "\u00cd": "I", "\u00d3": "O", "\u00da": "U", "\u00ca": "E", "\u00d4": "O", "\u00dc": "U", "\u00c3": "A", "\u00d5": "O", "\u00c0": "A", "\u00c7": "C", "\u00d1" : "N", "\u00f1" : "n" }; return this.replace(/[\u00e0-\u00fa]/g, function (a) { return void 0 !== e[a] ? e[a] : a }) })
// -- Usage: "string".replaceSpecialChars();

// -- Sanitize URI
"function" != typeof String.prototype.sanitizeURI && (String.prototype.sanitizeURI = function () { return decodeURIComponent(this).replace('ÃƒÂ¡','Ã¡').replace('ÃƒÂ©9','Ã©').replace('ÃƒÂ³','Ã³').replace('ÃƒÂ­','Ã­').replace('ÃƒÂ±','Ã±').replace('ÃƒÂº','Ãº'); })
// -- Usage: "string".sanitizeURI();

/*Swipe Functions*/
"function" != typeof Swipe && ( Swipe = function(t,n){var e=this;function a(t){e.touchHandler(t)}this.callback=n;var r=[];Array.isArray(t)?r=t:r.push(t),r.forEach(function(t){t&&(t.addEventListener("touchstart",a,!1),t.addEventListener("touchmove",a,!1),t.addEventListener("touchend",a,!1))})})
"undefined" === typeof Swipe.prototype.touches && (Swipe.prototype.touches={touchstart:{x:-1,y:-1},touchmove:{x:-1,y:-1},touchend:!1,direction:"undetermined"})
"function" != typeof Swipe.prototype.touchHandler && (Swipe.prototype.touchHandler = function(t){var h;if(void 0!==t&&void 0!==t.touches)switch(h=t.touches[0],t.type){case"touchstart":case"touchmove":this.touches[t.type].x=h.pageX,this.touches[t.type].y=h.pageY;break;case"touchend":this.touches[t.type]=!0;var o=this.touches.touchstart.x-this.touches.touchmove.x,s=this.touches.touchstart.y-this.touches.touchmove.y;o<0&&(o/=-1),s<0&&(s/=-1),this.touches.direction=o>s?this.touches.touchstart.x<this.touches.touchmove.x?"right":"left":this.touches.touchstart.y<this.touches.touchmove.y?"down":"up",this.callback(t,this.touches.direction)}})
/*End Swipe Functions*/

"function" != typeof getUrlParams && (getUrlParams = function(n){var e={};return decodeURIComponent(n.slice(n.indexOf("?")+1)).split("&").forEach(function(n,r){var t=n.split("=",2);e[t[0]]=t[1]}),e})

"function" != typeof isInViewport && (isInViewport=function(n){var e=document.querySelector(n);if(null===e)return!1;var t=e.getBoundingClientRect().top+window.scrollY,i=t+e.offsetHeight,o=window.scrollY,r=o+window.innerHeight;return i>o&&t<r})

"function" != typeof parseUrl && (parseUrl = function(e){var r=document.createElement("a");return r.href=e,r})

/**** Clase para manejar Cookies ****/
var CookiesTools = CookiesTools || {};

CookiesTools = {

  createCookie : function(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    var _sanitizedValue = value.replace('¡',''); // Mejorar
    document.cookie = name + "=" + _sanitizedValue + expires + "; path=/";
  },
  
  readCookie : function(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);      
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  deleteCookie : function(name) {
    this.createCookie(name, "", -1);
  },
};

/**** Fin Clase para manejar Cookies ****/

/**** Clase para encapsular todos los metodos de GTM ****/

var GTM = GTM || {};

GTM = {
  _developerMode : false,
  _isDebug : true,
  currencyCode : 'ARS',

  trackEvent : function( eventCategory, eventAction, eventLabel ){

      eventLabel    = eventLabel.replaceSpecialChars();
      eventCategory = eventCategory.replaceSpecialChars();
      var data = {
        'event': 'trackEvent',
        'eventCategory': eventCategory,
        'eventAction': eventAction,
        'eventLabel': eventLabel      
      };

      this._push( data );
    },

    trackPageview : function( pageName ){

      pageName = pageName.sanitizeURI().replaceSpecialChars();
      var data = {
        'event' : 'trackPageview',
        'pageName' : pageName
      };

      this._push( data ); 
    },

    trackSearch : function( keyword, results ){

      keyword = keyword.sanitizeURI();

      var data = {
        'event' : 'trackSearch',
        'keyword' : keyword,
        'resultados' : results,
      };

      this._push( data );   
    },
    
    trackImpProdPageview : function( products ){      
      this._trackImpressions( 'trackImpProdPageview', products );     
    },    

    trackImpProdSlider : function( products ){      
      this._trackImpressions( 'trackImpProdSlider', products );
    },

    trackImpProdScroll : function( products ){
      this._trackImpressions( 'trackImpProdScroll', products ); 
    },

    trackImpProdFilter : function( products, filter ){
      this._trackImpressions( 'trackImpProdFilter', products, filter ); 
    },

    trackImpProdSearchPreview : function( products ){
      this._trackImpressions( 'trackImpProdSearchPreview', products );  
    },

    trackImpProdTab : function( products ){
      this._trackImpressions( 'trackImpProdTab', products );  
    },

    trackImpPromoPageview : function ( promotions ){      

      this._trackPromotions( 'trackImpPromoPageview', promotions );
    },

    trackImpPromoSlider : function( promotions ){     

      this._trackPromotions( 'trackImpPromoSlider', promotions );
    },

    trackImpPromoScroll : function( promotions ){     

      this._trackPromotions( 'trackImpPromoScroll', promotions );
    },

    trackClickProm : function( promotion ){

      this._trackPromotions( 'trackClickProm', promotions, 'promoClick' );  
    },

    trackClickProd : function( products, list ){
      if (list === null) list = '';
      var data = {
        'event' : 'trackClickProd',
        'ecommerce' : {
          'click' : {
            'actionField' : {
              'list' : list
            },
            'products' : this._getProducts( products )
          }
        }
      };

      this._push( data );
    },

    trackProductDetail : function( products, list ){
      
      if (list === null) list = '';
      var data = {
        'event' : 'trackProductDetail',
        'ecommerce' : {
          'detail' : {
            'actionField' : {
              'list' : list
            },
            'products' : this._getProducts( products )
          }
        }
      };

      this._push( data );
    },

    trackAddtoCart : function( products ){
      var data = {
        'event' : 'trackAddtoCart',
        'ecommerce' : {
          'currencyCode' : this.currencyCode,
          'add' : {           
            'products' : this._getProducts( products )
          }
        }
      };

      this._push( data );
    },

    trackRemoveFromCart : function( products ){
      var data = {
        'event' : 'trackRemoveFromCart',
        'ecommerce' : {
          'currencyCode' : this.currencyCode,
          'remove' : {            
            'products' : this._getProducts( products )
          }
        }
      };

      this._push( data );
    },

    trackCheckoutView : function( products, step ){
      var data = {
        'event' : 'trackCheckoutView',
        'ecommerce' : {
          'checkout' : {
            'actionField' : {
              'step' : step
            },
            'products' : this._getProducts( products )
          }
        }
      };

      this._push( data ); 
    },
    
    trackCheckoutOption : function( step, option ){
      var data = {
        'event' : 'trackCheckoutOption',
        'ecommerce' : {
          'checkout_option' : {
            'actionField' : {
              'step'   : step,
              'option' : option
            }
          }
        }
      };

      this._push( data ); 
    },

    trackTransaction : function( transaction, products ){
      var data = {
        'event' : 'trackTransaction',
        'ecommerce' : {
          'purchase' : {
            'actionField' : {
              'id' : transaction.id,
              'revenue' : transaction.revenue,
              'shipping' : transaction.shipping,
              'coupon' : transaction.coupon
            },
            'products' : this._getProducts( products )
          }
        }
      };

      this._push( data ); 
    },


    _trackPromotions : function( event, promotions, type = 'promoView' ){
      
      var _promotions = { 'promotions' : this._getPromotions( promotions ) };
      var _ecommerce = {};
      _ecommerce[ type ] = _promotions;

      var data = {
          'event' : event,
          'ecommerce' : _ecommerce              
      };

      this._push( data );     

    },

    _trackImpressions : function( event, products, filter = false ){

      var data = {
        'event' : event,        
        'ecommerce' : {
          'currencyCode' : this.currencyCode,
          'impressions'  : this._getProducts( products )
          }       
      };

      if ( filter ) data['filter'] = filter.replaceSpecialChars();

      this._push( data );     
    },

    _getProducts : function( products ){
      var _products = [];
      

      if (! (products instanceof Array) ) {
            products = [products];
      }


      products.forEach(function (product,index) {
        
        var _product = {
                  'name'     : product.name.replaceSpecialChars(),
                  'id'     : product.id,                                                                                     
                 };


        if ( 'list'   in product ) _product['list']     = product.list;
        if ( 'position' in product ) _product['position'] = product.position;
        
        if ( 'price'  in product ) _product['price']    = product.price;

        if ( 'brand'  in product ) _product['brand']      = product.brand;
        if ( 'category' in product ) _product['category']   = product.category;

        _product['variant'] = '';
        if ( 'variant'  in product ) _product['variant']    = product.variant.trim();

        if ( 'quantity' in product ) _product['quantity']   = product.quantity;
        if ( 'coupon'   in product ) _product['coupon']     = product.coupon;
        if ( 'discount' in product ) _product['dimension4'] = product.discount;
        

        _products.push(_product);
        
      });

      //return JSON.stringify(_products);
      return (_products);
    },

    _getPromotions : function( promotions ){
      var _promotions = [];
      promotions.forEach(function (promotion) {

        var _promotion = {
                    'name'     : promotion.name.replaceSpecialChars(),
                    'id'     : promotion.id,
                    'creative' : promotion.creative,                      
                    'position' : promotion.position
                 };

        _promotions.push(_promotion);
        
      });

      return JSON.stringify(_promotions);
    },



    _push : function( data ){
            
      if ( this._doPush() ) dataLayer.push(data);    

      if ( this._isDebug ) this._log( data );
    },

    _log : function( data ){
      console.log('DATA: ' + JSON.stringify(data));   
    },

    _doPush : function(){
      var url = parseUrl( window.location.href );   
      return ( url.hostname.includes('myvtex') || this._developerMode === false );      
    }
 
};



//if (typeof CK_PRODUCT_VIEW_LIST_FROM === 'undefined' || CK_PRODUCT_VIEW_LIST_FROM === null) {
const CK_PRODUCT_VIEW_LIST_FROM = 'product-view-list-from';    
//}



/*** ----------------------- **/

var GTMProduct = GTMProduct || {};

GTMProduct = {

  _vtexDataFromNativeDataLayer : false,

  getFromPromise : function( product_id = false ){
    return new Promise( function( resolve, reject ) {

      var _category = '';
      var _brand    = '';
      var vtexDataFromNativeDataLayer = GTMProduct._getVtexNativeDataLayer();

      if ( vtexDataFromNativeDataLayer ){
        _category = vtexDataFromNativeDataLayer.productCategoryName;
        _brand    = vtexDataFromNativeDataLayer.productBrandName;
      }

      if ( ! product_id ){
        vtexjs.catalog.getCurrentProductWithVariations().done(function (_product) {            

          let _sku = GTMProduct._getActiveSku( _product );        
          resolve( {
            'id'        : _product.productId, 
            'price'     : _sku.bestPrice.toString().slice(0, -2),
            'name'      : _product.name,
            'brand'     : _brand,
            'category'  : _category,
            'discount'  : GTMProduct._calculateDiscountPercent( _product ) + '%'
          });
        });
      }else{
        vtexjs.catalog.getProductWithVariations( product_id ).done(function (_product) {                  
          
          let _sku = GTMProduct._getActiveSku( _product );
          resolve( {
            'id'     : _product.productId,
            'price'    : _sku.bestPrice.toString().slice(0, -2),
            'name'     : _product.name,
            'brand'     : _brand,
            'category'  : _category,
            'discount' : GTMProduct._calculateDiscountPercent( _product ) + '%'
          });
        });
      }
    });
  },
  
  getFromDataAttributes : function( product_id, object ){
    if ( object === undefined ) object = document;
    var _product = object.querySelector('#product-' + product_id);
    
    if ( _product ){      
      var _price = _product.dataset.gtmProduct_price.toString().slice(2, -3).replace(/\./g , '');
      var _discountPercent = '0%';
      if ( _product.dataset.gtmProduct_discount ) _discountPercent = parseFloat(_product.dataset.gtmProduct_discount) + '%';

      return( {
        'id'       : _product.dataset.gtmProduct_sku,
        'price'    : _price,
        'name'     : _product.dataset.gtmProduct_name,
        'brand'    : _product.dataset.gtmProduct_brand,
        'category' : _product.dataset.gtmProduct_category,
        'discount' : _discountPercent
      });
    }
    return false;
  },

  getFromOrderForm : function( orderFormProduct ){    

    var _discountPercent = 0;
  
    _discountPercent = Math.floor(100 - (orderFormProduct.price / orderFormProduct.originalPrice * 100));
    

    return( {
        'id'       : orderFormProduct.id,
        'price'    : orderFormProduct.sellingPrice.toString(),
        'name'     : orderFormProduct.name,
        'brand'    : orderFormProduct.brand,
        'category' : orderFormProduct.category,
        'quantity' : orderFormProduct.quantity,
        'discount' : _discountPercent + '%'
      });
  },
  
  getPosition : function( product_id, selector ){
    
    var position;
    var products = document.querySelectorAll( selector );

    for( position = 0 ; position < products.length ; position++ ){
      if (products[position].id == 'product-' + product_id ){
        return position + 1;
      }
    }
    return 0;
  },

  _calculateDiscountPercent : function( _product ){
    var _discountPercent = 0;

    let _sku = GTMProduct._getActiveSku( _product );
    if ( _sku.hasDiscount ){      
      _discount = _sku.discount / 100;
      _discountPercent = Math.floor((_discount * 100) / (_sku.listPrice / 100));

      return _discountPercent;
    } 
    
    var vtexDataFromNativeDataLayer = GTMProduct._getVtexNativeDataLayer();

    if ( vtexDataFromNativeDataLayer ){
      _discountPercent = Math.floor(100 - (vtexDataFromNativeDataLayer.productPriceFrom / vtexDataFromNativeDataLayer.productListPriceFrom * 100));
      return _discountPercent;
    }
    
    return 0;
  },

  _getActiveSku : function( _product ){

    var _skus = Object.values(_product.skus);
    for (let _sku of _skus) {
      if ( _sku.available == true ) return _sku;
    }
    return _product.skus[0];

  },

  _getVtexNativeDataLayer : function(){
    
    if ( ! GTMProduct._vtexDataFromNativeDataLayer ){
      if ( typeof(dataLayer) !== "undefined" ) {
        dataLayer.forEach(function (object) {
          if ( object.hasOwnProperty('accountName') ) {
            GTMProduct._vtexDataFromNativeDataLayer = object;
          }
        });
      }
    }

    return GTMProduct._vtexDataFromNativeDataLayer;
  }
  
};


var GTMSliders = GTMSliders || {};

GTMSliders = {
  _processedProducts : [],
  _lastPosition : [], 

  _collectProduct : function( product_id, list, position, object ){   
    let product    = GTMProduct.getFromDataAttributes( product_id, object );     
    product['position'] = position;
    product['list']   = list;
    return product;
  },

  _getProductsToProcess : function( elements, slider, list, offset, step ){
    
    var products = [];    
    if ( elements.length > 0 ){
      var position;                      
      for ( position = offset ; (position < (offset + step) ) && (position <= elements.length); position++ ){
        let product_id  = elements[position - 1].id.substring(8); 
        if  ( ! this._isProductProcessed( slider, product_id) ){
          let product = this._collectProduct( product_id, list, position , document );
          products.push(product);                 
          this._pushProcessedProducts( slider, product_id );                    
        }               
      }          
      this._setLastPosition( slider,  position - 1);            
    }
    return products;    
  },

  getProductsToProcess : function( elements, slider, list, limit, direction ){
    var offset;     
    var lastPosition = this._getLastPosition( slider );
    var step = 1; //step;   

    if ( direction == 'undetermined') return [];
    
    if ( direction == 'swipe-right'){
      if ( ( lastPosition - limit ) == 0 ) return [];
      direction = 'left';
    }

    if ( direction == 'swipe-left'){
      if ( lastPosition  == elements.length ) return [];
      direction = 'right';
    }

    if ( direction == 'right' ){            

      if ( lastPosition == 0 || lastPosition >= elements.length ){
        step = limit;
        lastPosition = 0;
      }         
      
      offset = lastPosition + 1;
    }

    if ( direction == 'left' ){      
      offset = lastPosition - 1;
      
      if ( lastPosition == limit ){
        step = limit;
        lastPosition = elements.length - limit;
        offset = lastPosition + 1;
      }

      if ( lastPosition == elements.length ){
        offset = lastPosition - limit;
      }                      
    }

    return this._getProductsToProcess( elements, slider, list, offset, step );

  },  

  _pushProcessedProducts : function( slider, product_id ){
    if ( typeof this._processedProducts[ slider ] !== 'object' ) this._processedProducts[ slider ] = [];
    this._processedProducts[ slider ].push( product_id );   
  },
  
  _isProductProcessed : function( slider, product_id ){
    if ( ! (slider in this._processedProducts) ) return false;    
    let collection = this._processedProducts[ slider ];
    return (collection.includes( product_id) ); 
  },

  _setLastPosition : function( slider, position ){
    this._lastPosition[ slider ]   = position;
  },

  _getLastPosition : function( slider ){
    if ( slider in this._lastPosition ) return this._lastPosition[ slider ];
    return 0;
  },  
};




var GTMEvents = GTMEvents || {};

GTMEvents = {

  /*Snippet NÂ°15: Click en productos relacionados*/
  trackClickProd : function( product, list ){   
    if ( product && list ){       

      CookiesTools.createCookie(CK_PRODUCT_VIEW_LIST_FROM, list );     
        GTM.trackClickProd( product, list ); 
    } 
    
  },

  /*Snippet NÂ°7: ImpresiÃ³n de productos en pageviews*/
  trackImpProdPageview : function( products ){
    if ( products ){
      GTM.trackImpProdPageview( products ); 
    }
  },

  /*Snippet NÂ°9: ImpresiÃ³n productos en slider*/
  trackImpProdSlider : function( products ){
    if ( products ){
      GTM.trackImpProdSlider( products ); 
    }

  },

  /*Snippet NÂ°11: ImpresiÃ³n de productos por scroll*/
  trackImpProdScroll : function( products ){
    if ( products ){
      GTM.trackImpProdScroll( products );       
    }
  },
  /*Snippet NÂ°15: Impresiones de producto en tabs*/
  trackImpProdTab : function( products ){
    if ( products ){
      GTM.trackImpProdTab( products );        
    } 
  },

  /* Snippet NÂ°17: VisualizaciÃ³n del detalle del producto */
  trackProductDetail : function( product, list ){
    if ( product ){
      GTM.trackProductDetail( product, list );
    }
  },

  /* Snippet NÂ°18: Agregado de productos al carrito */
  trackAddtoCart : function( product ){
    if ( product ){
      GTM.trackAddtoCart( product );      
    }
  },

  /* Snippet NÂ°7: ImpresiÃ³n de productos en pageviews. */
  trackImpProdPageview : function( products ){
    if ( products ){
      GTM.trackImpProdPageview( products ); 
    }  
  },

  /*Snippet NÂ°20: VisualizaciÃ³n de pasos de checkout*/
  trackCheckoutView : function( products, step ){
    if ( products && step ){
      GTM.trackCheckoutView( products, step );
    }
  }
  
};
