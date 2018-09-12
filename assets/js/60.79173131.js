(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{187:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("details",[e._m(1),a("p"),a("p",[e._v("The Charting Library should to be used by technical specialists.\nIt requires advanced skills in JavaScript and deep knowledge of WEB protocols.\nYou should know it yourself or have/hire people who know this.\nAdditionally, if you don't have a WEB API, you will need at least a server language programmer and a system administrator to implement a WEB API on the server side.")]),e._v(" "),a("p",[e._v("We’ve done lot of work to make the process of connecting data simple and clear.")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("If you still have questions, open "),a("a",{attrs:{href:"https://demo_chart.tradingview.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo Chart"),a("OutboundLink")],1),e._v(", then open Debugger-Network and filter requests by "),a("code",[e._v("demo_feed")]),e._v(". You will see all requests and corresponding responses in the "),a("a",{attrs:{href:"UDF"}},[e._v("UDF")]),e._v(" format.")])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),a("details",[e._m(5),a("p"),a("p",[e._v("The only example of a back-end feed that we have is written on Javascript for NodeJS. You can find it here: "),a("a",{attrs:{href:"https://github.com/tradingview/yahoo_datafeed",target:"_blank",rel:"noopener noreferrer"}},[e._v("yahoo_datafeed"),a("OutboundLink")],1)])]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),a("details",[e._m(15),a("p",[a("ul",[a("li",[e._v("Most of GUI elements can be hidden using "),a("a",{attrs:{href:"Featuresets"}},[e._v("Featuresets")]),e._v(". Please look at the "),a("a",{attrs:{href:"http://tradingview.github.io/featuresets.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interactive map of featuresets"),a("OutboundLink")],1),e._v(" to find what you need.")]),e._v(" "),e._m(16)])])]),e._v(" "),e._m(17),e._v(" "),a("details",[e._m(18),a("p",[a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://tradingview.com/widget/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Widget"),a("OutboundLink")],1),e._v(" is connected to TradingView data. Perfect for websites, blogs and forums where you need a fast & free solution.")]),e._v(" "),a("p",[e._v("Integration is simply cutting & pasting pre-made iframe code. It has lots of display modes.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Charting Library"),a("OutboundLink")],1),e._v(" is a chart with your own data.")]),e._v(" "),a("p",[e._v("This is a standalone solution that you download, host on your servers, connect your own data & use in your site/app for free.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.tradingview.com/trading-terminal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trading Terminal"),a("OutboundLink")],1),e._v(" is a standalone product that is licensed to brokers.")]),e._v(" "),a("p",[e._v("It includes all features available in the Charting Library, but it also has trading functionality, multiple chart layouts, watchlists, details, news widgets and other advanced tools.")]),e._v(" "),a("p",[e._v("It has its own licensing fees associated with it.")])])])])]),e._v(" "),e._m(19)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-questions","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Questions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",[t("b",[this._v("1. How do I connect my data? How to add new ticker symbols?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("First, you need to read and understand this article: "),t("a",{attrs:{href:"How-To-Connect-My-Data"}},[this._v("How to connect my data")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("details",[t("summary",[t("b",[this._v("2. Do you have an example of JS API implementation?")])]),t("p"),t("p",[this._v("If you look at the picture below, you will see the UDF Adapter as an example of the JS API implementation. Its code is not minified and it is written in such a way that our clients can understand how it works.")]),this._v(" "),t("p",[t("a",{attrs:{href:"How-To-Connect-My-Data#udf-scheme"}},[this._v("Scheme")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("details",[t("summary",[t("b",[this._v("3. Do you have an example of a WebSocket data transport?")])]),t("p"),t("p",[this._v("We don’t have an example of such integration, but we still hope to make this example in the future.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",[t("b",[this._v("4. Do you have an example of a back-end data feed on ASP.NET, Python, PHP etc. ?")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("details",[a("summary",[a("b",[e._v("5. How can I display my data stored in a TXT/CSV/Excel file?")])]),a("p"),a("p",[e._v("First of all, the Charting Library is not intended to display data from files. It is used to display bars data from a server. Secondly, you should keep in mind that according to the agreement you should use Charting Library on public websites only. If you still want to use a file as the source of data you will need to do the following steps:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Write an application using any server language (.NET, PHP, NodeJS, Python etc.). This application should read the file and provide the data from it in "),a("a",{attrs:{href:"UDF"}},[e._v("UDF")]),e._v(" format over HTTP(S).")]),e._v(" "),a("p",[e._v("Note: You can provide data in another format or use a websocket to transfer it, but in this case you will need to implement a "),a("a",{attrs:{href:"JS-Api"}},[e._v("JS-Api")]),e._v(" adapter on a client.")])]),e._v(" "),a("li",[a("p",[e._v("You should either have a static IP or register a domain so a browser can send requests to your server.")])]),e._v(" "),a("li",[a("p",[e._v("Open "),a("code",[e._v("index.html")]),e._v(" and replace "),a("code",[e._v("demo_feed.tradingview.com")]),e._v(" with the URL to your server.")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("details",[a("summary",[a("b",[e._v("6. Why my data is not displayed / displayed incorrectly / incorrectly fetched from a server?")])]),a("p"),a("p",[e._v("The first thing you should do is open "),a("code",[e._v("index.html")]),e._v(" or your script where you create the library widget and put the following line in the initialization options of the widget: "),a("code",[e._v("debug: true,")]),e._v(".\nOnce you have done that, you will see lots of helpful information in your browser console.\nMost of important actions that happen in the library are explained in the console.")]),e._v(" "),a("p",[e._v("Please read "),a("a",{attrs:{href:"Symbology"}},[e._v("Symbology")]),e._v(" thoroughly. Most of errors with data happen because of incorrect symbol settings.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("details",[a("summary",[a("b",[e._v("7. Charting Library is constantly asking for data. How to tell it that data is finished?")])]),a("p"),a("p",[e._v("Specifically for this purpose there is a flag that can be added to the responses from your server that tells the library that there is no more data on the server.\nIt is called "),a("code",[e._v("no_data")]),e._v(" for "),a("a",{attrs:{href:"UDF#bars"}},[e._v("UDF")]),e._v(" and "),a("code",[e._v("noData")]),e._v(" for "),a("a",{attrs:{href:"JS-Api#getbarssymbolinfo-resolution-from-to-onhistorycallback-onerrorcallback-firstdatarequest"}},[e._v("JS API")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("details",[a("summary",[a("b",[e._v("8. How to change the number of decimal places of prices on a chart?")])]),a("p"),a("p",[e._v("Please read "),a("a",{attrs:{href:"Symbology"}},[e._v("Symbology")]),e._v(" thoroughly. Number of decimal places is calculated based on "),a("code",[e._v("minmov")]),e._v(" and "),a("code",[e._v("pricescale")]),e._v(" values.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("details",[t("summary",[t("b",[this._v("9. What if I have a single price for each timestamp?")])]),t("p"),t("p",[this._v("You still can display your data if you have only one price for each timestamp, but obviously you will not be able to display the data as bars/candles. Since the library is intended to display different styles of data: candles, bars, histogram, you are supposed to provide Open, High, Low, Close and optional Volume for each timestamp. If you have only one price, you can pass "),t("code",[this._v("Open = High = Low = Close = price")]),this._v(". For better view of this data, you can change default chart style to “Line” (see GUI Questions).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"gui-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gui-questions","aria-hidden":"true"}},[this._v("#")]),this._v(" GUI Questions")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("details",[a("summary",[a("b",[e._v("1. How can I subscribe to chart events?")])]),a("p"),a("p",[e._v("We have a few ways to subscribe to the events:")]),e._v(" "),a("ol",[a("li",[e._v("Subscribing to general events that are related to a whole chart layout, not a specific chart.\n"),a("a",{attrs:{href:"Widget-Methods#subscribing-to-chart-events"}},[e._v("Open article")])]),e._v(" "),a("li",[e._v("Subscribing to events that are related to a single chart\n"),a("a",{attrs:{href:"Chart-Methods#subscribing-to-chart-events"}},[e._v("Open article")])])]),e._v(" "),a("p",[e._v("Check the result value of subscription methods.\nSome of them return a "),a("a",{attrs:{href:"Subscription"}},[e._v("Subscription")]),e._v(" object that has methods "),a("code",[e._v("subscribe")]),e._v("/"),a("code",[e._v("unsubscribe")]),e._v(". The others accept a callback function.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("details",[t("summary",[t("b",[this._v("2. How to change default bars style from Candles to another one?")])]),t("p"),t("p",[this._v("You need to use "),t("a",{attrs:{href:"Widget-Constructor#overrides"}},[this._v("overrides")]),this._v(" of the Widget Constructor. Add "),t("code",[this._v("mainSeriesProperties.style")]),this._v(" key. You can find allowed values in "),t("a",{attrs:{href:"Overrides"}},[this._v("this article")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("details",[a("summary",[a("b",[e._v("3. How can I change the list of resolutions (time intervals) on a chart / make them grayed?")])]),a("p",[a("ul",[a("li",[e._v("List of the resolutions displayed in a pop-up on a chart is defined by "),a("a",{attrs:{href:"JS-Api#supported_resolutions"}},[e._v("supported_resolutions")]),e._v(" from the data feed configuration.")]),e._v(" "),a("li",[e._v("Resolutions available for a certain instrument are defined by "),a("a",{attrs:{href:"Symbology#supported_resolutions"}},[e._v("supported_resolutions")]),e._v(" from the instrument/symbol information.")]),e._v(" "),a("li",[e._v("If you support intraday resolutions, you need to set "),a("a",{attrs:{href:"Symbology#has_intraday"}},[e._v("has_intraday")])]),e._v(" "),a("li",[e._v("Additionally, if you support seconds, you need to set "),a("a",{attrs:{href:"Symbology#has_seconds"}},[e._v("has_seconds")])]),e._v(" "),a("li",[e._v("If you support daily resolutions, you should set "),a("a",{attrs:{href:"Symbology#has_daily"}},[e._v("has_daily")])]),e._v(" "),a("li",[e._v("If you support weeks and months, you should set "),a("a",{attrs:{href:"Symbology#has_weekly_and_monthly"}},[e._v("has_weekly_and_monthly")])]),e._v(" "),a("li",[e._v("Additionally, you should set the resolutions, which are provided by your server for "),a("a",{attrs:{href:"Symbology#intraday_multipliers"}},[e._v("intraday resolutions")]),e._v(" and separately for "),a("a",{attrs:{href:"Symbology#seconds_multipliers"}},[e._v("seconds")]),e._v(".")]),e._v(" "),a("li",[e._v("If an instrument supports ("),a("code",[e._v("supported_resolutions")]),e._v(") more resolutions that can be provided by the server ("),a("code",[e._v("intraday_multipliers")]),e._v("), the other resolutions are constructed by the chart.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",[t("b",[this._v("4. How to hide a GUI Element (symbol, interval, button etc.)?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("There are base elements that cannot be hidden, but if you still want to get rid of them you can use "),t("a",{attrs:{href:"Widget-Constructor#custom_css_url"}},[this._v("CSS customization")]),this._v(". Please note that the names, classes and identifiers of DOM elements may be changed in future versions of the product without any notifications.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"other-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-questions","aria-hidden":"true"}},[this._v("#")]),this._v(" Other Questions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",[t("b",[this._v("1. What is the the difference between Widget, Charting Library and Trading Terminal?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("details",[t("summary",[t("b",[this._v("2. How do I add a custom indicator?")])]),t("p"),t("p",[this._v("At the moment there is only one way to add custom indicators. It is described in a "),t("a",{attrs:{href:"Creating-Custom-Studies"}},[this._v("dedicated article")]),this._v(".")])])}],!1,null,null,null);o.options.__file="Frequently-Asked-Questions.md";t.default=o.exports}}]);