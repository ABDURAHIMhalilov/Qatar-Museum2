// var result = JSON.parse(localStorage.getItem('product'))
// var asd = [result]
// console.log(result);

// asd.map((item, key) => {
//     document.getElementById('getDataDiv').innerHTML+=`

//     <div class="section product_section clearfix" itemscope itemtype="http://schema.org/Product" key='${key}'>

//             <div class="five columns alpha">

//               <div class="flexslider product_gallery product_slider" id="product-8722925377-gallery">
//                 <ul class="slides">

//                   <li
//                     data-thumb="//shinkansen-ticket.com/cdn/shop/products/kansaiinternationalairport_KIX_001_grande.jpg?v=1485355415"
//                     data-title="Haruka Airport Express ticket: From Kyoto to Kansai International Airport">

//                     <a href="//shinkansen-ticket.com/cdn/shop/products/kansaiinternationalairport_KIX_001.jpg?v=1485355415"
//                       class="fancybox" rel="group" data-fancybox-group="8722925377"
//                       title="Haruka Airport Express ticket: From Kyoto to Kansai International Airport">
//                       <img src="//shinkansen-ticket.com/cdn/shop/t/35/assets/loader.gif?v=38408244440897529091518402811"
//                         data-src="${item.img}"
//                         data-src-retina="${item.img}"
//                         alt="Haruka Airport Express ticket: From Kyoto to Kansai International Airport" data-index="0"
//                         data-image-id="20137558081"
//                         data-cloudzoom="zoomImage: '//shinkansen-ticket.com/cdn/shop/products/kansaiinternationalairport_KIX_001.jpg?v=1485355415', tintColor: '#ffffff', zoomPosition: 'inside', zoomOffsetX: 0, touchStartDelay: 250"
//                         class="cloudzoom featured_image" />
//                     </a>

//                   </li>

//                   <li
//                     data-thumb="${item.img}"
//                     data-title="Haruka Airport Express ticket: From Kyoto to Kansai International Airport">

//                     <a href="${item.img}"
//                       class="fancybox" rel="group" data-fancybox-group="8722925377"
//                       title="Haruka Airport Express ticket: From Kyoto to Kansai International Airport">
//                       <img src="//shinkansen-ticket.com/cdn/shop/t/35/assets/loader.gif?v=38408244440897529091518402811"
//                         data-src="${item.img}"
//                         data-src-retina="${item.img}"
//                         alt="Haruka Airport Express ticket: From Kyoto to Kansai International Airport" data-index="1"
//                         data-image-id="20137559937"
//                         data-cloudzoom="${item.img}', tintColor: '#ffffff', zoomPosition: 'inside', zoomOffsetX: 0, touchStartDelay: 250"
//                         class="cloudzoom " />
//                     </a>

//                   </li>

//                 </ul>
//               </div>
//             </div>

//             <div class="seven columns omega">

//               <h1 class="product_name" itemprop="name">${item.title}</h1>

//               <p class="modal_price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
//                 <meta itemprop="priceCurrency" content="JPY" />
//                 <meta itemprop="seller" content="Shinkansen-Ticket.com" />
//                 <meta itemprop="availability" content="in_stock" />
//                 <meta itemprop="itemCondition" content="New" />

//                 <span class="sold_out"></span>
//                 <span itemprop="price" content="4,320" class="">
//                   <span class="current_price ">

//                     <span class=money>&#165;${item.price}</span>

//                   </span>
//                 </span>
//                 <span class="was_price">

//                 </span>
//               </p>

//               <a href="#size-chart" class="lightbox size_chart">Seat Guide</a>

//               <form action="/cart/add" method="post" class="clearfix product_form"
//                 data-money-format="<span class=money>&#165;{{amount_no_decimals}}</span>" data-shop-currency="JPY"
//                 id="product-form-travelingdate-8722925377">

//                 <div class="select">
//                   <select id="product-select-8722925377product" name="id" class="multi_select">

//                     <option selected="selected" value="29820604161" data-sku="">Reserved / Adult (12 years old~)
//                     </option>

//                     <option value="29820604289" data-sku="">Reserved / Child (6~11 years old)</option>

//                     <option value="29820604353" data-sku="">Green Reserved / Adult (12 years old~)</option>

//                     <option value="29820604417" data-sku="">Green Reserved / Child (6~11 years old)</option>

//                     <option value="29820604481" data-sku="">Unreserved / Adult (12 years old~)</option>

//                     <option value="29820604545" data-sku="">Unreserved / Child (6~11 years old)</option>

//                   </select>
//                 </div>

