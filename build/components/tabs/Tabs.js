'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Tabs {
  constructor(tabSection) {
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
    this.tabs.forEach((current, index) => {
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

  clickEventListener(event) {
    const tab = event.target;
    this.activateTab(tab);
    // this.reportFocusStatus(event);
  }

  // Handle keydown on tabs
  keydownEventListener(event) {
    // console.info('keydown event fired');
    const key = event.which;

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
  keyupEventListener(event) {
    // console.info('keyup event fired');
    const key = event.which;

    switch (key) {
      case this.keys.left:
      case this.keys.right:
        this.determineOrientation(event);
        break;
    }
    // this.reportFocusStatus(event);
  }

  focusEventHandler(event) {
    this.reportFocusStatus(event);
    // console.info('focus event fired');
    // const target = event.target;
    // setTimeout(this.checkTabFocus, this.delay, target);
  }

  // When a tablist's aria-orientation is set to vertical,
  // only up and down arrow should function.
  // In all other cases only left and right arrow function.
  determineOrientation(event) {
    console.info('determine orientation fired');
    const key = event.which;
    let vertical = this.orientation === 'vertical' || false;
    let proceed = false;

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

  activateTab(activeTab) {
    for (const tab of this.tabs) {
      const { id, 'aria-selected': ariaSelected, 'aria-controls': ariaControls } = tab.attributes;
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
    this.activatePanel(activeTab);
  }

  activatePanel(activeTab) {
    const ariaControls = activeTab.attributes['aria-controls'].value;
    for (const panel of this.panels) {

      const { id, 'aria-expanded': ariaExpanded } = panel.attributes;
      // ariaExpanded.value = (id.value === activeTab.attributes['aria-controls'].value);

      if (id.value === ariaControls) {
        ariaExpanded.value = true;
        panel.removeAttribute('hidden');
      } else {
        ariaExpanded.value = false;
        panel.setAttribute('hidden', 'hidden');
      }
    }
  }

  arrowPressController(event) {
    let pressed = event.which;
    let direction = this.direction[pressed];

    for (const tab of this.tabs) {
      tab.addEventListener('focus', this.focusEventHandler);
    }

    if (direction) {
      const target = event.target;
      const tablistLength = this.tablist.children.length;
      let index = target.index;
      // console.info(index);

      if (!Number.isNaN(index)) {
        const newTarget = this.tabs[(index + direction + tablistLength) % tablistLength];
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

  static getActiveElement() {
    return document.activeElement;
  }

  // Only activate tab on focus if it still has focus after the delay
  checkTabFocus(target) {
    const focused = Tabs.getActiveElement();
    if (target === focused) {
      this.activateTab(target, false);
    }
  }

  // TODO: Trap focus in active panel if focusable elements are present
  // debugging
  reportFocusStatus(event) {
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

}

exports.default = Tabs;