import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildDeletionRequest } from '../src/deletion-request.mjs';
test('email draft preserves plus-address and Unicode without creating extra URL fields', () => {
 const request = buildDeletionRequest('  person+app@example.com ', 'Name & family 👋');
 const url = new URL(request.href);
 assert.equal(url.pathname, 'siddiqkolimi.dev@gmail.com');
 assert.equal(url.searchParams.get('subject'), 'ScrollSnooze account deletion');
 assert.equal(url.searchParams.get('body'), request.body);
 assert.ok(request.body.includes('person+app@example.com'));
 assert.ok(request.body.includes('Name & family 👋'));
 assert.equal([...url.searchParams].length, 2);
});
test('invalid account email cannot prepare a request', () => {
 for (const email of ['', 'abc', 'a\nb@example.com', 'x@y']) assert.throws(() => buildDeletionRequest(email));
});
