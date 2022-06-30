sap.ui.define([], function() {

    return {
        pageNumberStatus: function(iPageNumber) {
            if (iPageNumber < 100){
                return 'Information'
            } else if (iPageNumber >= 100 && iPageNumber< 400){
                return 'Warning'
            } else {
                return 'Error'
            }
        }
    }
});