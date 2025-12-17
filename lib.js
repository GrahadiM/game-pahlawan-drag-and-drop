const assets = {
    "hero_soekarno": {
        "url": "assets/images/hero_soekarno.webp",
        "type": "image",
        "aspect_ratio": [950, 1018]
    },
    "hero_hatta": {
        "url": "assets/images/hero_hatta.webp",
        "type": "image",
        "aspect_ratio": [956, 1024]
    },
    "hero_cut_nyak_dien": {
        "url": "assets/images/hero_cut_nyak_dien.webp",
        "type": "image",
        "aspect_ratio": [862, 1021]
    },
    "hero_diponegoro": {
        "url": "assets/images/hero_diponegoro.webp",
        "type": "image",
        "aspect_ratio": [841, 1008]
    },
    "hero_kartini": {
        "url": "assets/images/hero_kartini.webp",
        "type": "image",
        "aspect_ratio": [806, 1019]
    },
    "hero_hasanuddin": {
        "url": "assets/images/hero_hasanuddin.webp",
        "type": "image",
        "aspect_ratio": [842, 1022]
    },
    "hero_imam_bonjol": {
        "url": "assets/images/hero_imam_bonjol.webp",
        "type": "image",
        "aspect_ratio": [874, 1016]
    },
    "hero_pattimura": {
        "url": "assets/images/hero_pattimura.webp",
        "type": "image",
        "aspect_ratio": [868, 1019]
    },
    "background_batik": {
        "url": "assets/images/background_batik.webp",
        "type": "image",
        "aspect_ratio": [1024, 1536]
    },
    "sfx_correct": {
        "url": "assets/sounds/sfx_correct.mp3",
        "type": "audio"
    },
    "sfx_wrong": {
        "url": "assets/sounds/sfx_wrong.mp3",
        "type": "audio"
    },
    "sfx_timeout": {
        "url": "assets/sounds/sfx_timeout.mp3",
        "type": "audio"
    },
    "sfx_button_click": {
        "url": "assets/sounds/sfx_button_click.mp3",
        "type": "audio"
    },
    "sfx_drag_pickup": {
        "url": "assets/sounds/sfx_drag_pickup.mp3",
        "type": "audio"
    },
    "sfx_drag_drop": {
        "url": "assets/sounds/sfx_drag_drop.mp3",
        "type": "audio"
    },
    "sfx_victory": {
        "url": "assets/sounds/sfx_victory.mp3",
        "type": "audio"
    },
    "sfx_game_over": {
        "url": "assets/sounds/sfx_game_over.mp3",
        "type": "audio"
    },
    "bgm_main": {
        "url": "assets/sounds/bgm_main.mp3",
        "type": "audio"
    }
};

window.lib = {
    getAsset(id) {
        return assets[id];
    },

    log(message) {
        console.log('[Game]:', message);
    },

    async getUserGameState() {
        try {
            const saved = localStorage.getItem('gameState');
            if (saved) {
                return JSON.parse(saved);
            }
            return { leaderboard: [] };
        } catch (err) {
            console.error('Error loading game state:', err);
            return { leaderboard: [] };
        }
    },

    async saveUserGameState(state) {
        try {
            localStorage.setItem('gameState', JSON.stringify(state));
            return { success: true };
        } catch (err) {
            console.error('Error saving game state:', err);
            return { success: false };
        }
    },

    async deleteUserGameState() {
        try {
            localStorage.removeItem('gameState');
            return { success: true };
        } catch (err) {
            console.error('Error deleting game state:', err);
            return { success: false };
        }
    }
};