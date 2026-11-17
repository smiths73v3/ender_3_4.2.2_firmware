module.exports = {
    partial: true,
    configuration: {
        enable: [
            "FILAMENT_RUNOUT_SENSOR",
            "NOZZLE_PARK_FEATURE",
            ["EXTRUDE_MINTEMP", "230"],
        ],
        disable: [
        ]
    },
    configuration_adv: {
        enable: [
            "ADVANCED_PAUSE_FEATURE",
        ]
    }
};
