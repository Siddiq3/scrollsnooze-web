import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { appAssociations } from '../scripts/app-associations.mjs';
test('uses the owner-provided certificate and leaves iOS unconfigured', () => {
 const result = appAssociations({});
 assert.deepEqual(result.android[0].target.sha256_cert_fingerprints, ['0E:1A:AC:CF:FC:4A:0C:E0:7D:25:18:F5:48:58:2A:E9:A3:55:C8:C8:3C:16:2B:D5:56:B6:15:D4:12:B9:D0:B0']);
 assert.deepEqual(result.apple, {applinks:{details:[]}});
 assert.throws(() => appAssociations({ANDROID_SIGNING_SHA256:'AA:BB'}));
});
test('signing association is scoped to ScrollSnooze and join paths', () => {
 const sha=Array(32).fill('AB').join(':');
 const result=appAssociations({ANDROID_SIGNING_SHA256:sha,APPLE_TEAM_ID:'ABCD123456'});
 assert.equal(result.android[0].target.package_name,'com.siddiqkolimi.scrollsnooze');
 assert.ok(result.android[0].target.sha256_cert_fingerprints.includes(sha));
 assert.equal(result.android[0].target.sha256_cert_fingerprints.length,2);
 assert.deepEqual(result.apple.applinks.details[0].components,[{'/':'/join/*'}]);
});
test('Vercel preserves opaque invite path and query with no trailing-slash redirect', () => {
 const config=JSON.parse(readFileSync(new URL('../vercel.json',import.meta.url),'utf8'));
 assert.equal(config.trailingSlash,false);
 assert.deepEqual(config.rewrites,[{source:'/join/:code',destination:'https://pwi8tdewmb.execute-api.us-east-1.amazonaws.com/join/:code'}]);
});
