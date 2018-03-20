class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    console.log($el);
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let game = this.game;
    let view = this;
    $('li').click(function () {
      if (!($(this).hasClass('x') || $(this).hasClass('o'))) {
        $(this).text(`${game.currentPlayer}`);
        $(this).addClass(game.currentPlayer);
        view.makeMove($(this));
        if (game.isOver()) {
          view.$el.after(`<h2>You win, ${game.winner()}!</h2>`);
          $(`.${game.winner()}`).css('background','green');
          $(`.${game.winner()}`).css('color','white');
          $('li').not(`.${game.winner()}`).css('color','red');
          $('li').not(`.${game.winner()}`).css('background','white');
          $('li').off('click');
        }
      } else {
        window.alert('Invalid move, try again!');
      }
    });
  }

  makeMove($square) {
    this.game.playMove([$square.attr('data-x'), $square.attr('data-y')]);
    $square.css('background-color', 'white');
  }

  setupBoard() {
    const tttBoard = this.$el.append('<ul></ul>').find('ul');
    for (let i = 0; i < 9; i++) {
      tttBoard.append(`<li data-x="${i%3}" data-y="${Math.floor(i/3)}"></li>`);
    }

  }
}

module.exports = View;
