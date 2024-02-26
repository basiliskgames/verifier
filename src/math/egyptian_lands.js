import {RNG} from './RNG'

class EgyptianLands {

    symbols_weight = {
        'base_game': [
            [2,3,3,3,1,1,1,1],
            [2,3,2,2,1,1,1,1],
            [2,3,3,3,1,1,1,1],
            [2,2,3,3,1,1,1,1],
            [2,2,3,3,1,1,1,1],
            [2,2,3,3,1,1,1,1],
            [2,2,3,3,1,1,1,1],
            [2,2,3,3,1,1,1,1]
        ],
        'free_game': [
            [1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1]
        ]
    };

    constructor(client_seed, server_seed, nonce) {
        this.RNG = new RNG(client_seed, server_seed, nonce);
        this.game_type = 'base_game';
        this.combo_hit = false;
    }

    spin(game_type) {
        this.game_type = game_type
        const game_fields = [];
        let wilds_count = 0

        let initial = true;
        do {
            const res = this.generateFrame();
            if (initial) {
                wilds_count = res.wilds_count;
                initial = false;
            }
            this.checkCluster();
            game_fields.push(res.game_field);
        } while (this.combo_hit)

        return {wilds_count, game_fields}
    }

    generateFrame() {

        let wilds_count = 0;

        if (!this.combo_hit) {

            this.frame = new Array(8).fill().map(() => new Array(8).fill("NU"))

            if (this.game_type === 'base_game') {

                this.frame_info = new Array(8).fill().map(() => new Array(8).fill(0))
                wilds_count = this.RNG.choose([0,1,2,3], [67,48,12,1]);

                for (let wild = 0; wild < wilds_count; wild++) {
                    let row = 0;
                    let col = 0;
                    do {
                        row = 1 + 5 * this.RNG.next(2);
                        col= 1 + 5 * this.RNG.next(2);
                    } while (this.frame_info[row][col] > 0);

                    this.frame_info[row][col] = 1;
                }
            }
        }

        for (let j = 0; j < 8; j++) {

            let row = 7;
            let item = ['H1', 'H2', 'H3', 'H4', 'N1', 'N2', 'N3', 'N4'];

            while (row >= 0) {
                if (this.frame[row][j] === 'NU') {
                    if (this.frame_info[row][j] > 0) {
                        this.frame[row][j] = 'W';
                    } else {
                        this.frame[row][j] = this.RNG.choose(item, this.symbols_weight[this.game_type][j]);
                    }
                }
                row--;
            }
        }

        return {
            wilds_count: wilds_count,
            game_field: this.prepareGameField(this.frame, this.frame_info)
        }
    }

