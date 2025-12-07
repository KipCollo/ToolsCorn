# validations

The library `joi` is used for validations.

```js
const Joi = require('joi');

const schema = {
   nameL Joi.string().min(4).required()
}

app.post('/api/user', (req,res) = >{

   const result = Joi.validate(req.body, schema);

   if(result.error){
      res.status(400).send(result.error.details[0].message);
      return;
   }
})