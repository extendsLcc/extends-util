const cacheFormData = (whichForm) => {

    whichForm.data('form-cache', whichForm.serializeArray());

};