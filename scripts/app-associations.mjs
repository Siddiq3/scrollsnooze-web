export const PACKAGE_NAME = 'com.siddiqkolimi.scrollsnooze';
export function appAssociations(env) {
  const fingerprints = (env.ANDROID_SIGNING_SHA256 || '').split(',').map(value => value.trim()).filter(Boolean);
  if (fingerprints.some(value => !/^([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}$/.test(value))) throw new Error('ANDROID_SIGNING_SHA256 must contain comma-separated SHA-256 certificate fingerprints');
  const team = env.APPLE_TEAM_ID || '';
  if (team && !/^[A-Z0-9]{10}$/.test(team)) throw new Error('APPLE_TEAM_ID must be a 10-character Apple team ID');
  return {
    android: fingerprints.length ? [{ relation: ['delegate_permission/common.handle_all_urls'], target: { namespace: 'android_app', package_name: PACKAGE_NAME, sha256_cert_fingerprints: fingerprints } }] : [],
    apple: { applinks: { details: team ? [{ appIDs: [`${team}.${PACKAGE_NAME}`], components: [{ '/': '/join/*' }] }] : [] } },
  };
}
