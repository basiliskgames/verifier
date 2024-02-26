import forge from "node-forge";

const base_games_strips = {
    "R1":["N5","N1","H2","N5","N3","W","N2","N1","H1","N4","N3","H3","N4","N1","N2","H4","N4","N5","H3","N4","N2","H1","N3","N1","H3","N3","N4","H3","N2","N1","H3","N3","N1","H4","N2","F","N1","N4","H2","N1","N3","N2","H3","N5","N3","N2","H4","N3","N1","N2"],
    "R2":["H4","N2","N3","N1","H3","N2","N5","N4","H4","N5","N4","N3","H1","N2","N5","H2","N4","N1","N3","W","N4","N3","N2","H4","N1","N5","N2","H4","N3","N4","F","N1","N5","H4","N4","N2","H1","N4","N5","N2","N4","H2","N5","N2","F","N5","H4","N2","N3","N1","H3","N2","N5","N4","H4","N5","N4","N3","H1","N2","N5","H2","N4","N1","N3","W","N4","N3","N2","H4","N1","N5","N2","H4","N3","N4","F","N1","N5","H4","N4","N2","H1","N4","N5","N2","N4","H2","N5","N2","N1"],
    "R3":["N1","H1","N5","N4","H3","N5","N1","W","N3","N1","N4","N3","H3","N4","N3","H4","N5","H1","N1","N5","H4","N3","N2","N5","N3","W","N2","N4","H2","N5","N1","H3","N4","N3","H3","N4","N5","N1","H3","N5","N2","F","N5","H4","N4","N3"],
    "R4":["N2","N3","W","N4","N5","H4","N1","N3","H4","N5","N2","H4","N1","N2","H3","N5","N3","W","N2","N4","H3","N3","N4","H4","N1","H3","N5","N3","H1","N5","H2","N1","N5","H4","N1","F","N3","H2","N4","N3","N1","H4","N4","F","N2","H1","N1","N2","N3","H3","N2"],
    "R5":["H3","N3","N5","H2","N3","N4","H1","N1","N3","H3","N1","W","N4","H4","N2","N5","H2","N4","N3","H2","N4","N3","H3","N2","N1","W","N3","N5","N1","H3","N4","N2","H1","N5","N1","F","N3","N5","H4","N3","N2","H4","N3","N1","H2","N3","N4"]
};

const free_games_strips = {
    'SET1':{
        "R1":["N1","N3","H4","N5","F","N3","N2","H4","N1","N3","N2","H3","N5","N1","N2","H2","N1","N2","H3","N1","N3","H1","N4","N2","H1","N3","N4","H4","N3","N1","H4","N3","N1","H2","N4","N2","H3","N1","N2","N4","H3","N5","N1","N2","N3","W","N5","N2","N4","H3"],
        "R2":["N5","H3","N3","N4","N5","N2","W","N3","N4","H2","N2","N3","H1","N5","N4","H4","N1","N3","H2","N4","N5","H4","N3","F","N1","N4","H4","N1","N3","H1","N5","N4","H4","N5","N1","H2","N4","N2","N5","F","N3","N5","H4","N2","N3","N4"],
        "R3":["H1","N5","N4","F","N1","N5","W","N3","N2","H3","N5","N2","N4","N5","W","N2","N5","H2","N3","N5","N1","H3","N4","N5","H4","N2","N4","H2","N1","N3","H3","N2","N5","H4","N1","N3","N5","H3","N1","N4","H3","N1","N2","H1","N1","N4"],
        "R4":["N5","H4","N2","N4","H1","N1","N5","H4","N2","N5","H3","N4","N5","H1","N3","N2","H4","N1","N2","H2","N4","N2","H4","N3","N1","H3","N2","N4","H4","N5","N2","H2","N1","N5","N3","W","N2","F","N1","H3","N4","N3","W","N5","N4","H4","N1","F","N2","H3","N1"],
        "R5":["H3","N3","N5","H1","N2","N3","H4","N5","N2","H1","N4","N1","H2","N5","N3","H3","N4","N5","W","N2","N1","H2","N4","N2","H3","N3","N2","W","N4","N5","H4","N1","N2","H3","N1","N5","F","N2","N1","H2","N2","H3","N1","N4","H4","N5","N2"]
    },
    'SET2':{
        "R1":["N1","N3","F","N2","H4","N4","N1","N5","H1","N4","N2","N5","H2","N2","N3","W","N5","N2","N3","H2","N4","N3","N2","H3","N1","N4","H4","N3","N4","H1","N2","N3","H2","N1","N4","N5","H3","N3","N4","H4","N3","N2","H3","N4","N3","N2","H2","N5","N4","H3"],
        "R2":["N5","H3","N3","N4","H1","N2","N5","N4","H2","N3","N5","H4","N1","N4","H2","N3","N4","H4","N5","N1","N4","H2","N5","N4","H3","N3","N5","N2","H1","N4","N1","N2","F","N5","N3","W","N2","N4","N5","N3","N2","H3","N5","N1","F","N2"],
        "R3":["H1","N5","N4","N3","N1","H2","N3","N1","F","N3","H4","N1","N4","N2","N3","H1","N5","N1","N4","H2","N2","N1","H3","N4","N5","W","N2","N5","H1","N4","N1","H4","N3","N4","H3","N1","N5","W","N3","N2","H2","N5","N4","H3","N3","N4"],
        "R4":["N4","H1","N1","N3","H2","N5","F","N3","H3","N2","N3","H4","N1","N2","H2","N3","N5","H4","N4","N1","H2","N3","N2","H1","N5","F","N4","H4","N3","N4","W","N5","N4","H2","N1","N2","H4","N5","N4","H3","N1","N2","H2","N3","N1","H3","N5","N3","W","N2","N3"],
        "R5":["N3","N5","H2","N4","N1","H4","N4","N3","F","N1","N2","H1","N1","N3","H2","N4","N3","H1","N5","N3","H2","N4","N5","W","N2","N1","H4","N3","N4","H2","N2","H3","N4","N1","H1","N3","N2","W","N4","N5","H3","N3","N1","H4","N3","N1","H3"]
    }
};

