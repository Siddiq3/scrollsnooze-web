import { test } from 'node:test';
import assert from 'node:assert/strict';
import { API_URL, deleteAccount, failureMessage, findAccount, readIdentity } from '../src/deletion-client.mjs';

const reply = (status, body = {}) => async () => new Response(JSON.stringify(body), { status });
const kindOf = async (promise) => { try { await promise; return 'none'; } catch (error) { return error.kind; } };

test('finds an active account, and treats others as nothing to delete', async () => {
 assert.deepEqual(await findAccount('t', reply(200, { state: 'active', incarnation: 'i' })), { kind: 'found', incarnation: 'i' });
 assert.deepEqual(await findAccount('t', reply(200, { state: 'deleting', incarnation: 'i' })), { kind: 'found', incarnation: 'i' });
 assert.deepEqual(await findAccount('t', reply(200, { state: 'deleted', incarnation: 'i' })), { kind: 'already-deleted' });
 assert.deepEqual(await findAccount('t', reply(200, { state: 'legacy_quarantined', incarnation: null })), { kind: 'none' });
});
test('deletes with a bearer token only, never cookies or URL data', async () => {
 let seen;
 const outcome = await deleteAccount('tok', 'inc', async (url, init) => { seen = { url, init }; return new Response(JSON.stringify({ state: 'completed' })); });
 assert.equal(outcome, 'deleted');
 assert.equal(seen.url, `${API_URL}/v1/account/delete`);
 assert.equal(seen.init.method, 'POST');
 assert.equal(seen.init.credentials, 'omit');
 assert.equal(seen.init.headers.authorization, 'Bearer tok');
 assert.equal(seen.init.headers['x-account-incarnation'], 'inc');
 assert.doesNotMatch(seen.url, /tok|inc/);
});
test('an unfinished deletion is reported as unfinished', async () => {
 assert.equal(await deleteAccount('t', 'i', reply(200, { state: 'in_progress' })), 'in-progress');
});
test('failures are classified and never claim success', async () => {
 assert.equal(await kindOf(deleteAccount('t', 'i', reply(401))), 'signin');
 assert.equal(await kindOf(deleteAccount('t', 'i', reply(403))), 'signin');
 assert.equal(await kindOf(deleteAccount('t', 'i', reply(409))), 'changed');
 assert.equal(await kindOf(deleteAccount('t', 'i', reply(500))), 'server');
 assert.equal(await kindOf(deleteAccount('t', 'i', async () => { throw new TypeError('blocked'); })), 'network');
 for (const kind of ['signin', 'changed', 'network', 'server']) assert.doesNotMatch(failureMessage(kind), /has been deleted|successfully/i);
});
test('shows the signed-in name safely, including non-English names and bad tokens', () => {
 const payload = Buffer.from(JSON.stringify({ name: 'సిద్దిక్', email: 'a@b.c' })).toString('base64url');
 assert.deepEqual(readIdentity(`h.${payload}.s`), { name: 'సిద్దిక్', email: 'a@b.c' });
 assert.deepEqual(readIdentity('nonsense'), { name: '', email: '' });
});
