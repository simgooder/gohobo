//<![CDATA[

/* <BuyButton> */
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'gohobo.myshopify.com',
      apiKey: '817488d3f4698fa5b34730f7991164fb',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [6527924997],
        node: document.getElementById('product-component-cc48b1ac2ce'),
        moneyFormat: '${{amount}}',
        options: {
          "product": {
            "buttonDestination": "product",
            "layout": "vertical",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "title": false,
              "variantTitle": false,
              "options": true,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "BUY NOW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background": "#ff3366",
                "outline": "none",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "margin-top": "1em !important",
                "padding-top": "0.75em",
                "padding-bottom": "0.75em",
                "padding-left": "2em",
                "padding-right": "2em",
                "width": "100%",
                ":hover": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                ":focus": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "12px"
              }
            }
          },
          "cart": {
            "contents": {
              "title": true,
              "lineItems": true,
              "footer": true,
              "button": true
            },
            "text": {
              "title": "Cart",
              "total": "Total",
              "notice": "Shipping and discount codes are added at checkout.",
              "button": "CHECKOUT"
            },
            "styles": {
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "font-weight": "bold",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                "border": "2px solid #6AB9FF",
                ":hover": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                ":focus": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "cart": {
                "background-color": "#ffffff"
              },
              "footer": {
                "background-color": "#ffffff"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "close": {
                ":hover": {
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": true,
              "title": true,
              "variantTitle": false,
              "options": true,
              "price": true,
              "description": true,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "ADD TO CART"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "15px",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                ":hover": {
                  "background-color": "#ff3366",
                  "color": "FFFFFFF"
                },
                ":focus": {
                  "background-color": "#ff3366",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "26px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-30px"
          }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "display": "none",
                "font-family": "Roboto, sans-serif",
                "background-color": "#ff6767",
                ":hover": {
                  "background-color": "#6AB9FF"
                },
                ":focus": {
                  "background-color": "#e65d5d"
                },
                "font-weight": "normal"
              }
            }
          },
          "modal": {
            "styles": {
              "modal": {
                "background-color": "#ffffff"
              }
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              },
              "select": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              }
            }
          }
        }
      });
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [6527701509],
        node: document.getElementById('product-component-33ba9946888'),
        moneyFormat: '${{amount}}',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "layout": "vertical",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "title": false,
              "variantTitle": false,
              "options": true,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "BUY NOW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background": "#ff3366",
                "outline": "none",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "margin-top": "1em !important",
                "padding-top": "0.75em",
                "padding-bottom": "0.75em",
                "padding-left": "2em",
                "padding-right": "2em",
                "width": "100%",
                ":hover": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                ":focus": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "12px"
              }
            }
          },
          "cart": {
            "contents": {
              "title": true,
              "lineItems": true,
              "footer": true,
              "button": true
            },
            "text": {
              "title": "Cart",
              "total": "Total",
              "notice": "Shipping to USA &amp; Canada is free. Discount codes are added at checkout.",
              "button": "CHECKOUT"
            },
            "styles": {
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "font-weight": "bold",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                "border": "2px solid #6AB9FF",
                ":hover": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                ":focus": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "cart": {
                "background-color": "#ffffff"
              },
              "footer": {
                "background-color": "#ffffff"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "close": {
                ":hover": {
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": true,
              "title": true,
              "variantTitle": false,
              "options": true,
              "price": true,
              "description": true,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "ADD TO CART"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "15px",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                ":hover": {
                  "background-color": "#ff3366",
                  "color": "FFFFFFF"
                },
                ":focus": {
                  "background-color": "#ff3366",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "26px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-30px"
          }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "display": "none",
                "font-family": "Roboto, sans-serif",
                "background-color": "#ff6767",
                ":hover": {
                  "background-color": "#6AB9FF"
                },
                ":focus": {
                  "background-color": "#e65d5d"
                },
                "font-weight": "normal"
              }
            }
          },
          "modal": {
            "styles": {
              "modal": {
                "background-color": "#ffffff"
              }
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              },
              "select": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              }
            }
          }
        }
      });
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [6528166149],
        node: document.getElementById('product-component-424f000687c'),
        moneyFormat: '${{amount}}',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "layout": "vertical",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "title": false,
              "variantTitle": false,
              "options": true,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "BUY NOW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background": "#ff3366",
                "outline": "none",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "margin-top": "1em !important",
                "padding-top": "0.75em",
                "padding-bottom": "0.75em",
                "padding-left": "2em",
                "padding-right": "2em",
                "width": "100%",
                ":hover": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                ":focus": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "12px"
              }
            }
          },
          "cart": {
            "contents": {
              "title": true,
              "lineItems": true,
              "footer": true,
              "button": true
            },
            "text": {
              "title": "Cart",
              "total": "Total",
              "notice": "Shipping and discount codes are added at checkout.",
              "button": "CHECKOUT"
            },
            "styles": {
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "font-weight": "bold",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                "border": "2px solid #6AB9FF",
                ":hover": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                ":focus": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "cart": {
                "background-color": "#ffffff"
              },
              "footer": {
                "background-color": "#ffffff"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "close": {
                ":hover": {
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": true,
              "title": true,
              "variantTitle": false,
              "options": true,
              "price": true,
              "description": true,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "ADD TO CART"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "15px",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                ":hover": {
                  "background-color": "#ff3366",
                  "color": "FFFFFFF"
                },
                ":focus": {
                  "background-color": "#ff3366",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "26px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-30px"
          }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "display": "none",
                "font-family": "Roboto, sans-serif",
                "background-color": "#ff6767",
                ":hover": {
                  "background-color": "#6AB9FF"
                },
                ":focus": {
                  "background-color": "#e65d5d"
                },
                "font-weight": "normal"
              }
            }
          },
          "modal": {
            "styles": {
              "modal": {
                "background-color": "#ffffff"
              }
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              },
              "select": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              }
            }
          }
        }
      });
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [6528164485],
        node: document.getElementById('product-component-0f72f886e68'),
        moneyFormat: '${{amount}}',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "layout": "vertical",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "title": false,
              "variantTitle": false,
              "options": true,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "BUY NOW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background": "#ff3366",
                "outline": "none",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "margin-top": "1em !important",
                "padding-top": "0.75em",
                "padding-bottom": "0.75em",
                "padding-left": "2em",
                "padding-right": "2em",
                "width": "100%",
                ":hover": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                ":focus": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "12px"
              }
            }
          },
          "cart": {
            "contents": {
              "title": true,
              "lineItems": true,
              "footer": true,
              "button": true
            },
            "text": {
              "title": "Cart",
              "total": "Total",
              "notice": "Shipping and discount codes are added at checkout.",
              "button": "CHECKOUT"
            },
            "styles": {
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "font-weight": "bold",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                "border": "2px solid #6AB9FF",
                ":hover": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                ":focus": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "cart": {
                "background-color": "#ffffff"
              },
              "footer": {
                "background-color": "#ffffff"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "close": {
                ":hover": {
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": true,
              "title": true,
              "variantTitle": false,
              "options": true,
              "price": true,
              "description": true,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "ADD TO CART"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "15px",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                ":hover": {
                  "background-color": "#ff3366",
                  "color": "FFFFFFF"
                },
                ":focus": {
                  "background-color": "#ff3366",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "26px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-30px"
          }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "display": "none",
                "font-family": "Roboto, sans-serif",
                "background-color": "#ff6767",
                ":hover": {
                  "background-color": "#6AB9FF"
                },
                ":focus": {
                  "background-color": "#e65d5d"
                },
                "font-weight": "normal"
              }
            }
          },
          "modal": {
            "styles": {
              "modal": {
                "background-color": "#ffffff"
              }
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              },
              "select": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              }
            }
          }
        }
      });
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [6812132677],
        node: document.getElementById('product-component-ae5e4614f5e'),
        moneyFormat: '${{amount}}',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "layout": "vertical",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "title": false,
              "variantTitle": false,
              "options": true,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "BUY NOW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background": "#ff3366",
                "outline": "none",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "margin-top": "1em !important",
                "padding-top": "0.75em",
                "padding-bottom": "0.75em",
                "padding-left": "2em",
                "padding-right": "2em",
                "width": "100%",
                ":hover": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                ":focus": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "12px"
              }
            }
          },
          "cart": {
            "contents": {
              "title": true,
              "lineItems": true,
              "footer": true,
              "button": true
            },
            "text": {
              "title": "Cart",
              "total": "Total",
              "notice": "Shipping and discount codes are added at checkout.",
              "button": "CHECKOUT"
            },
            "styles": {
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "font-weight": "bold",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                "border": "2px solid #6AB9FF",
                ":hover": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                ":focus": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "cart": {
                "background-color": "#ffffff"
              },
              "footer": {
                "background-color": "#ffffff"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "close": {
                ":hover": {
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": true,
              "title": true,
              "variantTitle": false,
              "options": true,
              "price": true,
              "description": true,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "ADD TO CART"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "15px",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                ":hover": {
                  "background-color": "#ff3366",
                  "color": "FFFFFFF"
                },
                ":focus": {
                  "background-color": "#ff3366",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "26px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-30px"
          }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "display": "none",
                "font-family": "Roboto, sans-serif",
                "background-color": "#ff6767",
                ":hover": {
                  "background-color": "#6AB9FF"
                },
                ":focus": {
                  "background-color": "#e65d5d"
                },
                "font-weight": "normal"
              }
            }
          },
          "modal": {
            "styles": {
              "modal": {
                "background-color": "#ffffff"
              }
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              },
              "select": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              }
            }
          }
        }
      });
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [6527736581],
        node: document.getElementById('product-component-5a880892537'),
        moneyFormat: '${{amount}}',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "layout": "vertical",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "title": false,
              "variantTitle": false,
              "options": true,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "BUY NOW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background": "#ff3366",
                "outline": "none",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "margin-top": "1em !important",
                "padding-top": "0.75em",
                "padding-bottom": "0.75em",
                "padding-left": "2em",
                "padding-right": "2em",
                "width": "100%",
                ":hover": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                ":focus": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "12px"
              }
            }
          },
          "cart": {
            "contents": {
              "title": true,
              "lineItems": true,
              "footer": true,
              "button": true
            },
            "text": {
              "title": "Cart",
              "total": "Total",
              "notice": "Shipping and discount codes are added at checkout.",
              "button": "CHECKOUT"
            },
            "styles": {
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "font-weight": "bold",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                "border": "2px solid #6AB9FF",
                ":hover": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                ":focus": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "cart": {
                "background-color": "#ffffff"
              },
              "footer": {
                "background-color": "#ffffff"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "close": {
                ":hover": {
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": true,
              "title": true,
              "variantTitle": false,
              "options": true,
              "price": true,
              "description": true,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "ADD TO CART"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "15px",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                ":hover": {
                  "background-color": "#ff3366",
                  "color": "FFFFFFF"
                },
                ":focus": {
                  "background-color": "#ff3366",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "26px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-30px"
          }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "display": "none",
                "font-family": "Roboto, sans-serif",
                "background-color": "#ff6767",
                ":hover": {
                  "background-color": "#6AB9FF"
                },
                ":focus": {
                  "background-color": "#e65d5d"
                },
                "font-weight": "normal"
              }
            }
          },
          "modal": {
            "styles": {
              "modal": {
                "background-color": "#ffffff"
              }
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              },
              "select": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              }
            }
          }
        }
      });
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [6527726405],
        node: document.getElementById('product-component-dd0eb7eab7b'),
        moneyFormat: '${{amount}}',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "layout": "vertical",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "title": false,
              "variantTitle": false,
              "options": true,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "BUY NOW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background": "#ff3366",
                "outline": "none",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "margin-top": "1em !important",
                "padding-top": "0.75em",
                "padding-bottom": "0.75em",
                "padding-left": "2em",
                "padding-right": "2em",
                "width": "100%",
                ":hover": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                ":focus": {
                  "background-color": "#ED4F80",
                  "color": "#FFFFFF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "12px"
              }
            }
          },
          "cart": {
            "contents": {
              "title": true,
              "lineItems": true,
              "footer": true,
              "button": true
            },
            "text": {
              "title": "Cart",
              "total": "Total",
              "notice": "Shipping and discount codes are added at checkout.",
              "button": "CHECKOUT"
            },
            "styles": {
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "16px",
                "font-weight": "bold",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                "border": "2px solid #6AB9FF",
                ":hover": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                ":focus": {
                  "background": "#ffffff",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "cart": {
                "background-color": "#ffffff"
              },
              "footer": {
                "background-color": "#ffffff"
              },
              "title": {
                "color": "#4c4c4c"
              },
              "close": {
                ":hover": {
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": true,
              "title": true,
              "variantTitle": false,
              "options": true,
              "price": true,
              "description": true,
              "buttonWithQuantity": false,
              "button": true,
              "quantity": false
            },
            "text": {
              "button": "ADD TO CART"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#6AB9FF",
                "color": "#ffffff",
                "font-family": "Roboto, sans-serif",
                "font-size": "15px",
                "padding-top": "0.5em",
                "padding-bottom": "0.5em",
                "padding-left": "2em",
                "padding-right": "2em",
                ":hover": {
                  "background-color": "#ff3366",
                  "color": "FFFFFFF"
                },
                ":focus": {
                  "background-color": "#ff3366",
                  "color": "#6AB9FF"
                },
                "border-radius": "3px",
                "font-weight": "600",
                "letter-spacing": "1px"
              },
              "variantTitle": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "font-size": "26px",
                "color": "#4c4c4c"
              },
              "description": {
                "color": "#4c4c4c",
                "font-size": "14px",
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Roboto, sans-serif",
                "font-size": "14px",
                "color": "#4c4c4c",
                "font-weight": "normal"
              },
              "quantityInput": {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                "color": "#4c4c4c"
              },
              "compareAt": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal"
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-30px"
          }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "display": "none",
                "font-family": "Roboto, sans-serif",
                "background-color": "#ff6767",
                ":hover": {
                  "background-color": "#6AB9FF"
                },
                ":focus": {
                  "background-color": "#e65d5d"
                },
                "font-weight": "normal"
              }
            }
          },
          "modal": {
            "styles": {
              "modal": {
                "background-color": "#ffffff"
              }
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              },
              "select": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "normal",
                "color": "#4c4c4c"
              }
            }
          }
        }
      });
    });
  

  }
})();
/* </BuyButton> */
//]]>