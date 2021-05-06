const { Model } = require('objection')


class Integration extends Model {
  
  static get tableName() {
    return 'integrations'
  }

  static relationMappings() {
    const Connection = require('./Connection')
    const User = require('./User')
    return {
      connections: {
        relation: Model.HasManyRelation,
        modelClass: Connection,
        join: {
          from: 'integrations.id',
          to: 'connections.userid'
        }
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'integrations.id',
          // ManyToMany relation needs the `through` object
          // to describe the join table.
          through: {
            // If you have a model class for the join table
            // you need to specify it like this:
            // modelClass: PersonMovie,
            from: 'connections.integrationid',
            to: 'connections.userid'
          },
          to: 'users.id'
        }
      }
    }
  };


}

module.exports = Integration