    prepareGameField(frame, frame_info) {
        const game_field = new Array(8).fill().map(() => new Array(8).fill(null))
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                game_field[i][j] = {
                    symbol: frame[i][j],
                    mult: frame_info[i][j]
                };
            }
        }
        return game_field;
    }

    checkCluster() {

        this.combo_hit = false;
        const groups = {'H1':[], 'H2':[], 'H3':[], 'H4':[], 'N1':[], 'N2':[], 'N3':[], 'N4':[]};
        const win_position = new Array(8).fill().map(() => new Array(8).fill(0))
        let wilds = [];

        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                const symbol = this.frame[i][j]

                if (symbol === "W") {
                    wilds.push(i * 8 + j)
                    continue;
                }

                let cluster = []

                for (let k = groups[symbol].length - 1; k >= 0; k--) {
                    if ((i > 0 && groups[symbol][k].includes((i - 1) * 8 + j)) ||
                        (i < 7 && groups[symbol][k].includes((i + 1) * 8 + j)) ||
                        (j > 0 && groups[symbol][k].includes(i * 8 + j - 1)) ||
                        (j < 7 && groups[symbol][k].includes(i * 8 + j + 1))
                    ) {
                        cluster = cluster.concat(groups[symbol][k])
                        groups[symbol].splice(k, 1)
                    }
                }

                cluster.push(i * 8 + j)
                groups[symbol].push(cluster)
            }
        }

        wilds.forEach((wild) => {
            const i = parseInt(wild / 8)
            const j  = wild % 8
            for (const symbol of Object.keys(groups)) {
                let cluster = [];
                for (let k = groups[symbol].length - 1; k >= 0; k--) {
                    if ((i > 0 && groups[symbol][k].includes((i - 1) * 8 + j)) ||
                        (i < 7 && groups[symbol][k].includes((i + 1) * 8 + j)) ||
                        (j > 0 && groups[symbol][k].includes(i * 8 + j - 1)) ||
                        (j < 7 && groups[symbol][k].includes(i * 8 + j + 1))
                    ) {
                        cluster = cluster.concat(groups[symbol][k])
                        groups[symbol].splice(k, 1)
                    }
                }
                cluster.push(i * 8 + j)
                groups[symbol].push(cluster)
            }
        })

        for (const group of Object.values(groups)) {
            for (let k = 0; k < group.length; k++) {
                if (group[k].length > 4) {
                    this.combo_hit = true;
                    for (let l = 0; l < group[k].length; l++) {
                        win_position[parseInt(group[k][l] / 8)][group[k][l] % 8]++;
                    }
                }
            }
        }

        if (this.combo_hit) {
            for (let j = 0; j < 8; j++) {
                for (let i = 0; i < 8; i++) {
                    if (win_position[i][j] > 0) {
                        if (this.frame[i][j] === "W") {
                            this.frame_info[i][j]++
                        } else {
                            this.frame[i][j] = "NU"
                        }
                    }
                }
            }

            const done = []

            for (let j = 0; j < 8; j++) {
                for (let i = 0; i < 8; i++) {
                    if (this.frame[i][j] === "W" && win_position[i][j] > 0 && !done.includes(i * 8 + j)) {
                        const positions = []
                        if (i > 0 && this.frame[i - 1][j] === "NU") {
                            positions.push((i - 1) * 8 + j);
                        }
                        if (i < 7 && this.frame[i + 1][j] === "NU") {
                            positions.push((i + 1) * 8 + j);
                        }
                        if (j > 0 && this.frame[i][j - 1] === "NU") {
                            positions.push(i * 8 + j - 1);
                        }
                        if (j < 7 && this.frame[i][j + 1] === "NU") {
                            positions.push(i * 8 + j + 1);
                        }
                        if (positions.length > 0) {
                            const shift_position = positions[this.RNG.next(positions.length)];
                            this.frame[parseInt(shift_position / 8)][shift_position % 8] = "W";
                            this.frame_info[parseInt(shift_position / 8)][shift_position % 8] = this.frame_info[i][j];
                            this.frame[i][j] = "NU";
                            this.frame_info[i][j] = 0;
                            done.push(shift_position);
                        } else {
                            done.push(i * 8 + j)
                        }
                    }
                }
            }

            for (let j = 0; j < 8; j++) {
                for (let i = 7; i >= 0; i--) {
                    if (this.frame[i][j] === "NU") {
                        for (let ii = i - 1; ii >= 0; ii--) {
                            if (this.frame[ii][j] !== "NU" && this.frame[ii][j] !== "W") {
                                this.frame[i][j] = this.frame[ii][j];
                                this.frame[ii][j] = "NU";
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
}

export const calculateResult = (server_seed, client_seed, nonce) => {

    const steps = [];
    let free_games_won = 0;
    const math = new EgyptianLands(client_seed, server_seed, nonce)
    const base_result = math.spin('base_game');
    steps.push(base_result.game_fields);

    if (base_result.wilds_count > 2) {
        free_games_won = 6
        for (let i = 0; i < free_games_won; i++) {
            const free_result = math.spin('free_game')
            steps.push(free_result.game_fields)
        }
    }

    return {steps};
}