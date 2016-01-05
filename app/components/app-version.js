import AppVersionComponent from 'ember-cli-app-version/components/app-version';

import config from '../config/environment';

var name = config.APP.name;
var version = config.APP.version;

export default AppVersionComponent.extend({
  version: version,
  name: name,

  classNames: ['version-information', 'pop'],
  attributeBindings: ['versionTitle:data-pop-title','versionMessage:data-pop-msg'],

  versionTitle: 'Conventus Versionsinformationen',

  pureVersion: function() {
    if (version.split('+')[0]) {
      return version.split('+')[0];
    }
    return '';
  }.property('version'),

  gitCommitHash: function() {
    if (version.split('+')[1]) {
      return version.split('+')[1];
    }
    return '';
  }.property('version'),

  versionMessage: function() {
    let returnString = '';
    if (this.get('pureVersion').length > 0) {
      returnString += 'Die Installierte Conventus Version lautet: ' + this.get('pureVersion') + '▌';
    }
    if (this.get('gitCommitHash').length > 0) {
      returnString += 'Der Aktuelle Git Commit Hash lautet: ' + this.get('gitCommitHash');
    }
    return returnString;
  }.property('pureVersion', 'gitCommitHash'),
});
