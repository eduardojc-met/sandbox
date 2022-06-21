exports.getMultisimulationHandler = function(req, res){
    
    var checksum = req.params.checksum;
    
    return res.json({
        "quotes": [{
            "simulationChecksum": checksum,
            "quoteId": 1,
            "productId": "xyz123",
            "retailPrice": 39766,
            "totalAmountFinanced": 25092,
            "amountOfCredit": 23990,
            "netAmount": 43019,
            "totalAmountPayable": 45987,
            "cost": {
                "total": 3498
            },
            "period": {
                "number": 48,
                "timeunit": "MO"
            },
            "downPayment": 10200,
            "interest": 1050,
            "currencyType": "EUR",
            "feeTypes": [{
                "typeOfFee": "CFF",
                "countryDescription": "Comision Apertura",
                "description": "Credit Facility Fee",
                "amount": 324.95,
                "serviceChargeRate": 0.0
            }],
            "interestRates": [{
                "typeInterestRate": "EffectiveInterest",
                "countryInterestRate": "TAE",
                "description": "Tasa anual equivalente",
                "value": "4.26"
            }],
            "auto": {
                "manufacturerDeposit": 0,
                "dealerDeposit": 0.0,
                "govermentGrant": 1500,
                "guaranteedFutureValue": 12760,
                "annualMileage": 15000,
                "excessMileageRate": "0.10",
                "brand": "AUTOGOOD",
                "model": "fantastic 1",
                "regNumber": "1234HTM",
                "VIN": "12345",
                "registrationDate": "2020-02-02",
                "mileage": 30000,
                "documentation": {
                    "SECCI": "https://www....",
                    "terms&Conditions": "lorem ipsum . . ."
                }
            },
            "paymentsSchedule": {
                "summaryPayments": [{
                    "typeInstalment": "recurrentPayment",
                    "numberOfTerms": 48,
                    "payment": 388,
                    "insuranceAmount": 0.0,
                    "feesPorcentage": 0.0,
                    "feesAmount": 0.0
                }]
            }
        }, {
            "simulationChecksum": "AjU2ZGrfsdNmFkOjA=",
            "quoteId": 2,
            "productId": "xyz123",
            "retailPrice": 39764,
            "totalAmountFinanced": 25090,
            "amountOfCredit": 23990,
            "netAmount": 43019,
            "totalAmountPayable": 45987,
            "cost": {
                "total": 3498
            },
            "period": {
                "number": 48,
                "timeunit": "MO"
            },
            "downPayment": 10200,
            "interest": 1050,
            "currencyType": "EUR",
            "feeTypes": [{
                "typeOfFee": "CFF",
                "countryDescription": "Comision Apertura",
                "description": "Credit Facility Fee",
                "amount": 324.95,
                "serviceChargeRate": 0.0
            }],
            "interestRates": [{
                "typeInterestRate": "EffectiveInterest",
                "countryInterestRate": "TAE",
                "description": "Tasa anual equivalente",
                "value": "4.26"
            }],
            "auto": {
                "manufacturerDeposit": 0,
                "dealerDeposit": 0.0,
                "govermentGrant": 1500,
                "guaranteedFutureValue": 12760,
                "annualMileage": 15000,
                "excessMileageRate": "0.10",
                "brand": "AUTOGOOD",
                "model": "fantastic 2",
                "regNumber": "1234HTM",
                "VIN": "12345",
                "registrationDate": "2020-02-02",
                "mileage": 30000,
                "documentation": {
                    "SECCI": "https://www....",
                    "terms&Conditions": "lorem ipsum . . ."
                }
            },
            "paymentsSchedule": {
                "summaryPayments": [{
                    "typeInstalment": "recurrentPayment",
                    "numberOfTerms": 48,
                    "payment": 388,
                    "insuranceAmount": 0.0,
                    "feesPorcentage": 0.0,
                    "feesAmount": 0.0
                }]
            }
        }, {
            "simulationChecksum": "EjU2ZGrfsdNmFkOjA=",
            "quoteId": 3,
            "productId": "xyz123",
            "retailPrice": 39767,
            "totalAmountFinanced": 25092,
            "amountOfCredit": 23990,
            "netAmount": 43019,
            "totalAmountPayable": 45987,
            "cost": {
                "total": 3498
            },
            "period": {
                "number": 48,
                "timeunit": "MO"
            },
            "downPayment": 10200,
            "interest": 1050,
            "currencyType": "EUR",
            "feeTypes": [{
                "typeOfFee": "CFF",
                "countryDescription": "Comision Apertura",
                "description": "Credit Facility Fee",
                "amount": 324.95,
                "serviceChargeRate": 0.0
            }],
            "interestRates": [{
                "typeInterestRate": "EffectiveInterest",
                "countryInterestRate": "TAE",
                "description": "Tasa anual equivalente",
                "value": "4.26"
            }],
            "auto": {
                "manufacturerDeposit": 0,
                "dealerDeposit": 0.0,
                "govermentGrant": 1500,
                "guaranteedFutureValue": 12760,
                "annualMileage": 15000,
                "excessMileageRate": "0.10",
                "brand": "AUTOGOOD",
                "model": "fantastic 3",
                "regNumber": "1234HTM",
                "VIN": "12345",
                "registrationDate": "2020-02-02",
                "mileage": 30000,
                "documentation": {
                    "SECCI": "https://www....",
                    "terms&Conditions": "lorem ipsum . . ."
                }
            },
            "paymentsSchedule": {
                "summaryPayments": [{
                    "typeInstalment": "recurrentPayment",
                    "numberOfTerms": 48,
                    "payment": 388,
                    "insuranceAmount": 0.0,
                    "feesPorcentage": 0.0,
                    "feesAmount": 0.0
                }]
            }
        }, {
            "simulationChecksum": "ZjU2ZGrfsdNmFkOjA=",
            "quoteId": 4,
            "productId": "xyz123",
            "retailPrice": 39768,
            "totalAmountFinanced": 25093,
            "amountOfCredit": 23990,
            "netAmount": 43019,
            "totalAmountPayable": 45987,
            "cost": {
                "total": 3498
            },
            "period": {
                "number": 48,
                "timeunit": "MO"
            },
            "downPayment": 10200,
            "interest": 1050,
            "currencyType": "EUR",
            "feeTypes": [{
                "typeOfFee": "CFF",
                "countryDescription": "Comision Apertura",
                "description": "Credit Facility Fee",
                "amount": 324.95,
                "serviceChargeRate": 0.0
            }],
            "interestRates": [{
                "typeInterestRate": "EffectiveInterest",
                "countryInterestRate": "TAE",
                "description": "Tasa anual equivalente",
                "value": "4.26"
            }],
            "auto": {
                "manufacturerDeposit": 0,
                "dealerDeposit": 0.0,
                "govermentGrant": 1500,
                "guaranteedFutureValue": 12760,
                "annualMileage": 15000,
                "excessMileageRate": "0.10",
                "brand": "AUTOGOOD",
                "model": "fantastic 1",
                "regNumber": "1234HTM",
                "VIN": "12345",
                "registrationDate": "2020-02-02",
                "mileage": 30000,
                "documentation": {
                    "SECCI": "https://www....",
                    "terms&Conditions": "lorem ipsum . . ."
                }
            },
            "paymentsSchedule": {
                "summaryPayments": [{
                    "typeInstalment": "recurrentPayment",
                    "numberOfTerms": 48,
                    "payment": 388,
                    "insuranceAmount": 0.0,
                    "feesPorcentage": 0.0,
                    "feesAmount": 0.0
                }]
            }
        }, {
            "simulationChecksum": "AjU2ZGrfsdNmFkOjA=",
            "quoteId": 5,
            "productId": "xyz123",
            "retailPrice": 39769,
            "totalAmountFinanced": 25094,
            "amountOfCredit": 23990,
            "netAmount": 43019,
            "totalAmountPayable": 45987,
            "cost": {
                "total": 3498
            },
            "period": {
                "number": 48,
                "timeunit": "MO"
            },
            "downPayment": 10200,
            "interest": 1050,
            "currencyType": "EUR",
            "feeTypes": [{
                "typeOfFee": "CFF",
                "countryDescription": "Comision Apertura",
                "description": "Credit Facility Fee",
                "amount": 324.95,
                "serviceChargeRate": 0.0
            }],
            "interestRates": [{
                "typeInterestRate": "EffectiveInterest",
                "countryInterestRate": "TAE",
                "description": "Tasa anual equivalente",
                "value": "4.26"
            }],
            "auto": {
                "manufacturerDeposit": 0,
                "dealerDeposit": 0.0,
                "govermentGrant": 1500,
                "guaranteedFutureValue": 12760,
                "annualMileage": 15000,
                "excessMileageRate": "0.10",
                "brand": "AUTOGOOD",
                "model": "fantastic 2",
                "regNumber": "1234HTM",
                "VIN": "12345",
                "registrationDate": "2020-02-02",
                "mileage": 30000,
                "documentation": {
                    "SECCI": "https://www....",
                    "terms&Conditions": "lorem ipsum . . ."
                }
            },
            "paymentsSchedule": {
                "summaryPayments": [{
                    "typeInstalment": "recurrentPayment",
                    "numberOfTerms": 48,
                    "payment": 388,
                    "insuranceAmount": 0.0,
                    "feesPorcentage": 0.0,
                    "feesAmount": 0.0
                }]
            }
        }, {
            "simulationChecksum": "EjU2ZGrfsdNmFkOjA=",
            "quoteId": 6,
            "productId": "xyz123",
            "retailPrice": 39775,
            "totalAmountFinanced": 25081,
            "amountOfCredit": 23990,
            "netAmount": 43019,
            "totalAmountPayable": 45987,
            "cost": {
                "total": 3498
            },
            "period": {
                "number": 48,
                "timeunit": "MO"
            },
            "downPayment": 10200,
            "interest": 1050,
            "currencyType": "EUR",
            "feeTypes": [{
                "typeOfFee": "CFF",
                "countryDescription": "Comision Apertura",
                "description": "Credit Facility Fee",
                "amount": 324.95,
                "serviceChargeRate": 0.0
            }],
            "interestRates": [{
                "typeInterestRate": "EffectiveInterest",
                "countryInterestRate": "TAE",
                "description": "Tasa anual equivalente",
                "value": "4.26"
            }],
            "auto": {
                "manufacturerDeposit": 0,
                "dealerDeposit": 0.0,
                "govermentGrant": 1500,
                "guaranteedFutureValue": 12760,
                "annualMileage": 15000,
                "excessMileageRate": "0.10",
                "brand": "AUTOGOOD",
                "model": "fantastic 3",
                "regNumber": "1234HTM",
                "VIN": "12345",
                "registrationDate": "2020-02-02",
                "mileage": 30000,
                "documentation": {
                    "SECCI": "https://www....",
                    "terms&Conditions": "lorem ipsum . . ."
                }
            },
            "paymentsSchedule": {
                "summaryPayments": [{
                    "typeInstalment": "recurrentPayment",
                    "numberOfTerms": 48,
                    "payment": 388,
                    "insuranceAmount": 0.0,
                    "feesPorcentage": 0.0,
                    "feesAmount": 0.0
                }]
            }
        }]
    });
 };

