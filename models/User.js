const { Model } = require('objection')

class User extends Model {
  
  static get tableName() {
    return 'users';
  }

  static relationMappings() {
    const Connection = require('./Connection')
    const Integration = require('./Integration')
    return {
      integrations: {
        relation: Model.ManyToManyRelation,
        modelClass: Integration,
        join: {
          from: 'users.id',
          // ManyToMany relation needs the `through` object
          // to describe the join table.
          through: {
            // If you have a model class for the join table
            // you need to specify it like this:
            // modelClass: PersonMovie,
            from: 'connections.userid',
            to: 'connections.integrationid',
            extra: ['headers', 'body', 'created_at', 'updated_at']
          },
          to: 'integrations.id'
        }
      }
    }
  };

}


module.exports = User