//                 <div class="swatch_options">

//                   <div class="swatch clearfix" data-option-index="0">
//                     <div class="option_title">Seat</div>

//                     <input id="swatch-0-reserved-8722925377" type="radio" name="option-0" value="Reserved" checked />

//                     <div data-value="Reserved" class="swatch-element reserved available">

//                       <label for="swatch-0-reserved-8722925377">
//                         Reserved
//                         <img class="crossed-out"
//                           src="//shinkansen-ticket.com/cdn/shop/t/35/assets/soldout.png?v=169392025580765019841518402812" />
//                       </label>

//                     </div>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="0"] .reserved', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="0"] .reserved', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <input id="swatch-0-green-reserved-8722925377" type="radio" name="option-0"
//                       value="Green Reserved" />

//                     <div data-value="Green Reserved" class="swatch-element green-reserved available">

//                       <label for="swatch-0-green-reserved-8722925377">
//                         Green Reserved
//                         <img class="crossed-out"
//                           src="//shinkansen-ticket.com/cdn/shop/t/35/assets/soldout.png?v=169392025580765019841518402812" />
//                       </label>

//                     </div>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="0"] .green-reserved', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="0"] .green-reserved', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <input id="swatch-0-unreserved-8722925377" type="radio" name="option-0" value="Unreserved" />

//                     <div data-value="Unreserved" class="swatch-element unreserved available">

//                       <label for="swatch-0-unreserved-8722925377">
//                         Unreserved
//                         <img class="crossed-out"
//                           src="//shinkansen-ticket.com/cdn/shop/t/35/assets/soldout.png?v=169392025580765019841518402812" />
//                       </label>

//                     </div>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="0"] .unreserved', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="0"] .unreserved', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                   </div>

//                   <div class="swatch clearfix" data-option-index="1">
//                     <div class="option_title">Adult/Child</div>

//                     <input id="swatch-1-adult-12-years-old-8722925377" type="radio" name="option-1"
//                       value="Adult (12 years old~)" checked />

//                     <div data-value="Adult (12 years old~)" class="swatch-element adult-12-years-old available">

//                       <label for="swatch-1-adult-12-years-old-8722925377">
//                         Adult (12 years old~)
//                         <img class="crossed-out"
//                           src="//shinkansen-ticket.com/cdn/shop/t/35/assets/soldout.png?v=169392025580765019841518402812" />
//                       </label>

//                     </div>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="1"] .adult-12-years-old', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <input id="swatch-1-child-6-11-years-old-8722925377" type="radio" name="option-1"
//                       value="Child (6~11 years old)" />

//                     <div data-value="Child (6~11 years old)" class="swatch-element child-6-11-years-old available">

//                       <label for="swatch-1-child-6-11-years-old-8722925377">
//                         Child (6~11 years old)
//                         <img class="crossed-out"
//                           src="//shinkansen-ticket.com/cdn/shop/t/35/assets/soldout.png?v=169392025580765019841518402812" />
//                       </label>

//                     </div>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="1"] .child-6-11-years-old', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="1"] .adult-12-years-old', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="1"] .child-6-11-years-old', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="1"] .adult-12-years-old', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                     <script type="text/javascript">
//                       $('.swatch[data-option-index="1"] .child-6-11-years-old', '#product-form-8722925377').removeClass('soldout').addClass('available').find(':radio');
//                     </script>

//                   </div>

//                 </div>

//                 <h4>Departure date and time</h4>
//                 <label>Date</label>
//                 <p>Please click the date you would like to take the train.</p>

//                 <link href="//code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"
//                   media="all" />
//                 <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"
//                   defer="defer"></script>

//                 <div style="width:300px; clear:both;">
//                   <p>
//                     <input id="date" type="text" name="properties[Date]" value="" />

//                   </p>

