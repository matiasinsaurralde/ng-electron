angular.module( 'sampleApp', [ 'electron' ] )
  .controller( 'HomeController', [ '$scope', function( $scope ) {
    var self = this;
    console.log( 'hello from homecontroller' );
    $scope.$on( 'someEvent', function( event, args ) {
      console.log( 'receiving someEvent', event, args );
    });
  }])
  .run( [ '$rootScope', function( $rootScope ) {
    $rootScope.ipc = require( 'ipc' );
    $rootScope.ipc.on( 'message', function( event, message ) {
    });
    // $rootScope.$broadcast( 'someEvent', { the: 'args' } );
  }]);
