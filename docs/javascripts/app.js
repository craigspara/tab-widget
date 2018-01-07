webpackJsonp([0],{

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(328);


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Tabs = __webpack_require__(329);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.getElementById('root');
var template = '<div><h1>Accessible Tabs</h1>\n        <h2>Tabs #1 - orientation missing</h2>\n\n        <section class="tabs">\n            <div role="tablist" data-delay="200">\n                <button type="button" role="tab"\n                    aria-selected="true"\n                    aria-controls="panel1"\n                    id="tab1"\n                    tabindex="0">\n                    Tab 1\n                </button>\n                <button type="button" role="tab"\n                    aria-selected="false"\n                    aria-controls="panel2"\n                    id="tab2"\n                    tabindex="-1">\n                    Tab 2\n                </button>\n                <button type="button" role="tab"\n                    aria-selected="false"\n                    aria-controls="panel3"\n                    id="tab3"\n                    tabindex="-1"\n                    data-deletable="">\n                    Tab 3\n                </button>\n            </div>\n            <div class="panel-wrapper">\n            <div tabindex="0"\n                role="tabpanel"\n                id="panel1"\n                aria-labelledby="tab1"\n                aria-expanded="true">\n                <p>\n                    <a href="#">Nils Frahm</a> is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.\n                </p>\n            </div>\n            <div tabindex="0"\n                role="tabpanel"\n                id="panel2"\n                aria-labelledby="tab2"\n                aria-expanded="false"\n                hidden="">\n                <p>\n                    Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.\n                </p>\n                <form action="#">\n                  <p>\n                    <label for="firstname">First name</label>\n                    <input type="text" id="firstname" />\n                  </p>\n                  <p>\n                    <label for="lastname">First name</label>\n                    <input type="text" id="lastname" />\n                  </p>\n                  \n                  <button tabindex="0">Send</button>\n                </form>\n            </div>\n            <div tabindex="0"\n                role="tabpanel"\n                id="panel3"\n                aria-labelledby="tab3"\n                aria-expanded="false"\n                hidden="">\n                <p>\n                    Fear of complicated buildings:\n                </p>\n                <p>\n                    A complex complex complex.\n                </p>\n            </div>\n            </div>\n        </section>\n        <div>\n            <p>Lorum ipsum <a href="#">link to somewhere</a>sit dolar</p>\n            <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.</p>\n            <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.</p>\n        </div>\n        <h2>Tabs #2 - orientation vertical</h2>\n\n        <section class="tabs">\n            <div role="tablist"\n                aria-orientation="vertical"\n                class="bottom-tabs">\n                <button role="tab"\n                    aria-selected="true"\n                    aria-controls="nils-tab2"\n                    id="nils2">\n                    Nils Frahm\n                </button>\n                <button role="tab"\n                    aria-selected="false"\n                    aria-controls="agnes-tab2"\n                    id="agnes2"\n                    tabindex="-1">\n                    Agnes Obel\n                </button>\n                <button role="tab"\n                    aria-selected="false"\n                    aria-controls="complexcomplex2"\n                    id="complex2"\n                    tabindex="-1"\n                    data-deletable="">\n                    Joke\n                </button>\n            </div>\n            <div class="panel-wrapper">\n            <div tabindex="0"\n                role="tabpanel"\n                id="nils-tab2"\n                aria-labelledby="nils2"\n                aria-expanded="true">\n                <p>\n                    <a href="#" tabindex="0">Nils Frahm</a> is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.\n                </p>\n            </div>\n            <div tabindex="0"\n                role="tabpanel"\n                id="agnes-tab2"\n                aria-labelledby="agnes2"\n                aria-expanded="false"\n                hidden="">\n                <p>\n                    Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.\n                </p>\n            </div>\n            <div tabindex="0"\n                role="tabpanel"\n                id="complexcomplex2"\n                aria-labelledby="complex2"\n                aria-expanded="false"\n                hidden="">\n                <p>\n                    Fear of complicated buildings:\n                </p>\n                <p>\n                    A complex complex complex.\n                </p>\n            </div>\n            </div>\n        </section>\n        <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by <a href="#">PIAS Recordings</a> on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the <a href="#">Belgian Entertainment Association (BEA)</a> for sales of 10,000 Copies.</p></div>'.trim();

root.innerHTML = template;

var init = function () {
    var tabSections = Array.from(document.querySelectorAll('section.tabs'));

    tabSections.forEach(function (tabSection) {
        return new _Tabs2.default(tabSection);
    });
}();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {
  function Tabs(tabSection) {
    _classCallCheck(this, Tabs);

    this.tabSection = tabSection;
    this.tablist = this.tabSection.querySelector('[role="tablist"]');
    this.tabs = tabSection.querySelectorAll('[role="tab"]');
    this.panels = this.tabSection.querySelectorAll('[role="tabpanel"]');
    this.orientation = this.tablist.getAttribute('aria-orientation') || 'horizontal';
    this.delay = Number.parseInt(this.tablist.getAttribute('data-delay'), 10) || 300;
    this.keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40
    };
    this.direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1
    };

    this.clickEventListener = this.clickEventListener.bind(this);
    this.keydownEventListener = this.keydownEventListener.bind(this);
    this.keyupEventListener = this.keyupEventListener.bind(this);
    this.focusEventHandler = this.focusEventHandler.bind(this);
    this.checkTabFocus = this.checkTabFocus.bind(this);

    // Bind event listeners to each tab
    this.tabs.forEach(function (current, index) {
      // current.addEventListener('click', this.clickEventListener);
      // current.addEventListener('keydown', this.keydownEventListener);
      // current.addEventListener('keyup', this.keyupEventListener);

      // Add an index property to each tab in the tablist
      current.index = index;
    });

    this.tablist.addEventListener('click', this.clickEventListener);
    this.tablist.addEventListener('keydown', this.keydownEventListener);
    this.tablist.addEventListener('keyup', this.keyupEventListener);
    this.tabSection.addEventListener('focus', this.focusEventHandler);
  }

  _createClass(Tabs, [{
    key: 'clickEventListener',
    value: function clickEventListener(event) {
      var tab = event.target;
      this.activateTab(tab);
      // this.reportFocusStatus(event);
    }
  }, {
    key: 'keydownEventListener',


    // Handle keydown on tabs
    value: function keydownEventListener(event) {
      // console.info('keydown event fired');
      var key = event.which;

      switch (key) {
        case this.keys.end:
          event.preventDefault();
          // Activate last tab
          this.activateTab(this.tabs[this.tabs.length - 1]);
          break;
        case this.keys.home:
          event.preventDefault();
          // Activate first tab
          this.activateTab(this.tabs[0]);
          break;

        // Up and down are in keydown
        // because we need to prevent page scroll >:)
        case this.keys.up:
        case this.keys.down:
          this.determineOrientation(event);
          break;
      }
    }

    // Handle keyup on tabs

  }, {
    key: 'keyupEventListener',
    value: function keyupEventListener(event) {
      // console.info('keyup event fired');
      var key = event.which;

      switch (key) {
        case this.keys.left:
        case this.keys.right:
          this.determineOrientation(event);
          break;
      }
      // this.reportFocusStatus(event);
    }
  }, {
    key: 'focusEventHandler',
    value: function focusEventHandler(event) {
      this.reportFocusStatus(event);
      // console.info('focus event fired');
      // const target = event.target;
      // setTimeout(this.checkTabFocus, this.delay, target);
    }
  }, {
    key: 'determineOrientation',


    // When a tablist's aria-orientation is set to vertical,
    // only up and down arrow should function.
    // In all other cases only left and right arrow function.
    value: function determineOrientation(event) {
      console.info('determine orientation fired');
      var key = event.which;
      var vertical = this.orientation === 'vertical' || false;
      var proceed = false;

      if (vertical) {
        if (key === this.keys.up || key === this.keys.down) {
          event.preventDefault();
          proceed = true;
        }
      } else {
        if (key === this.keys.left || key === this.keys.right) {
          proceed = true;
        }
      }

      if (proceed) {
        this.arrowPressController(event);
      }
    }
  }, {
    key: 'activateTab',
    value: function activateTab(activeTab) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tab = _step.value;
          var _tab$attributes = tab.attributes,
              id = _tab$attributes.id,
              ariaSelected = _tab$attributes['aria-selected'],
              ariaControls = _tab$attributes['aria-controls'];
          // ariaSelected.value = (activeTab === tab);

          if (activeTab === tab) {
            tab.focus();
            ariaSelected.value = true;
            // Remove tabindex attribute
            tab.removeAttribute('tabindex');
          } else {
            tab.blur();
            ariaSelected.value = false;
            tab.setAttribute('tabindex', '-1');
            // tab.removeEventListener('focus', this.focusEventHandler);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.activatePanel(activeTab);
    }
  }, {
    key: 'activatePanel',
    value: function activatePanel(activeTab) {
      var ariaControls = activeTab.attributes['aria-controls'].value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.panels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var panel = _step2.value;
          var _panel$attributes = panel.attributes,
              id = _panel$attributes.id,
              ariaExpanded = _panel$attributes['aria-expanded'];
          // ariaExpanded.value = (id.value === activeTab.attributes['aria-controls'].value);

          if (id.value === ariaControls) {
            ariaExpanded.value = true;
            panel.removeAttribute('hidden');
          } else {
            ariaExpanded.value = false;
            panel.setAttribute('hidden', 'hidden');
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'arrowPressController',
    value: function arrowPressController(event) {
      var pressed = event.which;
      var direction = this.direction[pressed];

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var tab = _step3.value;

          tab.addEventListener('focus', this.focusEventHandler);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (direction) {
        var target = event.target;
        var tablistLength = this.tablist.children.length;
        var index = target.index;
        // console.info(index);

        if (!Number.isNaN(index)) {
          var newTarget = this.tabs[(index + direction + tablistLength) % tablistLength];
          newTarget.focus();

          // console.dir(newTarget);
          setTimeout(this.checkTabFocus, this.delay, newTarget);
        }
      }
    }

    // Make a guess
    /*  focusFirstTab() {
        this.tabs[0].focus();
      };*/

    // Make a guess
    /*  focusLastTab() {
        this.tabs[this.tabs.length - 1].focus();
      };*/

  }, {
    key: 'checkTabFocus',


    // Only activate tab on focus if it still has focus after the delay
    value: function checkTabFocus(target) {
      var focused = Tabs.getActiveElement();
      if (target === focused) {
        this.activateTab(target, false);
      }
    }

    // TODO: Trap focus in active panel if focusable elements are present
    // debugging

  }, {
    key: 'reportFocusStatus',
    value: function reportFocusStatus(event) {
      // console.info(`activeElement: ${document.activeElement}`);
      console.dir(document.activeElement);
      /*if (event) {
        console.info(event);
      }
      for (const tab of this.tabs) {
        console.log(tab);
          console.info(`tab ${tab.id}: aria-selected: ${tab.getAttribute('aria-selected')}`);
      }
      console.info(`*********`);
       for (const panel of this.panels) {
        console.log(panel);
          console.info(`panel ${panel.id}: aria-expanded: ${panel.getAttribute('aria-expanded')}`);
      }
      console.info(`_________________`);*/
    }

    // debugging: Add to function to report focused tab and panel
    // this.reportFocusStatus();

  }], [{
    key: 'getActiveElement',
    value: function getActiveElement() {
      return document.activeElement;
    }
  }]);

  return Tabs;
}();

exports.default = Tabs;

/***/ })

},[327]);