//                 </div>
// <div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style="position: absolute; top: 479.594px; left: 1036.5px; z-index: 1; display: block;"><div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="Prev"><span class="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="Next"><span class="ui-icon ui-icon-circle-triangle-e">Next</span></a><div class="ui-datepicker-title"><span class="ui-datepicker-month">February</span>&nbsp;<span class="ui-datepicker-year">2024</span></div></div><table class="ui-datepicker-calendar"><thead><tr><th class="ui-datepicker-week-end"><span title="Sunday">Su</span></th><th><span title="Monday">Mo</span></th><th><span title="Tuesday">Tu</span></th><th><span title="Wednesday">We</span></th><th><span title="Thursday">Th</span></th><th><span title="Friday">Fr</span></th><th class="ui-datepicker-week-end"><span title="Saturday">Sa</span></th></tr></thead><tbody><tr><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-unselectable ui-state-disabled  ui-datepicker-today" title="Book Now"><span class="ui-state-default">1</span></td><td class=" ui-datepicker-unselectable ui-state-disabled " title="Book Now"><span class="ui-state-default">2</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " title="Book Now"><span class="ui-state-default">3</span></td></tr><tr><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled " title="Book Now"><span class="ui-state-default">4</span></td><td class=" ui-datepicker-unselectable ui-state-disabled " title="Book Now"><span class="ui-state-default">5</span></td><td class=" ui-datepicker-days-cell-over " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default ui-state-hover" href="#">6</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">7</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">8</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">9</a></td><td class=" ui-datepicker-week-end " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">10</a></td></tr><tr><td class=" ui-datepicker-week-end " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">11</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">12</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">13</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">14</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">15</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">16</a></td><td class=" ui-datepicker-week-end " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">17</a></td></tr><tr><td class=" ui-datepicker-week-end " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">18</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">19</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">20</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">21</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">22</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">23</a></td><td class=" ui-datepicker-week-end " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">24</a></td></tr><tr><td class=" ui-datepicker-week-end " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">25</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">26</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">27</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">28</a></td><td class=" " title="Book Now" data-handler="selectDay" data-event="click" data-month="1" data-year="2024"><a class="ui-state-default" href="#">29</a></td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td></tr></tbody></table></div>
//                 <script>
//                   window.onload = function () {
//                     if (window.jQuery) {
//                       let $ = window.jQuery;

//                       $(function () {
//                         $("#date").datepicker({
//                           minDate: +5,
//                           maxDate: '+6M',
//                           dateFormat: "yy/MM/dd",
//                           beforeShowDay: unavailable

//                         });
//                       });
//                     }
//                   }

//                   var unavailableDates = ["29-12-2023", "30-12-2023", "31-12-2023", "1-1-2024", "2-1-2024", "3-1-2024", "28-12-2024", "29-12-2024", "30-12-2024", "31-12-2024", "1-1-2025", "2-1-2025", "3-1-2025", "4-1-2025", "5-1-2025"];

//                   function unavailable(date) {
//                     dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
//                     if ($.inArray(dmy, unavailableDates) < 0) {
//                       return [true, "", "Book Now"];
//                     } else {
//                       return [false, "", "Sold out"];
//                     }
//                   }

//                 </script>

//                 <p style="display: inline-block; _display: inline;" class="line-item-property__field">
//                   <label>Time (hour)</label>
//                   <select required class="required" id="time-hour" name="properties[Time (hour)]">
//                     <option value="6">6</option>
//                     <option value="7">7</option>
//                     <option value="8">8</option>
//                     <option value="9">9</option>
//                     <option value="10">10</option>
//                     <option value="11">11</option>
//                     <option value="12">12</option>
//                     <option value="13">13</option>
//                     <option value="14">14</option>
//                     <option value="15">15</option>
//                     <option value="16">16</option>
//                     <option value="17">17</option>
//                     <option value="18">18</option>
//                     <option value="19">19</option>
//                     <option value="20">20</option>
//                     <option value="21">21</option>
//                     <option value="22">22</option>
//                   </select>
//                 </p>
//                 <div>We will arrange the train departs closest to your selected time. <br />If you have any specific
//                   train that you wish to take, please leave a message in the comment box shown during your checkout.
//                 </div>
//                 <br />

//                 <h4>Quantity</h4>

//                 <div class="left">
//                   <label for="quantity">Qty</label>
//                   <input type="number" min="1" size="2" class="quantity" name="quantity" id="quantity" value="1" />
//                 </div>

//                 <div class="purchase clearfix inline_purchase">

//                   <input type="hidden" name="return_to" value="back" />

//                   <button type="submit" name="add" class="action_button add_to_cart" data-label="Add to Cart"><span
//                       class="text">Add to Cart</span></button>
//                 </div>

//               </form>

