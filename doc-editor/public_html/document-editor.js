'use strict';


angular.module('document-editor', [])

.controller('DocumentEditorController', function($scope) {
  $scope.sampleText = "\
<p><b>Hello world</b></p>\
<p>Lets make some noise!</p>";
})


.directive('documentEditor', function($sce) {

  return {
    templateUrl: 'document-editor.html',
    link: function(scope, element, attr) {
      scope.text, scope.editedText = '';

      scope.$watch(attr.text, function(value) {
        scope.text = $sce.trustAsHtml(value);
        scope.editedText = value;
      });


      scope.updateModel = function() {
        var editedText = element.find('.document-editor-content').html();
        scope.editedText = editedText;
      };
    }
  };

});