exports.createMultisimulationHandler = function(req, res){
   // retrieve users or, if there are none, init to empty array
   state.users = state.users || [];
   
   // persist user by adding to the state object
   state.users.push(req.body);
   
   return res.json({
       "quotes": [{
           "simulationChecksum": getId(),
           "quoteId": 1,
           "productId": "xyz123",
           "retailPrice": 39766,
           "totalAmountFinanced": 25092,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 1",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "AjU2ZGrfsdNmFkOjA=",
           "quoteId": 2,
           "productId": "xyz123",
           "retailPrice": 39764,
           "totalAmountFinanced": 25090,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 2",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "EjU2ZGrfsdNmFkOjA=",
           "quoteId": 3,
           "productId": "xyz123",
           "retailPrice": 39767,
           "totalAmountFinanced": 25092,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 3",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "ZjU2ZGrfsdNmFkOjA=",
           "quoteId": 4,
           "productId": "xyz123",
           "retailPrice": 39768,
           "totalAmountFinanced": 25093,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 1",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "AjU2ZGrfsdNmFkOjA=",
           "quoteId": 5,
           "productId": "xyz123",
           "retailPrice": 39769,
           "totalAmountFinanced": 25094,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 2",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "EjU2ZGrfsdNmFkOjA=",
           "quoteId": 6,
           "productId": "xyz123",
           "retailPrice": 39775,
           "totalAmountFinanced": 25081,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 3",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }]
   });
};

exports.createESHandler = function(req, res){
   // retrieve users or, if there are none, init to empty array
   state.users = state.users || [];
   
   // persist user by adding to the state object
   state.users.push(req.body);

   console.log("Getting user details");

   return res.json({
       "quotes": [{
           "simulationChecksum": getId("ES"),
           "quoteId": 1,
           "productId": "xyz123",
           "retailPrice": 39766,
           "totalAmountFinanced": 25092,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 1",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "AjU2ZGrfsdNmFkOjA=",
           "quoteId": 2,
           "productId": "xyz123",
           "retailPrice": 39764,
           "totalAmountFinanced": 25090,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 2",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "EjU2ZGrfsdNmFkOjA=",
           "quoteId": 3,
           "productId": "xyz123",
           "retailPrice": 39767,
           "totalAmountFinanced": 25092,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 3",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "ZjU2ZGrfsdNmFkOjA=",
           "quoteId": 4,
           "productId": "xyz123",
           "retailPrice": 39768,
           "totalAmountFinanced": 25093,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 1",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "AjU2ZGrfsdNmFkOjA=",
           "quoteId": 5,
           "productId": "xyz123",
           "retailPrice": 39769,
           "totalAmountFinanced": 25094,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 2",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "EjU2ZGrfsdNmFkOjA=",
           "quoteId": 6,
           "productId": "xyz123",
           "retailPrice": 39775,
           "totalAmountFinanced": 25081,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 3",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }]
   });
};

exports.createDEHandler = function(req, res){
   // retrieve users or, if there are none, init to empty array
   state.users = state.users || [];

   // persist user by adding to the state object
   state.users.push(req.body);
   
   return res.json({
       "quotes": [{
           "simulationChecksum": getId("DE"),
           "quoteId": 1,
           "productId": "xyz123",
           "retailPrice": 39766,
           "totalAmountFinanced": 25092,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 1",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "AjU2ZGrfsdNmFkOjA=",
           "quoteId": 2,
           "productId": "xyz123",
           "retailPrice": 39764,
           "totalAmountFinanced": 25090,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 2",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "EjU2ZGrfsdNmFkOjA=",
           "quoteId": 3,
           "productId": "xyz123",
           "retailPrice": 39767,
           "totalAmountFinanced": 25092,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 3",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "ZjU2ZGrfsdNmFkOjA=",
           "quoteId": 4,
           "productId": "xyz123",
           "retailPrice": 39768,
           "totalAmountFinanced": 25093,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 1",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "AjU2ZGrfsdNmFkOjA=",
           "quoteId": 5,
           "productId": "xyz123",
           "retailPrice": 39769,
           "totalAmountFinanced": 25094,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 2",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }, {
           "simulationChecksum": "EjU2ZGrfsdNmFkOjA=",
           "quoteId": 6,
           "productId": "xyz123",
           "retailPrice": 39775,
           "totalAmountFinanced": 25081,
           "amountOfCredit": 23990,
           "netAmount": 43019,
           "totalAmountPayable": 45987,
           "cost": {
               "total": 3498
           },
           "period": {
               "number": 48,
               "timeunit": "MO"
           },
           "downPayment": 10200,
           "interest": 1050,
           "currencyType": "EUR",
           "feeTypes": [{
               "typeOfFee": "CFF",
               "countryDescription": "Comision Apertura",
               "description": "Credit Facility Fee",
               "amount": 324.95,
               "serviceChargeRate": 0.0
           }],
           "interestRates": [{
               "typeInterestRate": "EffectiveInterest",
               "countryInterestRate": "TAE",
               "description": "Tasa anual equivalente",
               "value": "4.26"
           }],
           "auto": {
               "manufacturerDeposit": 0,
               "dealerDeposit": 0.0,
               "govermentGrant": 1500,
               "guaranteedFutureValue": 12760,
               "annualMileage": 15000,
               "excessMileageRate": "0.10",
               "brand": "AUTOGOOD",
               "model": "fantastic 3",
               "regNumber": "1234HTM",
               "VIN": "12345",
               "registrationDate": "2020-02-02",
               "mileage": 30000,
               "documentation": {
                   "SECCI": "https://www....",
                   "terms&Conditions": "lorem ipsum . . ."
               }
           },
           "paymentsSchedule": {
               "summaryPayments": [{
                   "typeInstalment": "recurrentPayment",
                   "numberOfTerms": 48,
                   "payment": 388,
                   "insuranceAmount": 0.0,
                   "feesPorcentage": 0.0,
                   "feesAmount": 0.0
               }]
           }
       }]
   });
};

var getId = function (prefix) {
   if (prefix) {
       return prefix + "_" + Math.floor((1 + Math.random()) * 0x1000000)
       .toString(16);
   } else {
       return Math.floor((1 + Math.random()) * 0x1000000)
       .toString(16);
   }
   
}; 