//               <script type="text/javascript">
//                 // <![CDATA[
//                 $(function () {
//                   $product = $('.product-' + 8722925377);
//                   new Shopify.OptionSelectors("product-select-8722925377product", { product: { "id": 8722925377, "title": "Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport", "handle": "harukaexpressticket-kyoto-kansaiairport", "description": "\u003cmeta charset=\"utf-8\"\u003e\n\u003cp\u003e\u003cspan\u003eIf you are a group of more than two, your seats will be arranged together. We will inform you separately in case we cannot arrange seats together.\u003c\/span\u003e\u003c\/p\u003e\n\u003ch4\u003eTicket detail\u003c\/h4\u003e\n\u003cul\u003e\n\u003cli\u003e\u003cstrong\u003eHaruka Airport Express\u003c\/strong\u003e\u003c\/li\u003e\n\u003cli\u003eDeparture: \u003cstrong\u003eKyoto\u003c\/strong\u003e\n\u003c\/li\u003e\n\u003cli\u003eArrival: \u003cb\u003eKansai International Airport (KIX)\u003c\/b\u003e\n\u003c\/li\u003e\n\u003cli\u003eTime:  1 hour 18 minutes~ \u003c\/li\u003e\n\u003c\/ul\u003e\n\u003cmeta charset=\"utf-8\"\u003e\u003cmeta charset=\"utf-8\"\u003e\u003cmeta charset=\"utf-8\"\u003e\u003cmeta charset=\"utf-8\"\u003e\u003cmeta charset=\"utf-8\"\u003e\n\u003cp\u003e\u003cstrong\u003eSeat\u003c\/strong\u003e\u003c\/p\u003e\n\u003cul\u003e\n\u003cli\u003eUnreserved:\u003cbr\u003e     You can have an available seat at non-reserved seat cars only.\u003c\/li\u003e\n\u003cli\u003eReserved\u003cbr\u003e     You can have a reserved seat at reserved cars.\u003c\/li\u003e\n\u003cli\u003eGreen reserved\u003cbr\u003e     You can have a business class seat at Green cars.\u003c\/li\u003e\n\u003c\/ul\u003e\n\u003cul\u003e\u003c\/ul\u003e\n\u003cul\u003e\u003c\/ul\u003e\n\u003cul\u003e\u003c\/ul\u003e\n\u003cul\u003e\u003c\/ul\u003e\n\u003cp\u003e\u003cstrong\u003eTrain type \u003c\/strong\u003e\u003c\/p\u003e\n\u003cul\u003e\n\u003cli\u003eHaruka Airport Express\u003c\/li\u003e\n\u003c\/ul\u003e", "published_at": "2016-03-21T17:38:00+09:00", "created_at": "2017-01-25T23:38:29+09:00", "vendor": "JR West", "type": "Airport Express", "tags": ["meta-related-collection-airportexpress"], "price": 208000, "price_min": 208000, "price_max": 530000, "available": true, "price_varies": true, "compare_at_price": null, "compare_at_price_min": 0, "compare_at_price_max": 0, "compare_at_price_varies": false, "variants": [{ "id": 29820604161, "title": "Reserved \/ Adult (12 years old~)", "option1": "Reserved", "option2": "Adult (12 years old~)", "option3": null, "sku": "", "requires_shipping": true, "taxable": false, "featured_image": null, "available": true, "name": "Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport - Reserved \/ Adult (12 years old~)", "public_title": "Reserved \/ Adult (12 years old~)", "options": ["Reserved", "Adult (12 years old~)"], "price": 432000, "weight": 0, "compare_at_price": null, "inventory_quantity": -475, "inventory_management": null, "inventory_policy": "deny", "barcode": "", "requires_selling_plan": false, "selling_plan_allocations": [] }, { "id": 29820604289, "title": "Reserved \/ Child (6~11 years old)", "option1": "Reserved", "option2": "Child (6~11 years old)", "option3": null, "sku": "", "requires_shipping": false, "taxable": false, "featured_image": null, "available": true, "name": "Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport - Reserved \/ Child (6~11 years old)", "public_title": "Reserved \/ Child (6~11 years old)", "options": ["Reserved", "Child (6~11 years old)"], "price": 246000, "weight": 0, "compare_at_price": null, "inventory_quantity": -36, "inventory_management": null, "inventory_policy": "deny", "barcode": "", "requires_selling_plan": false, "selling_plan_allocations": [] }, { "id": 29820604353, "title": "Green Reserved \/ Adult (12 years old~)", "option1": "Green Reserved", "option2": "Adult (12 years old~)", "option3": null, "sku": "", "requires_shipping": true, "taxable": false, "featured_image": null, "available": true, "name": "Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport - Green Reserved \/ Adult (12 years old~)", "public_title": "Green Reserved \/ Adult (12 years old~)", "options": ["Green Reserved", "Adult (12 years old~)"], "price": 530000, "weight": 0, "compare_at_price": null, "inventory_quantity": -181, "inventory_management": null, "inventory_policy": "deny", "barcode": "", "requires_selling_plan": false, "selling_plan_allocations": [] }, { "id": 29820604417, "title": "Green Reserved \/ Child (6~11 years old)", "option1": "Green Reserved", "option2": "Child (6~11 years old)", "option3": null, "sku": "", "requires_shipping": false, "taxable": false, "featured_image": null, "available": true, "name": "Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport - Green Reserved \/ Child (6~11 years old)", "public_title": "Green Reserved \/ Child (6~11 years old)", "options": ["Green Reserved", "Child (6~11 years old)"], "price": 382000, "weight": 0, "compare_at_price": null, "inventory_quantity": -11, "inventory_management": null, "inventory_policy": "deny", "barcode": "", "requires_selling_plan": false, "selling_plan_allocations": [] }, { "id": 29820604481, "title": "Unreserved \/ Adult (12 years old~)", "option1": "Unreserved", "option2": "Adult (12 years old~)", "option3": null, "sku": "", "requires_shipping": true, "taxable": false, "featured_image": null, "available": true, "name": "Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport - Unreserved \/ Adult (12 years old~)", "public_title": "Unreserved \/ Adult (12 years old~)", "options": ["Unreserved", "Adult (12 years old~)"], "price": 357000, "weight": 0, "compare_at_price": null, "inventory_quantity": -40, "inventory_management": null, "inventory_policy": "deny", "barcode": "", "requires_selling_plan": false, "selling_plan_allocations": [] }, { "id": 29820604545, "title": "Unreserved \/ Child (6~11 years old)", "option1": "Unreserved", "option2": "Child (6~11 years old)", "option3": null, "sku": "", "requires_shipping": false, "taxable": false, "featured_image": null, "available": true, "name": "Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport - Unreserved \/ Child (6~11 years old)", "public_title": "Unreserved \/ Child (6~11 years old)", "options": ["Unreserved", "Child (6~11 years old)"], "price": 208000, "weight": 0, "compare_at_price": null, "inventory_quantity": 1, "inventory_management": null, "inventory_policy": "deny", "barcode": "", "requires_selling_plan": false, "selling_plan_allocations": [] }], "images": ["\/\/shinkansen-ticket.com\/cdn\/shop\/products\/kansaiinternationalairport_KIX_001.jpg?v=1485355415", "\/\/shinkansen-ticket.com\/cdn\/shop\/products\/airportline_haruka_001_11cc37de-dd70-4d35-b56c-06c797eb30d3.jpg?v=1485355423"], "featured_image": "\/\/shinkansen-ticket.com\/cdn\/shop\/products\/kansaiinternationalairport_KIX_001.jpg?v=1485355415", "options": ["Seat", "Adult\/Child"], "media": [{ "alt": "Haruka Airport Express ticket: From Kyoto to Kansai International Airport", "id": 138366222438, "position": 1, "preview_image": { "aspect_ratio": 1.0, "height": 240, "width": 240, "src": "\/\/shinkansen-ticket.com\/cdn\/shop\/products\/kansaiinternationalairport_KIX_001.jpg?v=1485355415" }, "aspect_ratio": 1.0, "height": 240, "media_type": "image", "src": "\/\/shinkansen-ticket.com\/cdn\/shop\/products\/kansaiinternationalairport_KIX_001.jpg?v=1485355415", "width": 240 }, { "alt": "Haruka Airport Express ticket: From Kyoto to Kansai International Airport", "id": 138366255206, "position": 2, "preview_image": { "aspect_ratio": 1.0, "height": 240, "width": 240, "src": "\/\/shinkansen-ticket.com\/cdn\/shop\/products\/airportline_haruka_001_11cc37de-dd70-4d35-b56c-06c797eb30d3.jpg?v=1485355423" }, "aspect_ratio": 1.0, "height": 240, "media_type": "image", "src": "\/\/shinkansen-ticket.com\/cdn\/shop\/products\/airportline_haruka_001_11cc37de-dd70-4d35-b56c-06c797eb30d3.jpg?v=1485355423", "width": 240 }], "requires_selling_plan": false, "selling_plan_groups": [], "content": "\u003cmeta charset=\"utf-8\"\u003e\n\u003cp\u003e\u003cspan\u003eIf you are a group of more than two, your seats will be arranged together. We will inform you separately in case we cannot arrange seats together.\u003c\/span\u003e\u003c\/p\u003e\n\u003ch4\u003eTicket detail\u003c\/h4\u003e\n\u003cul\u003e\n\u003cli\u003e\u003cstrong\u003eHaruka Airport Express\u003c\/strong\u003e\u003c\/li\u003e\n\u003cli\u003eDeparture: \u003cstrong\u003eKyoto\u003c\/strong\u003e\n\u003c\/li\u003e\n\u003cli\u003eArrival: \u003cb\u003eKansai International Airport (KIX)\u003c\/b\u003e\n\u003c\/li\u003e\n\u003cli\u003eTime:  1 hour 18 minutes~ \u003c\/li\u003e\n\u003c\/ul\u003e\n\u003cmeta charset=\"utf-8\"\u003e\u003cmeta charset=\"utf-8\"\u003e\u003cmeta charset=\"utf-8\"\u003e\u003cmeta charset=\"utf-8\"\u003e\u003cmeta charset=\"utf-8\"\u003e\n\u003cp\u003e\u003cstrong\u003eSeat\u003c\/strong\u003e\u003c\/p\u003e\n\u003cul\u003e\n\u003cli\u003eUnreserved:\u003cbr\u003e     You can have an available seat at non-reserved seat cars only.\u003c\/li\u003e\n\u003cli\u003eReserved\u003cbr\u003e     You can have a reserved seat at reserved cars.\u003c\/li\u003e\n\u003cli\u003eGreen reserved\u003cbr\u003e     You can have a business class seat at Green cars.\u003c\/li\u003e\n\u003c\/ul\u003e\n\u003cul\u003e\u003c\/ul\u003e\n\u003cul\u003e\u003c\/ul\u003e\n\u003cul\u003e\u003c\/ul\u003e\n\u003cul\u003e\u003c\/ul\u003e\n\u003cp\u003e\u003cstrong\u003eTrain type \u003c\/strong\u003e\u003c\/p\u003e\n\u003cul\u003e\n\u003cli\u003eHaruka Airport Express\u003c\/li\u003e\n\u003c\/ul\u003e" }, onVariantSelected: selectCallback, enableHistoryState: true });
//                 });
//       // ]]>
//               </script>

