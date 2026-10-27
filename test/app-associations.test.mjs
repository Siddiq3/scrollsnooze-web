import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { appAssociations } from '../scripts/app-associations.mjs';
test('no unverified certificate or team is invented', () => {
 assert.deepEqual(appAssociations({}), {android:[],apple:{applinks:{details:[]}}});
 assert.throws(() => appAssociations({ANDROID_SIGNING_SHA256:'AA:BB'}));
});
test('signing association is scoped to ScrollSnooze and join paths', () => {
 const sha=Array(32).fill('AB').join(':');
 const result=appAssociations({ANDROID_SIGNING_SHA256:sha,APPLE_TEAM_ID:'ABCD123456'});
 assert.equal(result.android[0].target.package_name,'com.siddiqkolimi.scrollsnooze');
 assert.deepEqual(result.android[0].target.sha256_cert_fingerprints,[sha]);
 assert.deepEqual(result.apple.applinks.details[0].components,[{'/':'/join/*'}]);
});
test('Vercel preserves opaque invite path and query with no trailing-slash redirect', () => {
 const config=JSON.parse(readFileSync(new URL('../vercel.json',import.meta.url),'utf8'));
 assert.equal(config.trailingSlash,false);
 assert.deepEqual(config.rewrites,[{source:'/join/:code',destination:'https://pwi8tdewmb.execute-api.us-east-1.amazonaws.com/join/:code'}]);
});
