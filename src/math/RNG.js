import forge from "node-forge";

export class RNG {

    constructor(client_seed, server_seed, nonce) {
        this.client_seed = client_seed
        this.server_seed = server_seed
        this.nonce = nonce
        this.generation = 0
    }

    next(max_value) {

        this.generation++;
        let hash = forge.hmac.create();
        hash.start('sha256', this.server_seed);
        hash.update(`${this.client_seed}:${this.nonce}:${this.generation}`);
        hash = hash.digest().toHex();

        return Math.floor((parseInt(hash.substr(0, 12), 16) / 0x1000000000000) * max_value)

    }

    choose(items, weights) {

        const sum = weights.reduce((a, b) => a + b, 0);

        let random = this.next(sum) + 1

        for (let i = 0; i < weights.length; i++) {
            if (random <= weights[i]) {
                return items[i]
            } else {
                random -= weights[i];
            }
        }

        return items[items.length - 1];

    }

}