//               <script src="//shinkansen-ticket.com/cdn/shop/t/35/assets/constants.js?v=9050914190847475881533515044"
//                 type="text/javascript"></script>

//               <div class="description" itemprop="description">
//                 <meta charset="utf-8">
//                 <p><span>If you are a group of more than two, your seats will be arranged together. We will inform you
//                     separately in case we cannot arrange seats together.</span></p>
//                 <h4>Ticket detail</h4>
//                 <ul>
//                   <li><strong>Haruka Airport Express</strong></li>
//                   <li>Departure: <strong>Kyoto</strong>
//                   </li>
//                   <li>Arrival: <b>Kansai International Airport (KIX)</b>
//                   </li>
//                   <li>Time: 1 hour 18 minutes~ </li>
//                 </ul>
//                 <meta charset="utf-8">
//                 <meta charset="utf-8">
//                 <meta charset="utf-8">
//                 <meta charset="utf-8">
//                 <meta charset="utf-8">
//                 <p><strong>Seat</strong></p>
//                 <ul>
//                   <li>Unreserved:<br> You can have an available seat at non-reserved seat cars only.</li>
//                   <li>Reserved<br> You can have a reserved seat at reserved cars.</li>
//                   <li>Green reserved<br> You can have a business class seat at Green cars.</li>
//                 </ul>
//                 <ul></ul>
//                 <ul></ul>
//                 <ul></ul>
//                 <ul></ul>
//                 <p><strong>Train type </strong></p>
//                 <ul>
//                   <li>Haruka Airport Express</li>
//                 </ul>
//               </div>

