/**
 * Allows a document to include another. Caveat: this doesn't update any links, it literally just 
 * copy and pastes it pretty much. COnsider making links absolute, or have a relation that does
 * not change.
 */
function include(file, ref) {
	
	var idString = ref;
	if (ref == null || ref === undefined) {
		idString = '#' + file.substring(0, file.lastIndexOf("."));
		idString = idString.replace('/', '-');
		idString = idString.replace("//.", '-')
	}
	
	$(idString).load(file); 
	
}