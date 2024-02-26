import {RNG} from "./RNG"

class ShootingRange {

    Row = 5;
    Col = 6;

    strips = {
        base_game: [
            ["MY","MY","MY","MY","MY","N1","N4","H3","H2","H2","N4","N2","N3","H1","N1","H2","N4","N2","N1","H3","F","H2","H3","N1","N4","H3","H3","F","N4","N2","N2","N2","N4","N4","H2","N2","H3","N1","N4","N1","H3","N2","N2","N1","H2","H2","W","N4","N4","N4","N1","N1","N1","H2","H3","N2","H3","H4","H3","H3","H2","H2","H2","N1","N2"],
            ["MY","MY","MY","MY","MY","H4","H2","N2","H1","N2","H4","N3","N3","H1","H4","N2","H4","H3","H4","N3","N3","H3","N3","H1","H3","N2","N2","F","N2","H4","N1","H4","H1","H4","H3","W","N3","N3","N2","H1","H4","N2","N2","N2","H1","H1","H1","H1","H4","H1","H4","H1","N3","H3","F","H3","H3","N3","H3","H3","H3","N3","H3","N3","N4"],
            ["MY","MY","MY","MY","MY","N3","N1","N1","H1","N1","N3","H2","H4","W","H1","N1","H2","H2","F","H3","N3","H1","H4","H4","H2","N3","H2","F","N1","H2","H2","H4","H1","H1","H4","N1","N1","N1","H1","H2","H1","N3","N1","N3","H4","H1","H1","N3","H4","H2","H4","H2","N3","H1","H4","N1","N2","H2","H4","N3","N4","H4","H1","N3","N1"],
            ["MY","MY","MY","MY","MY","H3","N1","N1","H3","H2","N2","W","H3","H3","N1","N1","N2","N3","F","N4","N1","H2","H4","N2","N2","N1","N4","H3","H3","N2","N4","H3","H2","H2","N4","H2","H2","N4","N1","N2","H2","N1","H3","H3","N4","H3","N4","N4","N2","N1","H2","H2","N2","H2","N1","N4","N2","N4","N1","H2","H3","N4","N2","H1","N2"],
            ["MY","MY","MY","MY","MY","N3","N2","N3","N2","H4","N1","H4","N3","H2","H4","H3","H3","H3","H1","N2","N3","H3","H1","N3","N3","N4","H1","H3","H1","N3","H4","H1","N2","N2","H3","H4","N2","H1","H1","H1","N3","H4","H3","H3","F","N3","H4","N2","H4","H3","H1","H4","N2","H4","N2","N2","H4","N3","H3","N3","N2","W","H1","H1","H3"],
            ["MY","MY","MY","MY","MY","H1","H4","N1","H1","N1","N3","H2","H4","H4","N1","H4","H4","H2","H3","H4","N4","H1","H2","N2","H1","N3","N1","F","N3","N1","N1","N1","H2","H4","N3","N1","H1","H2","H2","H1","N1","H1","H1","N3","H2","N3","N3","H4","H2","N1","N3","H2","H4","H2","N3","N3","H1","H4","W","N1","H1","H2","N3","H1","H4"],
        ],
        free_game: [
            ["MY","MY","MY","MY","MY","N1","N4","H3","H2","H2","N4","N2","N3","H1","N1","H2","N4","N2","N1","H3","F","H2","H3","N1","N4","H3","H3","N2","N4","N2","N2","N2","N4","N4","H2","N2","H3","N1","N4","N1","H3","N2","N2","N1","H2","H2","W","N4","N4","N4","N1","N1","N1","H2","H3","N2","H3","H4","H3","H3","H2","H2","H2","N1","N2","N1","N4","H3","H2","H2","N4","N2","N3","H1","N1","H2","N4","N2","N1","H3","H2","H3","N1","N4","H3","H3","N2","N4","N2","N2","N2","N4","N4","H2","N2","H3","N1","N4","N1","H3","N2","N2","N1","H2","H2","N4","N4","N4","N1","N1","N1","H2","H3","N2","H3","H4","H3","H3","H2","H2","H2","N1","N2","N1","N4","H3","H2","H2","N4","N2","N3","H1","N1","H2","N4","N2","N1","H3","H2","H3","N1","N4","H3","H3","N2","N4","N2","N2","N2","N4","N4","H2","N2","H3","N1","N4","N1","H3","N2","N2","N1","H2","H2","N4","N4","N4","N1","N1","N1","H2","H3","N2","H3","H4","H3","H3","H2","H2","H2","N1","N2"],
            ["MY","MY","MY","MY","MY","H4","H2","N2","H1","N2","H4","N3","N3","H1","H4","N2","H4","H3","H4","N3","N3","H3","N3","H1","H3","N2","N2","N2","N2","H4","N1","H4","H1","H4","H3","W","N3","N3","N2","H1","H4","N2","N2","N2","H1","H1","H1","H1","H4","H1","H4","H1","N3","H3","F","H3","H3","N3","H3","H3","H3","N3","H3","N3","N4","H4","H2","N2","H1","N2","H4","N3","N3","H1","H4","N2","H4","H3","H4","N3","N3","H3","N3","H1","H3","N2","N2","N2","N2","H4","N1","H4","H1","H4","H3","N3","N3","N2","H1","H4","N2","N2","N2","H1","H1","H1","H1","H4","H1","H4","H1","N3","H3","H3","H3","N3","H3","H3","H3","N3","H3","N3","N4","H4","H2","N2","H1","N2","H4","N3","N3","H1","H4","N2","H4","H3","H4","N3","N3","H3","N3","H1","H3","N2","N2","N2","N2","H4","N1","H4","H1","H4","H3","N3","N3","N2","H1","H4","N2","N2","N2","H1","H1","H1","H1","H4","H1","H4","H1","N3","H3","H3","H3","N3","H3","H3","H3","N3","H3","N3","N4"],
            ["MY","MY","MY","MY","MY","N3","N1","N1","H1","N1","N3","H2","H4","W","H1","N1","H2","H2","F","H3","N3","H1","H4","H4","H2","N3","H2","N3","N1","H2","H2","H4","H1","H1","H4","N1","N1","N1","H1","H2","H1","N3","N1","N3","H4","H1","H1","N3","H4","H2","H4","H2","N3","H1","H4","N1","N2","H2","H4","N3","N4","H4","H1","N3","N1","N3","N1","N1","H1","N1","N3","H2","H4","H1","N1","H2","H2","H3","N3","H1","H4","H4","H2","N3","H2","N3","N1","H2","H2","H4","H1","H1","H4","N1","N1","N1","H1","H2","H1","N3","N1","N3","H4","H1","H1","N3","H4","H2","H4","H2","N3","H1","H4","N1","N2","H2","H4","N3","N4","H4","H1","N3","N1","N3","N1","N1","H1","N1","N3","H2","H4","H1","N1","H2","H2","H3","N3","H1","H4","H4","H2","N3","H2","N3","N1","H2","H2","H4","H1","H1","H4","N1","N1","N1","H1","H2","H1","N3","N1","N3","H4","H1","H1","N3","H4","H2","H4","H2","N3","H1","H4","N1","N2","H2","H4","N3","N4","H4","H1","N3","N1"],
            ["MY","MY","MY","MY","MY","H3","N1","N1","H3","H2","N2","W","H3","H3","N1","N1","N2","N3","F","N4","N1","H2","H4","N2","N2","N1","N4","H3","H3","N2","N4","H3","H2","H2","N4","H2","H2","N4","N1","N2","H2","N1","H3","H3","N4","H3","N4","N4","N2","N1","H2","H2","N2","H2","N1","N4","N2","N4","N1","H2","H3","N4","N2","H1","N2","H3","N1","N1","H3","H2","N2","H3","H3","N1","N1","N2","N3","N4","N1","H2","H4","N2","N2","N1","N4","H3","H3","N2","N4","H3","H2","H2","N4","H2","H2","N4","N1","N2","H2","N1","H3","H3","N4","H3","N4","N4","N2","N1","H2","H2","N2","H2","N1","N4","N2","N4","N1","H2","H3","N4","N2","H1","N2","H3","N1","N1","H3","H2","N2","H3","H3","N1","N1","N2","N3","N4","N1","H2","H4","N2","N2","N1","N4","H3","H3","N2","N4","H3","H2","H2","N4","H2","H2","N4","N1","N2","H2","N1","H3","H3","N4","H3","N4","N4","N2","N1","H2","H2","N2","H2","N1","N4","N2","N4","N1","H2","H3","N4","N2","H1","N2"],
            ["MY","MY","MY","MY","MY","N3","N2","N3","N2","H4","N1","H4","N3","H2","H4","H3","H3","H3","H1","N2","N3","H3","H1","N3","N3","N4","H1","H3","H1","N3","H4","H1","N2","N2","H3","H4","N2","H1","H1","H1","N3","H4","H3","H3","F","N3","H4","N2","H4","H3","H1","H4","N2","H4","N2","N2","H4","N3","H3","N3","N2","W","H1","H1","H3","N3","N2","N3","N2","H4","N1","H4","N3","H2","H4","H3","H3","H3","H1","N2","N3","H3","H1","N3","N3","N4","H1","H3","H1","N3","H4","H1","N2","N2","H3","H4","N2","H1","H1","H1","N3","H4","H3","H3","N3","H4","N2","H4","H3","H1","H4","N2","H4","N2","N2","H4","N3","H3","N3","N2","H1","H1","H3","N3","N2","N3","N2","H4","N1","H4","N3","H2","H4","H3","H3","H3","H1","N2","N3","H3","H1","N3","N3","N4","H1","H3","H1","N3","H4","H1","N2","N2","H3","H4","N2","H1","H1","H1","N3","H4","H3","H3","N3","H4","N2","H4","H3","H1","H4","N2","H4","N2","N2","H4","N3","H3","N3","N2","H1","H1","H3"],
            ["MY","MY","MY","MY","MY","H1","H4","N1","H1","N1","N3","H2","H4","H4","N1","H4","H4","H2","H3","H4","N4","H1","H2","N2","H1","N3","N1","F","N3","N1","N1","N1","H2","H4","N3","N1","H1","H2","H2","H1","N1","H1","H1","N3","H2","N3","N3","H4","H2","N1","N3","H2","H4","H2","N3","N3","H1","H4","W","N1","H1","H2","N3","H1","H4","H1","H4","N1","H1","N1","N3","H2","H4","H4","N1","H4","H4","H2","H3","H4","N4","H1","H2","N2","H1","N3","N1","N3","N1","N1","N1","H2","H4","N3","N1","H1","H2","H2","H1","N1","H1","H1","N3","H2","N3","N3","H4","H2","N1","N3","H2","H4","H2","N3","N3","H1","H4","N1","H1","H2","N3","H1","H4","H1","H4","N1","H1","N1","N3","H2","H4","H4","N1","H4","H4","H2","H3","H4","N4","H1","H2","N2","H1","N3","N1","N3","N1","N1","N1","H2","H4","N3","N1","H1","H2","H2","H1","N1","H1","H1","N3","H2","N3","N3","H4","H2","N1","N3","H2","H4","H2","N3","N3","H1","H4","N1","H1","H2","N3","H1","H4"]
        ]
    }

