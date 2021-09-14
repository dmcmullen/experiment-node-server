import { Experiment } from 'src/factory';
import { ExperimentUser } from 'src/types/user';

const apiKey = 'server-qz35UwzJ5akieoAdIgzM4m9MIiOLXLoz';

const testUser: ExperimentUser = { user_id: 'test_user' };

const client = Experiment.initializeLocal(apiKey);

beforeAll(() => {
  client.stopFlagConfigPoller();
});

test('ExperimentClient.evaluate, success', async () => {
  const variants = await client.evaluate(testUser);
  const variant = variants['sdk-ci-test'];
  expect(variant).toEqual({ value: 'on', payload: 'payload' });
});