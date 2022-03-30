class ScoreBoard extends AcGameObject {
    constructor(playground) {
        super();
        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.state = null;
        this.win_img = new Image();
        this.win_img.src = "https://app1873.acapp.acwing.com.cn/static/image/menu/newWin.png";
        this.lose_img = new Image();
        this.lose_img.src = "https://app1873.acapp.acwing.com.cn/static/image/menu/newLose.png";
    }

    start() {
    }

    win() {
        let outer = this;
        this.state = 'win';
        setTimeout(function() {
            outer.playground.hide();
            outer.playground.root.menu.show();
        }, 2000);
    }

    lose() {
        let outer = this;
        this.state = 'lose';
        setTimeout(function() {
            outer.playground.hide();
            outer.playground.root.menu.show();
        }, 2000);
    }

    late_update() {
        this.render();
    }

    render() {
        let len = this.playground.height / 2;
        if (this.state === 'win') {
            this.ctx.drawImage(this.win_img, this.playground.width / 2 - len / 2, this.playground.height / 2 - len / 2, len, len);
        }
        else if (this.state === 'lose') {
            this.ctx.drawImage(this.lose_img, this.playground.width / 2 - len / 2, this.playground.height / 2 - len / 2, len, len);
        }
    }
}