    calculateResult(server_seed, client_seed, nonce, frame_mask = null, extra_bet = 0) {

        if (extra_bet) {
            this.extra_bet = 1
        } else {
            this.extra_bet = 0
        }

        this.RNG = new RNG(client_seed, server_seed, nonce);
        this.frame_mask = {
            'base_game': [...frame_mask] ? frame_mask : new Array(this.Col).fill(-5),
            'free_game': new Array(this.Col).fill(-5)
        }
        this.positions = new Array(this.Col).fill(0)

        const base_result = this.spin('base_game')
        const game_fields = [base_result.game_field];

        const scatters_count = Object.keys(base_result.scatters).length;
        let initial_free_mult = scatters_count >= 5 ? 25 : (scatters_count === 4 ? 5 : 1);

        if (base_result.win_type === "free_game") {
            let nudge = false;

            do {
                const free_result = this.spin('free_game');
                nudge = free_result.nudge;
                game_fields.push(free_result.game_field);
            } while (nudge);
        }

        return {game_fields, initial_free_mult};
    }

    spin(game_type) {
        this.game_type = game_type;
        this.game_output = new GameOutput();

        this.generateFrame();
        this.chooseMystery();
        this.checkGolsShark();
        this.checkScatter();

        return {
            ...this.game_output,
            game_field: this.prepareGameField()
        };
    }

