const { Model } = require('objection')

class Connection extends Model {
  
  static get tableName() {
    return 'connections'
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static relationMappings() {
    const User = require('./User')
    const Integration = require('./Integration')
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'connections.userid',
          to: 'users.id'
        }
      },
      integration: {
        relation: Model.BelongsToOneRelation,
        modelClass: Integration,
        join: {
          from: 'connections.integrationid',
          to: 'integrations.id'
        }
      }
    }
  };

}

module.exports = Connection