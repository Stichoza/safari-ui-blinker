const SafariUiColors = {

  hasBlinker: function () {
    return !!$('.safari-ui-colors').length;
  },

  createBlinker: function () {
    let blinker = $('<div>Hello</div>').addClass('safari-ui-colors');

    $('body').append(blinker);

    return blinker;
  },

  getBlinker: function () {
    if (!this.hasBlinker()) {
      const blinker = this.createBlinker();
    }

    return $('.safari-ui-colors');
  },

  blink: function (colors, interval, time) {
    let i = 0;

    if (typeof safariUiColorsInterval !== 'undefined') {
      clearInterval(safariUiColorsInterval);
      clearTimeout(safariUiColorsTimeout);
    }

    window.safariUiColorsInterval = setInterval(() => {
      let color = colors[i++ % colors.length];

      this.getBlinker().css('background', color);
    }, interval);

    if (time) {
      window.safariUiColorsTimeout = setTimeout(() => {
        if (typeof safariUiColorsInterval !== 'undefined') {
          clearInterval(safariUiColorsInterval);
        }
        this.getBlinker().css('background', 'transparent');
      });
    }
  },

};

SafariUiColors.blink(['red', 'linear-gradient(to left, blue, yellow)', 'lime'], 1000, 5300);