    generateFrame() {

        for (let j = 0; j < this.positions.length; j++) {

            if (this.frame_mask[this.game_type][j] > -5) {
                this.positions[j] = this.frame_mask[this.game_type][j];
            } else {
                this.positions[j] = this.RNG.next(this.strips[this.game_type][j].length);
            }

        }

        this.frame = new Array(this.Row).fill([]).map(() => new Array(this.Col).fill("NU"));

        for (let j = 0; j < this.Col; j++) {
            for (let i = 0; i < this.Row; i++) {
                this.frame[i][j] = this.strips[this.game_type][j][(this.positions[j] + i) % this.strips[this.game_type][j].length];
            }
        }

    }

    chooseMystery() {
        const items = ['H1', 'H2', 'H3', 'H4', 'N1', 'N2', 'N3', 'N4', 'GS', 'W'];
        const weights = {
            base_game: [ 3, 7, 16, 30, 60, 60, 60, 120, 1, 1 ],
            free_game: [ 3, 7, 16, 30, 60, 60, 60, 120, 15, 1 ],
        };
        const choosed_my = this.RNG.choose(items, weights[this.game_type]);

        for (let j = 0; j < this.Col; j++) {
            if (this.frame_mask[this.game_type][j] !== -5) {
                this.game_output.choosed_mystery = choosed_my;
                if (this.frame_mask[this.game_type][j] === this.strips[this.game_type][j].length - 4) {
                    this.frame_mask[this.game_type][j] = -5;
                } else {
                    if (this.frame_mask[this.game_type][j] === 0) {
                        this.frame_mask[this.game_type][j] = this.strips[this.game_type][j].length - 1;
                    } else {
                        this.frame_mask[this.game_type][j] = this.frame_mask[this.game_type][j] - 1;
                    }
                    this.game_output.nudge = true;
                }
            }

            for (let i = 0; i < this.Row; i++) {
                if (this.frame[i][j] === 'MY') {
                    this.game_output.choosed_mystery = choosed_my;
                    if (i < 4) {
                        if (this.positions[j] === 0) {
                            this.frame_mask[this.game_type][j] = this.strips[this.game_type][j].length - 1;
                        } else {
                            this.frame_mask[this.game_type][j] = this.positions[j] - 1;
                        }
                        this.game_output.nudge = true;
                    }
                }
            }
        }
    }

