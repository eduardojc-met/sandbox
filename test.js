

/*
 * PUT /teststtttt/asssa/1.0.0/pet
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 *//*
exports.putTeststttttAsssa1_0_0Pet = function (req, res) {
   res.status(400);

   // set response body and send
   res.json({});
};
*/
/*
 * POST /teststtttt/asssa/1.0.0/pet
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 *//*
exports.postTeststttttAsssa1_0_0Pet = function (req, res) {
   res.status(405);

   // set response body and send
   res.json({});
};
*/
/*
 * GET /teststtttt/asssa/1.0.0/pet/findByStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * status(type: array) - query parameter - Status values that need to be considered for filter
 *//*
exports.getTeststttttAsssa1_0_0PetFindbystatus = function (req, res) {
   req.checkQuery('status', 'Invalid query parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(200);

   // set response body and send
   res.type('json');
   res.render('teststtttt_getTeststttttAsssa1_0_0PetFindbystatus');
};
*/
/*
 * GET /teststtttt/asssa/1.0.0/pet/findByTags
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * tags(type: array) - query parameter - Tags to filter by
 *//*
exports.getTeststttttAsssa1_0_0PetFindbytags = function (req, res) {
   req.checkQuery('tags', 'Invalid query parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(200);

   // set response body and send
   res.type('json');
   res.render('teststtttt_getTeststttttAsssa1_0_0PetFindbytags');
};
*/
/*
 * GET /teststtttt/asssa/1.0.0/pet/{petId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * petId(type: integer) - path parameter - ID of pet to return
 */
exports.getTestPet = function (req, res) {
    req.check('petId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('testPet');
};

/*
 * POST /teststtttt/asssa/1.0.0/pet/{petId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * petId(type: integer) - path parameter - ID of pet that needs to be updated
 *//*
exports.postTeststttttAsssa1_0_0Pet2 = function (req, res) {
   req.check('petId', 'Invalid parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(405);

   // set response body and send
   res.json({});
};
*/
/*
 * DELETE /teststtttt/asssa/1.0.0/pet/{petId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * api_key(type: string) - header parameter
 * petId(type: integer) - path parameter - Pet id to delete
 *//*
exports.deleteTeststttttAsssa1_0_0Pet = function (req, res) {
   req.check('petId', 'Invalid parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(400);

   // set response body and send
   res.json({});
};
*/
/*
 * POST /teststtttt/asssa/1.0.0/pet/{petId}/uploadImage
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * petId(type: integer) - path parameter - ID of pet to update
 *//*
exports.postTeststttttAsssa1_0_0PetUploadimage = function (req, res) {
   req.check('petId', 'Invalid parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(200);

   // set response body and send
   res.type('json');
   res.render('teststtttt_postTeststttttAsssa1_0_0PetUploadimage');
};
*/
/*
 * GET /teststtttt/asssa/1.0.0/store/inventory
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 *//*
exports.getTeststttttAsssa1_0_0StoreInventory = function (req, res) {
   res.status(200);

   // set response body and send
   res.type('json');
   res.render('teststtttt_getTeststttttAsssa1_0_0StoreInventory');
};*/

/*
 * POST /teststtttt/asssa/1.0.0/store/order
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 *//*
exports.postTeststttttAsssa1_0_0StoreOrder = function (req, res) {
   res.status(200);

   // set response body and send
   res.type('json');
   res.render('teststtttt_postTeststttttAsssa1_0_0StoreOrder');
};
*/
/*
 * GET /teststtttt/asssa/1.0.0/store/order/{orderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * orderId(type: integer) - path parameter - ID of pet that needs to be fetched
 *//*
exports.getTeststttttAsssa1_0_0StoreOrder = function (req, res) {
   req.check('orderId', 'Invalid parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(200);

   // set response body and send
   res.type('json');
   res.render('teststtttt_getTeststttttAsssa1_0_0StoreOrder');
};*/

/*
 * DELETE /teststtttt/asssa/1.0.0/store/order/{orderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * orderId(type: integer) - path parameter - ID of the order that needs to be deleted
 *//*
exports.deleteTeststttttAsssa1_0_0StoreOrder = function (req, res) {
   req.check('orderId', 'Invalid parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(400);

   // set response body and send
   res.json({});
};
*/
/*
 * POST /teststtttt/asssa/1.0.0/user
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 *//*
exports.postTeststttttAsssa1_0_0User = function (req, res) {
   res.status(200);

   // set response body and send
   res.json({});
};
*/
/*
 * POST /teststtttt/asssa/1.0.0/user/createWithArray
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 *//*
exports.postTeststttttAsssa1_0_0UserCreatewitharray = function (req, res) {
   res.status(200);

   // set response body and send
   res.json({});
};*/

/*
 * POST /teststtttt/asssa/1.0.0/user/createWithList
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 *//*
exports.postTeststttttAsssa1_0_0UserCreatewithlist = function (req, res) {
   res.status(200);

   // set response body and send
   res.json({});
};*/

/*
 * GET /teststtttt/asssa/1.0.0/user/login
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * username(type: string) - query parameter - The user name for login
 * password(type: string) - query parameter - The password for login in clear text
 *//*
exports.getTeststttttAsssa1_0_0UserLogin = function (req, res) {
   req.checkQuery('username', 'Invalid query parameter').notEmpty();
   req.checkQuery('password', 'Invalid query parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.set('X-Rate-Limit', 'some value');
   res.set('X-Expires-After', 'some value');
   res.status(200);

   // set response body and send
   res.type('json');
   res.render('teststtttt_getTeststttttAsssa1_0_0UserLogin');
};
*/
/*
 * GET /teststtttt/asssa/1.0.0/user/logout
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 *//*
exports.getTeststttttAsssa1_0_0UserLogout = function (req, res) {
   res.status(200);

   // set response body and send
   res.json({});
};
*/
/*
 * GET /teststtttt/asssa/1.0.0/user/{username}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * username(type: string) - path parameter - The name that needs to be fetched. Use user1 for testing.
 *//*
exports.getTeststttttAsssa1_0_0User = function (req, res) {
   req.check('username', 'Invalid parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(200);

   // set response body and send
   res.type('json');
   res.render('teststtttt_getTeststttttAsssa1_0_0User');
};
*/
/*
 * PUT /teststtttt/asssa/1.0.0/user/{username}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * username(type: string) - path parameter - name that need to be updated
 *//*
exports.putTeststttttAsssa1_0_0User = function (req, res) {
   req.check('username', 'Invalid parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(400);

   // set response body and send
   res.json({});
};
*/
/*
 * DELETE /teststtttt/asssa/1.0.0/user/{username}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * username(type: string) - path parameter - The name that needs to be deleted
 *//*
exports.deleteTeststttttAsssa1_0_0User = function (req, res) {
   req.check('username', 'Invalid parameter').notEmpty();
   if (req.validationErrors()) {
       return res.json(400, req.validationErrorsJson());
   }
   res.status(400);

   // set response body and send
   res.json({});
};*/