//               <hr />

//               <div class="meta">

//                 <p>
//                   <span class="label">Collections:</span>
//                   <span>

//                     <a href="/collections/airportexpress-kansai" title="Airport Express: Kansai">Airport Express:
//                       Kansai</a>,

//                     <a href="/collections/from-kyoto" title="From Kyoto">From Kyoto</a>

//                   </span>
//                 </p>

//               </div>

//               <hr />

//               <span class="social_buttons">
//                 Share:

//                 <a href="https://twitter.com/intent/tweet?text=Check out Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport from @shopify: https://shinkansen-ticket.com/products/harukaexpressticket-kyoto-kansaiairport"
//                   target="_blank" class="icon-twitter" title="Share this on Twitter"></a>

//                 <a href="https://www.facebook.com/sharer/sharer.php?u=https://shinkansen-ticket.com/products/harukaexpressticket-kyoto-kansaiairport"
//                   target="_blank" class="icon-facebook" title="Share this on Facebook"></a>

//                 <a target="_blank" data-pin-do="skipLink" class="icon-pinterest" title="Share this on Pinterest"
//                   href="http://pinterest.com/pin/create/button/?url=https://shinkansen-ticket.com/products/harukaexpressticket-kyoto-kansaiairport&description=Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport&media=https://shinkansen-ticket.com/cdn/shop/products/kansaiinternationalairport_KIX_001_grande.jpg?v=1485355415"></a>

