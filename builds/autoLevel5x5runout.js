module.exports = {
    extends: "builds/base.js",
    includes: [
        "builds/features/autoLevel.js",
        "builds/features/runout.js"
    ],
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-auto_level_5x5_runout-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-auto_level_5x5_runout-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5]
        ]
    }
};
