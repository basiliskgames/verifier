import {RNG} from "./RNG";

class Mafia {

    CELL = 4;
    REEL = 5;
    MAX_MULTIPLIER = 1024;

    STRIPS_TABLE = {
        BASE_GAME: {
            STRIPS: [
                ["S3","S4","LK","LA","LQ","S4","LT","LK","S5","S4","LT","LK","LJ","S4","LT","S2","LK","S1","LT"],
                ["S1","LA","S3","LK","LJ","LA","S3","S4","LJ","LA","S2","LT","LJ","S3","LA","S5","LJ","S3","LQ"],
                ["LQ","S3","S2","S5","LQ","LJ","S2","LQ","S5","LT","S2","LQ","S5","LA","S2","LK","S4","S5","S1"],
                ["S1","LA","S3","LK","LJ","LA","S3","S4","LJ","LA","S2","LT","LJ","S3","LA","S5","LJ","S3","LQ"],
                ["LQ","S3","S2","S5","LQ","LJ","S2","LQ","S5","LT","S2","LQ","S5","LA","S2","LK","S4","S5","S1"]
            ],
            WEIGHT: [
                [
                    [1]
                ],
                [
                    [0,0,0,1,0,0,1,0,0,1],
                    [0,0,1,0,0,1,0,0,1,0],
                    [0,1,0,0,1,0,0,1,0,0],
                    [0,0,1,0,0,1,0,0,1,0],
                    [0,1,0,0,1,0,0,1,0,0],
                ]
            ]
        },
        FREE_GAME1: {
            STRIPS: [
                ["S3","S4","LK","LA","LQ","S4","LT","LK","S5","S4","LT","LK","LJ","S4","LT","S2","LK","S1","LT"],
                ["S1","LA","S3","LK","LJ","LA","S3","S4","LJ","LA","S2","LT","LJ","S3","LA","S5","LJ","S3","LQ"],
                ["LQ","S3","S2","S5","LQ","LJ","S2","LQ","S5","LT","S2","LQ","S5","LA","S2","LK","S4","S5","S1"],
                ["S1","LA","S3","LK","LJ","LA","S3","S4","LJ","LA","S2","LT","LJ","S3","LA","S5","LJ","S3","LQ"],
                ["LQ","S3","S2","S5","LQ","LJ","S2","LQ","S5","LT","S2","LQ","S5","LA","S2","LK","S4","S5","S1"]
            ],
            WEIGHT: [
                [
                    [1]
                ],
                [
                    [0,0,0,1,0,0,1,0,0,1],
                    [0,0,1,0,0,1,0,0,1,0],
                    [0,1,0,0,1,0,0,1,0,0],
                    [0,0,1,0,0,1,0,0,1,0],
                    [0,1,0,0,1,0,0,1,0,0],
                ]

            ]
        },
        FREE_GAME2: {
            STRIPS: [
                ["LK","LT","S4","LK","S4","LT","S4","LK","S4","S4","LK","LT","LT","LT","LT","LK","S4","LK"],
                ["S3","LA","LJ","S3","LA","LA","LJ","LA","LJ","LJ","LJ","LJ","LA","S3","S3","S3","LA","S3"],
                ["S2","S5","LQ","S2","S2","LQ","S5","S2","S5","S5","LQ","S5","S2","S2","LQ","S5","LQ","LQ"],
                ["LJ","LJ","LJ","S3","LJ","S3","LA","S3","LA","LA","S3","S3","LJ","LA","LA","S3","LJ","LA"],
                ["S2","S5","S2","S2","LQ","LQ","LQ","S5","S5","S2","S2","LQ","LQ","S5","LQ","S2","S5","S5"]
            ],
            WEIGHT: [
                [
                    [1]
                ],
                [
                    [0,0,0,1,0,0,1,0,0,1],
                    [0,0,1,0,0,1,0,0,1,0],
                    [0,1,0,0,1,0,0,1,0,0],
                    [0,0,1,0,0,1,0,0,1,0],
                    [0,1,0,0,1,0,0,1,0,0],
                ]
            ]
        }
    }

    MULTIPLIER_JUMP = {
        variant: [2, 4, 8, 16],
        weight: [900, 90, 9, 1]
    };



    play(client_seed, server_seed, nonce, bet_mode) {

        this.frame = new Array(this.REEL).fill().map(() => new Array(this.CELL).fill("NU"));
        this.multiplier = 1;
        this.bet_mode = bet_mode;
        this.RNG = new RNG(client_seed, server_seed, nonce);
        this.game_state = 'BASE_GAME';

        const base_result = this.spin();

        const steps = [base_result];

        if (base_result.win_type === "FREE_GAME") {

            this.game_state = "FREE_GAME1";
            this.multiplier = 1;

            for (let i = 0; i < base_result.free_spins; i++) {
                const free_result = this.spin();
                steps.push(free_result);
            }

        }

        return steps;

    }

    spin() {

        this.game_output = {win_type: "NO_WIN"};
        this.combo = -1;

        const clusters = [];

        do {

            this.combo++;
            clusters.push(this.updateGameField());
            const win_lines = this.checkCombinations();

            if (this.combo_hit) {
                this.checkEliminate(win_lines);
                this.multiplier *= this.RNG.choose(this.MULTIPLIER_JUMP['variant'], this.MULTIPLIER_JUMP['weight']);
            }

        } while (this.combo_hit);

        this.checkScatter();
        this.game_output.clusters = clusters;

        return this.game_output;

    }