//                 <a target="_blank" class="icon-google-plus"
//                   title="Translation missing: en.layout.social_sharing.google_plus_title"
//                   href="https://plus.google.com/share?url=https://shinkansen-ticket.com/products/harukaexpressticket-kyoto-kansaiairport"></a>

//                 <a href="mailto:?subject=Thought you might like Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport&amp;body=Hey, I was browsing Shinkansen-Ticket.com and found Haruka Airport Express Train Ticket Online Booking : Kyoto to Kansai International Airport. I wanted to share it with you.%0D%0A%0D%0Ahttps://shinkansen-ticket.com/products/harukaexpressticket-kyoto-kansaiairport"
//                   target="_blank" class="icon-mail" title="Email this to a friend"></a>
//               </span>

//             </div>

//           </div>`
// })

var getData = new Date();
var getFullYear = getData.getFullYear();
var getMonth = getData.getMonth();
var getDay = getData.getDay();
var getAllData = [];
var getRealMonth = "";

if (getMonth === 0) {
  getRealMonth = "January";
} else if (getMonth === 1) {
  getRealMonth = "February";
} else if (getMonth === 2) {
  getRealMonth = "March";
} else if (getMonth === 3) {
  getRealMonth = "April";
} else if (getMonth === 4) {
  getRealMonth = "May";
} else if (getMonth === 5) {
  getRealMonth = "June";
} else if (getMonth === 6) {
  getRealMonth = "July";
} else if (getMonth === 7) {
  getRealMonth = "August";
} else if (getMonth === 8) {
  getRealMonth = "September";
} else if (getMonth === 9) {
  getRealMonth = "October";
} else {
  getRealMonth = "December";
}
var fullData = getFullYear + "/" + getRealMonth + "/" + getDay;
var dataa = [];
var result = JSON.parse(localStorage.getItem("product"));
var asd = result;
var prices = JSON.parse(localStorage.getItem('product'))
var fllPrices = prices[0].price
var fllPrices2 = prices[0]

function postAllElement(key) {
  if (key === 1) {
    variants = "Reserved";
  document.getElementById("getPriceData").innerHTML = "¥" + fllPrices + "JPY";
  } else if (key === 2) {
    variants = "Green Reserved";
  document.getElementById("getPriceData").innerHTML = "¥" + fllPrices2.price2 + "JPY";
  } else {
    variants = "Unreserved";
  document.getElementById("getPriceData").innerHTML = "¥" + fllPrices2.price3 + "JPY";
  }
}
asd.map((item, key) => {
  document.getElementById("getPriceData").innerHTML = "¥" + fllPrices + "JPY";
  document.getElementById("getDataImg").innerHTML += `
    <ul class="slides">

    <li
      data-thumb="${item.img}"
      data-title="${item.title}">

      <a href="${item.img}"
        class="fancybox" rel="group" data-fancybox-group="8722925377"
        title="Haruka Airport Express ticket: From Kyoto to Kansai International Airport">
        <img src="//shinkansen-ticket.com/cdn/shop/t/35/assets/loader.gif?v=38408244440897529091518402811"
          data-src="${item.img}"
          data-src-retina="${item.img}"
          alt="Haruka Airport Express ticket: From Kyoto to Kansai International Airport" data-index="0"
          data-image-id="20137558081"
          data-cloudzoom="zoomImage: '${item.img}', tintColor: '#ffffff', zoomPosition: 'inside', zoomOffsetX: 0, touchStartDelay: 250"
          class="cloudzoom featured_image" />
      </a>

    </li>

  </ul>
    `;
  document.getElementById("getProductName").innerHTML = item.title;
  // document.getElementById("getPriceData").innerHTML = "¥" + fllPrices + "JPY";
});

var variants = "Reserved";
var variants2 = "Adult (12 years old~)";
var selectedData = fullData;
var selecteddTime = "";
var selectQuanty = "";
var prices = JSON.parse(localStorage.getItem('product'))
// console.log(prices[0].price, 'sdasd');


function postAllElement2(key) {
  if (key === 1) {
    variants2 = "Adult (12 years old~)";
  } else {
    variants2 = "Child (6~11 years old)";
  }
}

function selectData() {
  var selectt = document.querySelector("#date").value;
  selectedData = selectt;
}

function selectedTime() {
  var selectTime = document.querySelector("#time-hour").value;
  selecteddTime = selectTime;
}

