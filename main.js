/**
 * Multisimulation Sandbox
 * 
 */

 var multisimulation = require("multisimulation.js")

 // Using stateful behaviour to simulate 
 Sandbox.define('/hq/auto/loans/v3.8/multisimulation/{checksum}', 'GET',  multisimulation.getMultisimulationHandler);
 Sandbox.define('/hq/auto/loans/v3.8/multisimulation',            'POST', multisimulation.createMultisimulationHandler);
 Sandbox.define('/hq/auto/loans/ES/v3.8/multisimulation',         'POST', multisimulation.createESHandler);
 Sandbox.define('/hq/auto/loans/DE/v3.8/multisimulation',         'POST', multisimulation.createDEHandler);
