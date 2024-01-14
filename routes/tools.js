const controller = require('../controllers/tools');
var express = require('express');
var router = express.Router();
const upload = require('../middleware/upload');

/**
 * @swagger
 * tags:
 *  name: Tool
 *  description: Tool managment and administration
 */

/**
 * @swagger
 * definitions:
 *  Tool:
 *      required:
 *          - description
 *          - hire_price
 *          - tool_category
 *      properties:
 *          id:
 *              type: integer
 *              example: 4
 *          description:
 *              type: string
 *              example: Carpet Cleaner
 *          hire_price:
 *              type: integer
 *              example: 21.50
 *          tool_category:
 *              type: object
 *              $ref: '#/definitions/ToolCategory'
 *  NewTool:
 *      required:
 *          - description
 *          - hire_price
 *          - tool_category 
 *      properties:
 *          description:
 *              type: string
 *              example: Power Washer
 *          hire_price:
 *              type: integer
 *              example: 16.70
 *          tool_category_id:
 *              type: integer
 *              example: 1
 *  ID:
 *      required:
 *          - id
 *      properties:
 *          id:
 *              type: integer
 *              example: 15
 */

/**
 * @swagger
 * /tools/:
 *  get:
 *      summary: Gets all tools
 *      description: Returns all tools
 *      tags: [Tool]
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: all tools are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Tool'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/Error'
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /tools/desc/{value}:
 *  get:
 *      summary: Returns a tool using provided description
 *      description: Returns a tool  with a provided description
 *      tags: [Tool]
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: value
 *            schema:
 *              type: string
 *            required: true
 *            description: description of chosen tool
 *            example: Air Pump
 *      responses:
 *          200:
 *              description: returns specified tool
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/Tool'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/Error'
 */
router.get('/desc/:value', controller.getByDesc);

/**
 * @swagger
 * /tools/{id}:
 *  get:
 *      summary: Returns a tool using provided ID
 *      description: Returns a tool with a provided ID
 *      tags: [Tool]
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: ID of chosen tool
 *            example: 3
 *      responses:
 *          200:
 *             description: returns specified tool
 *             schema:
 *                  type: object
 *                  $ref: '#/definitions/Tool'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/Error'
 */
router.get('/:id', controller.getById);


/**
 * @swagger
 * /tools/:
 *  post:
 *      summary: adds new a tool
 *      description: Adds a tool
 *      tags: [Tool]
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: updates specified tool
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/NewTool'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/Error'
 */
router.post('/', upload.single("image"), controller.create);

/**
 * @swagger
 * /tools/:
 *  delete:
 *      summary: Removes tool from database
 *      description: Removes a tool with a provided ID
 *      tags: [Tool]
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: removes specified tool
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/Error'
 */
router.delete('/',controller.deleting);

/**
 * @swagger
 * /tools/:
 *  put:
 *      summary: Updates tool using provided ID
 *      description: Updates a tool with a provided ID
 *      tags: [Tool]
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: removes specified tool
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/Tool'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  $ref: '#/definitions/Error'
 */
router.put('/', upload.single("image"), controller.update);

module.exports = router;