function selectedQty() {
  var selectedQtys = document.querySelector("#quantity").value;
  selectQuanty = selectedQtys;
}

// function openWindow() {

//   // var gettData = localStorage.getItem('AllData')
//   // var asdas = []

//   // if (gettData) {
//   //   asdas.push({
//   //     'variants':variants,
//   //     'variants':variants2,
//   //     'selectedData':selectedData,
//   //     'selecteddTime':selecteddTime,
//   //     'selectQuanty':selectQuanty,
//   //   },gettData)
//   //   console.log(asdas,'ok');
//   // } else {
//   //   console.log('null');
//   // }
//   // localStorage.setItem('AllData',asdas)

//   var saqlanganMalumotlar = localStorage.getItem('AllData');

//   if (saqlanganMalumotlar) {
//       saqlanganMalumotlar = JSON.parse(saqlanganMalumotlar);
//       // Qo'shilishi kerak bo'lgan hozirgi malumotlar bilan birgalikda saqlash
//       var hozirgiMalumotlar = {
//           // Hozirgi malumotlar

//       'variants':variants,
//       'variants':variants2,
//       'selectedData':selectedData,
//       'selecteddTime':selecteddTime,
//       'selectQuanty':selectQuanty,
//       };

//       // Hozirgi malumotlarni olib olgan malumotlarga qo'shib qo'yamiz
//       // localStorage.setItem('AllData',null);
//       var yangiMalumotlar = Object.assign([{saqlanganMalumotlar}, {hozirgiMalumotlar}]);

//       // Yangi malumotlarni JSON korinishiga o'tkazamiz va LocalStorage-ga saqlaymiz
//       localStorage.setItem('AllData', JSON.stringify(yangiMalumotlar));
//   } else {
//       // Agar LocalStorage-da avvalroq malumotlar yo'q bo'lsa, faqat hozirgi malumotlarni saqlab qo'yamiz
//       var hozirgiMalumotlar = {
//           // Hozirgi malumotlar

//       'variants':variants,
//       'variants':variants2,
//       'selectedData':selectedData,
//       'selecteddTime':selecteddTime,
//       'selectQuanty':selectQuanty,
//       };

//       // Hozirgi malumotlarni JSON korinishiga o'tkazamiz va LocalStorage-ga saqlaymiz
//       localStorage.setItem('AllData', JSON.stringify(hozirgiMalumotlar));
//   }
//   window.location = './Cart.html'

// }
function openWindow() {
  var saqlanganMalumotlar = localStorage.getItem("AllData");
  var saqlangan = JSON.parse(localStorage.getItem("product"));

  // Yangi malumotlar obyekti
  var malumotlar = [];
  if (saqlanganMalumotlar) {
    malumotlar = JSON.parse(saqlanganMalumotlar);
  } else {
    malumotlar = [];
  }
  var qonday = {
    variants: variants,
    variants2: variants2,
    selectedData: selectedData,
    selecteddTime: selecteddTime,
    selectQuanty: selectQuanty,
    img: saqlangan[0].img,
    price: prices,
    title: saqlangan[0].title,
    type: saqlangan[0].type,
  };
  // Yangi malumotlarni qo'shib qo'yamiz
  // malumotlar.;
  // malumotlar.;
  // malumotlar.;
  // malumotlar.;
  // malumotlar.;
  malumotlar.push(qonday);
  // Malumotlarni LocalStorage-ga saqlaymiz
  localStorage.setItem("AllData", JSON.stringify(malumotlar));

  // Narigi sahifaga o'tish
  window.location = "./Cart.html";
}

function onLoadFuncCart() {
  var asd = JSON.parse(localStorage.getItem("AllData"));
  asd.map(item => {
    document.querySelector('.big_maps').innerHTML+= `<div class="hedr">
    <img class='heder_img' src="${item.img}" alt="">
    <div class="heder_text">
      <p>${item.title} - ${item.variants} / ${item.variants2}</p>
      <p>Time (hour): ${item.selecteddTime}</p>
      <p>¥${item.price} JPY</p>
      <div>
      <h3>Quantity:</h3>
      <input type="text" placeholder="1" value='${item.selectQuanty}'>
    </div>
      <p class="hed">Remove</p>
    </div>
  </div>`
  })
}


if (localStorage.getItem("product").length > 0) {
  document.querySelector("#cart_Number").innerHTML = `
  <div class="cart_count">${JSON.parse(
    localStorage.getItem("product")
  ).length}</div> <span>Cart</span>
  `
} else {
  document.querySelector("#cart_count").innerHTML = "";
  console.log("yoq");
}
