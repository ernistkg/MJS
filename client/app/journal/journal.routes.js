'use strict';

import ArchiveController from './partials/ArchiveController';

export default function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('journal', {
      url: '/journal/:journal',
      template: '<journal></journal>'
    })
    .state('journal.about', {
      url: '/about',
      stateName: 'about',
      templateUrl: 'app/journal/partials/about.html'
    })
    .state('journal.aim-scope', {
      url: '/aim-scope',
      stateName: 'aim-scope',
      templateUrl: 'app/journal/partials/aim-scope.html'
    })
    .state('journal.terms-conditions', {
      url: '/terms-conditions',
      stateName: 'terms-conditions',
      templateUrl: 'app/journal/partials/terms-conditions.html'
    })
    .state('journal.abstract-index', {
      url: '/abstract-index',
      stateName: 'abstract-index',
      templateUrl: 'app/journal/partials/abstract-index.html'
    })
    .state('journal.editorial-board', {
      url: '/editorial-board',
      stateName: 'editorial-board',
      templateUrl: 'app/journal/partials/editorial-board.html'
    })
    .state('journal.last-volume-cover', {
      url: '/last-volume-cover',
      stateName: 'last-volume-cover',
      templateUrl: 'app/journal/partials/last-volume-cover.html'
    })
    .state('journal.archives', {
      url: '/archives',
      stateName: 'archives',
      templateUrl: 'app/journal/partials/archives.html'
    })
    .state('journal.old-archives', {
      url: '/old-archives',
      stateName: 'old-archives',
      templateUrl: 'app/journal/partials/old-archives.html'
    })
    .state('journal.archive-details', {
      url: '/archives/:id',
      templateUrl: 'app/journal/partials/archive-details.html',
      controller: ArchiveController,
      controllerAs: 'ArchiveCtrl'
    })
    .state('journal.rules', {
      url: '/rules',
      stateName: 'rules',
      templateUrl: 'app/journal/partials/rules.html'
    })
    .state('journal.submit', {
      url: '/submit',
      templateUrl: 'app/journal/partials/submit.html',
      authenticate: true
    })
    .state('journal.instructions', {
      url: '/instructions',
      stateName: 'instructions',
      templateUrl: 'app/journal/partials/instructions.html'
    });
}
