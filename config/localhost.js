module.exports = {
  queue: {
    publishMetaData:              'false',
    // For testing purposes we let claims expire very fast
    claimTimeout:                 30,
    artifactBucket:               'test-bucket-for-any-garbage',
    artifactContainer:            'artifacts',
    taskContainer:                'tasks',
    responseTimeComponent:        'test-queue'
  },

  server: {
    publicUrl:                    'http://localhost:60001',
    port:                         60001
  },

  /* TODO: See if this works:
  pulse: {
    username:   'guest',
    password:   'guest',
    hostname:   'localhost'
  }
  */

  aws: {
    region:                       'us-west-2'
  }
};