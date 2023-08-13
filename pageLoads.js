window.performance.mark('debut:theme_stylesheet_loaded.start');

function onLoadStylesheet() {
  performance.mark('debut:theme_stylesheet_loaded.end');
  performance.measure('debut:theme_stylesheet_loaded', 'debut:theme_stylesheet_loaded.start', 'debut:theme_stylesheet_loaded.end');

  var url = "//cdn.shopify.com/s/files/1/0549/9456/7357/t/15/assets/theme.css?v=62501758360485127601662071681";
  var link = document.querySelector('link[href="' + url + '"]');
  link.loaded = true;
  link.dispatchEvent(new Event('load'));
}

var theme = {
  breakpoints: {
    medium: 768,
    large: 1024,
    widescreen: 1400
  },
  strings: {
    addToCart: "Add to cart",
    soldOut: "Sold out",
    unavailable: "Unavailable",
    regularPrice: "Regular price",
    salePrice: "Sale price",
    sale: "Limited Time",
    fromLowestPrice: "from [price]",
    vendor: "Vendor",
    showMore: "Show More",
    showLess: "Show Less",
    searchFor: "Search for",
    addressError: "Error looking up that address",
    addressNoResults: "No results for that address",
    addressQueryLimit: "You have exceeded the Google API usage limit. Consider upgrading to a \u003ca href=\"https:\/\/developers.google.com\/maps\/premium\/usage-limits\"\u003ePremium Plan\u003c\/a\u003e.",
    authError: "There was a problem authenticating your Google Maps account.",
    newWindow: "Opens in a new window.",
    external: "Opens external website.",
    newWindowExternal: "Opens external website in a new window.",
    removeLabel: "Remove [product]",
    update: "Update",
    quantity: "Quantity",
    discountedTotal: "Discounted total",
    regularTotal: "Regular total",
    priceColumn: "See Price column for discount details.",
    quantityMinimumMessage: "Quantity must be 1 or more",
    cartError: "There was an error while updating your cart. Please try again.",
    removedItemMessage: "Removed \u003cspan class=\"cart__removed-product-details\"\u003e([quantity]) [link]\u003c\/span\u003e from your cart.",
    unitPrice: "Unit price",
    unitPriceSeparator: "per",
    oneCartCount: "1 item",
    otherCartCount: "[count] items",
    quantityLabel: "Quantity: [count]",
    products: "Search Suggestions",
    loading: "Loading",
    cartEmpty: "Your cart is currently empty.",
    number_of_results: "[result_number] of [results_count]",
    number_of_results_found: "[results_count] results found",
    one_result_found: "1 result found",
    extra_charge: 39975692140733
  },
  moneyFormat: "${{amount}}",
  moneyFormatWithCurrency: "${{amount}} USD",
  settings: {
    predictiveSearchEnabled: true,
    predictiveSearchShowPrice: true,
    predictiveSearchShowVendor: false
  },
  stylesheet: "//cdn.shopify.com/s/files/1/0549/9456/7357/t/15/assets/theme.css?v=62501758360485127601662071681"
}

document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

if (window.MSInputMethodContext && document.documentMode) {
  var scripts = document.getElementsByTagName('script')[0];
  var polyfill = document.createElement("script");
  polyfill.defer = true;
  polyfill.src = "//cdn.shopify.com/s/files/1/0549/9456/7357/t/15/assets/ie11CustomProperties.min.js?v=146208399201472936201655072901";

  scripts.parentNode.insertBefore(polyfill, scripts);
}

window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');