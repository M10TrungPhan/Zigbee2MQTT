const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;
const definition = {
    zigbeeModel: ['HaColorControlLight'], // The model ID from: Device with modelID 'lumi.sens' is not supported.
    model: 'RD-0098-0401', // Vendor model number, look on the device for a model number
    vendor: 'SiliconLabs', // Vendor of the device (only used for documentation and startup logging)
    description: 'ZigBee lighting applications ', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    extend: extend.light_onoff_brightness(),
   	extend: extend.light_onoff_brightness_color()
    
    };

module.exports = definition;