const super_symbol_strip = ["H1", "H2", "H2", "H3", "H4", "H4", "N1", "N2", "N3", "N3", "N4", "N4", "N5", "N5"];

const super_symbol_use_strip = {"H1":"SET1","H2":"SET1","H3":"SET2","H4":"SET2","N1":"SET2","N2":"SET2","N3":"SET1","N4":"SET1","N5":"SET2"};

const min_combination_length = {"H1":2,"H2":2,"H3":2,"H4":2,"N1":3,"N2":3,"N3":3,"N4":3,"N5":3}

const reels_sizes = [3,4,3,4,3];

const getHash = (client_part, server_seed) => {

    let game_hash = forge.hmac.create();
    game_hash.start('sha256', server_seed);
    game_hash.update(client_part);
    game_hash = game_hash.digest().toHex();

    return game_hash;

};


export const calculateResult = (server_seed, client_seed, nonce, super_symbol) => {

    const game_field = [];

    let probability_table

    if (super_symbol !== null) {
        probability_table = free_games_strips[super_symbol_use_strip[super_symbol]];
    } else {
        probability_table = base_games_strips;
    }

    for (let reel_num = 1; reel_num <= reels_sizes.length; reel_num++) {

        const hash = getHash(`${client_seed}:${nonce}:${reel_num}`, server_seed)
        const reel_symbols = probability_table[`R${reel_num}`];
        let index = Math.floor((parseInt(hash.substr(0, 12), 16) / 0x1000000000000) * reel_symbols.length)
        const fallen_symbols = [reel_symbols[index]];

        for (let i = 0; i < reels_sizes[reel_num - 1] - 1; i++) {

            if (index >= reel_symbols.length-1) {
                index = 0;
            } else {
                index++;
            }

            fallen_symbols.push(reel_symbols[index])

        }

        game_field.push(fallen_symbols);

    }

    let scatters_count = 0;

    for (let reel = 0; reel < 5; reel++) {
        for (let cell = 0; cell < reels_sizes[reel]; cell++) {
            if (game_field[reel][cell] === "F") {
                scatters_count++;
                break;
            }
        }
    }

    let free_games_won = 0;

    if (scatters_count >= 3) {
        free_games_won = (scatters_count * 5) - 5;
    }

    let selected_super_symbol = null;

    if (!super_symbol && free_games_won > 0) {
        const hash = getHash(`${client_seed}:${nonce}:super`, server_seed)
        const index = Math.floor((parseInt(hash.substr(0, 12), 16) / 0x1000000000000) * super_symbol_strip.length)
        selected_super_symbol = super_symbol_strip[index];
    }

    const expanded_field = null;

    if (super_symbol) {

        let reels_with_super = [];

        for (let reel = 0; reel < 5; reel++) {
            for (let col = 0; col < reels_sizes[reel]; col++) {
                if (game_field[reel][col] === super_symbol) {
                    reels_with_super.push(reel);
                    break;
                }
            }
        }

        let expanded_field = [...game_field];

        if (reels_with_super.length >= min_combination_length[super_symbol]) {
            reels_with_super.forEach(reel => expanded_field[reel] = new Array(reels_sizes[reel]).fill(super_symbol))
        }

    }

    return { game_field, expanded_field, free_games_won, selected_super_symbol}

}