    checkGolsShark() {

        if (this.game_output.choosed_mystery !== "GS") {
            return
        }

        const items = [ 0, 1, 2, 5, 10, 25, 50, 100, 250, 500, 1000, 2500 ];
        const weights = [
            [1, 12000, 12000, 1293, 317, 67, 22, 7, 2, 1, 1, 1],
            [1, 2640, 2640, 1293, 317, 67, 22, 7, 2, 1, 1, 1 ],
        ];
        const sharks = {};

        for (let j = 0; j < this.Col; j++) {
            for (let i = 0; i < this.Row; i++) {
                if (this.frame[i][j] === 'MY') {

                    const choose = this.RNG.choose(items, weights[this.extra_bet]);
                    const shark = {
                        free_sbl: false,
                        mult: 0
                    }
                    if (choose > 0) {
                        shark.mult = choose;
                    } else {
                        shark.free_sbl = true;
                    }
                    sharks[`${i}|${j}`] = shark;
                }
            }
        }
        this.game_output.sharks = sharks;
    }

    checkScatter() {
        let num_of_kind = 0;
        const scatters = {};

        for (let j = 0; j < this.Col; j++) {
            for (let i = 0; i < this.Row; i++) {
                if (this.frame[i][j] === 'F' || (this.game_output.choosed_mystery === "GS" && this.frame[i][j] === "MY" && this.game_output.sharks[`${i}|${j}`].free_sbl)) {
                    num_of_kind++;
                    let mult = 0
                    if (this.game_type === 'base_game') {
                        mult = num_of_kind === 5 ? 20 : (num_of_kind === 4 ? 5 : 0);
                    }
                    scatters[`${i}|${j}`] = mult;
                }
            }
        }

        this.game_output.scatters = scatters;

        if (this.game_type === 'base_game') {
            if (num_of_kind > 2) {
                this.game_output.win_type = 'free_game';
                this.frame_mask['free_game'][1] = num_of_kind - 3;
                this.frame_mask['free_game'][4] = num_of_kind - 3;
            }
        } else {
            if (num_of_kind > 0) {
                for (let j = 0; j < this.Col; j++) {
                    if (this.positions[j] < 5 || this.positions[j] > this.strips['free_game'][j].length - 5) {
                        this.frame_mask['free_game'][j] = ((this.positions[j] - 1) + num_of_kind) % this.strips['free_game'][j].length;
                    }
                }
            }
        }
    }

    prepareGameField() {
        const game_field = new Array(this.Row).fill([]).map(()=>new Array(this.Col).fill(null));
        for (let j = 0; j < this.Col; j++) {
            for (let i = 0; i < this.Row; i++) {
                const is_mystery = this.frame[i][j] === 'MY';
                const is_GS = this.game_output.sharks[`${i}|${j}`] !== undefined;
                const is_F = this.game_output.scatters[`${i}|${j}`] !== undefined;
                const mult = is_F ? this.game_output.scatters[`${i}|${j}`] : (is_GS ? this.game_output.sharks[`${i}|${j}`].mult : 0)

                game_field[i][j] = {
                    is_mystery: is_mystery,
                    symbol: is_mystery ? this.game_output.choosed_mystery : this.frame[i][j],
                    is_F: is_F,
                    is_GS: is_GS,
                    mult: mult
                }
            }
        }
        return game_field;
    }
}

class GameOutput {
    choosed_mystery = null
    win_type = 'no_win'
    sharks = {};
    scatters = {};
}

export const calculateResult = (server_seed, client_seed, nonce, frame_mask, extra_bet) => {
    return new ShootingRange().calculateResult(server_seed, client_seed, nonce, [...frame_mask], extra_bet);
}