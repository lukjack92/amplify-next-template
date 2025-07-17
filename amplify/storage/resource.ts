import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'myS3Bucket',
  //name: 'testowy92',
  access: (allow) => ({
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
    ]
  })
});