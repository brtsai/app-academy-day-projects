class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.bindEvents();
  }

  setupTowers() {
    for(let i = 0; i < 3; i++) {
      this.$el.append('<ul></ul>');
      for (let j = 0; j < 3; j++) {
        let whichChild, whichClass;
        if (i === 0) {
          whichChild = ':first';
          whichClass = `disk-${j+1}`;
        } else {
          whichChild = ':last';
          whichClass = '';
        }
        this.$el.children(whichChild).append(`<li class="${whichClass}"></li>`);
      }
    }
  }

  bindEvents() {
    $('ul').click(function() {

      

    });
  }
}

module.exports = HanoiView;