    updateGameField() {

        if (this.game_state === 'FREE_GAME1' && this.multiplier > this.MAX_MULTIPLIER) {
            this.game_state = 'FREE_GAME2';
        }

        if (this.combo === 0) {

            for (let reel = 0; reel < this.REEL; reel++) {

                const length = this.STRIPS_TABLE[this.game_state].STRIPS[reel].length;
                let pos = this.RNG.next(length);

                for (let cell = 0; cell < this.CELL; cell++) {
                    this.frame[reel][cell] = this.STRIPS_TABLE[this.game_state].STRIPS[reel][(pos + cell) % length];
                }

            }

            if (this.game_state === 'BASE_GAME') {

                const item = [0, 1, 2, 3, 4, 5];
                const weight = {
                    NORMAL: [432,100,20,1,1,2],
                    EXTRA: [199,100,20,1,1,2],
                    FEATURE_7: [0,0,0,1,0,0],
                    FEATURE_9: [0,0,0,0,1,0],
                    FEATURE_11: [0,0,0,0,0,1],
                    FEATURE_RAND: [0,0,0,1,1,2]
                };

                const choose = this.RNG.choose(item, weight[this.bet_mode]);

                for (let reel = 0; reel < choose; reel++) {
                    this.frame[reel][this.RNG.next(this.CELL)] = 'SC';
                }

            }

        } else {

            const item = ['S1', 'S2', 'S3', 'S4', 'S5', 'LA', 'LK', 'LQ', 'LJ', 'LT'];
            const count = this.STRIPS_TABLE[this.game_state].WEIGHT.length;

            const drop_strips = new Array(count - 1).fill(0);

            for (let cell = 1; cell < count; cell++) {
                drop_strips[cell - 1] = cell;
            }

            let choose;

            if (this.multiplier > this.MAX_MULTIPLIER) {
                choose = 1;
            } else {
                choose = this.RNG.choose(drop_strips, this.STRIPS_TABLE[this.game_state].WEIGHT[0][0]);
            }

            for (let reel = 0; reel < this.REEL; reel++) {
                for (let cell = 0; cell < this.CELL; cell++) {
                    if (this.frame[reel][cell] === 'NU') {
                        this.frame[reel][cell] = this.RNG.choose(item, this.STRIPS_TABLE[this.game_state].WEIGHT[choose][reel]);
                    }
                }
            }

        }

        return this.prepareField(this.frame);

    }

    checkCombinations() {

        this.combo_hit = false;

        let check_list = [];
        let wild_break = true;
        let cur_reel = 0;

        do {

            for (let cell = 0; cell < this.CELL; cell++) {

                const sbl = this.frame[cur_reel][cell];

                if (!check_list.includes(sbl) && sbl !== "SC" && sbl !== "WD") {
                    check_list.push(sbl);
                } else if (sbl === "WD") {
                    wild_break = false;
                }

            }

            cur_reel++;

        } while (!wild_break && cur_reel < this.REEL);

        const win_lines = [];

        check_list.forEach(symbol => {

            let num_of_kind = 0;
            const positions = [];

            for (let reel = 0; reel < this.REEL; reel++) {

                let count = 0;

                for (let cell = 0; cell < this.CELL; cell++) {
                    if (this.frame[reel][cell] === symbol || this.frame[reel][cell] === "WD") {
                        count++;
                        positions.push([reel, cell]);
                    }
                }

                if (count > 0) {
                    num_of_kind++;
                } else {
                    break;
                }

            }

            if (num_of_kind > 2) {
                win_lines.push(positions);
                this.game_output.win_type = "NORMAL_WIN";
                this.combo_hit = true;
            }

        });

        return win_lines;

    }

    checkEliminate(win_lines) {

        const win_positions = [];

        win_lines.forEach((win_lines) => {
            win_lines.forEach(pos => {
                this.frame[pos[0]][pos[1]] = "NU";
                if (!win_positions.some(w => w.toString() === pos.toString())) {
                    win_positions.push(pos);
                }
            })
        })

        const choose = this.RNG.next(win_positions.length);

        this.frame[win_positions[choose][0]][win_positions[choose][1]] = "WD";

        for (let reel = 0; reel < this.REEL; reel++) {
            for (let cell = this.CELL - 1; cell >= 0; cell--) {
                if (this.frame[reel][cell] === "NU") {
                    for (let shift = cell - 1; shift >= 0; shift--) {
                        if (this.frame[reel][shift] !== "NU") {
                            this.frame[reel][cell] = this.frame[reel][shift];
                            this.frame[reel][shift] = "NU";
                            break;
                        }
                    }
                }
            }
        }
    }

    checkScatter() {

        let num_of_kind = 0;

        for (let reel = 0; reel < this.REEL; reel++) {
            for (let cell = 0; cell < this.CELL; cell++) {
                if (this.frame[reel][cell] === "SC") {
                    num_of_kind++;
                }
            }
        }

        if (this.game_state === "BASE_GAME") {
            if (num_of_kind > 2) {
                this.game_output.win_type = "FREE_GAME";
                this.game_output.free_spins = 7 + (num_of_kind - 3) * 2;
            }
        }
    }

    prepareField(frame) {
        const game_field = new Array(this.REEL).fill().map(() => new Array(this.CELL).fill(null))
        for (let r = 0; r < this.REEL; r++) {
            for (let c = 0; c < this.CELL; c++) {
                game_field[r][c] = {
                    symbol: frame[r][c]
                };
            }
        }
        return game_field;
    }
}

export const calculateResult = (client_seed, server_seed, nonce, bet_mode) => {
    return new Mafia().play(client_seed, server_seed, nonce, bet_mode);
}